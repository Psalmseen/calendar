import dayjs from 'dayjs';
import { CSSResultGroup, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { weekCalendarStyle } from './week-calendar.styles';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { stubData } from '../resources/fetched-data';
import { data } from '../resources/fetched-data.js';
import 'lit-media-query/lit-media-query.js';
@customElement('week-calendar')
export class WeekCalandar extends LitElement {
  static styles: CSSResultGroup = weekCalendarStyle;

  private startOfWeek = dayjs().startOf('week').format('YYYY-MM-DD HH:mm');
  private mobileQuery = '(max-width: 768px)';

  @property({ type: Array }) private employeeAppointments = [...stubData];
  /* .slice(0, 3) */
  @property({ type: Number }) private numberOfGridOnScreen = 7;
  @property({ type: Boolean }) isEmployeeDisplay = true;
  @property({ type: Boolean }) isNextShown = true;
  @property({ type: Boolean }) isPrevShown = true;
  @query('#calendar-view') scrollView: HTMLElement;
  @query('#select-day') selectDay: HTMLSelectElement;
  @query('#select-employee') selectEmployee: HTMLSelectElement;

  // METHODS
  protected firstUpdated(): void {
    this.shadowRoot?.querySelector('#now-line')?.scrollIntoView({
      block: 'center',
      inline: 'center',
    });
    this.detectScroll();
    this.handleSelect();
  }

  detectScroll() {
    this.scrollView.addEventListener('scroll', () => {
      const { scrollLeft, offsetWidth, scrollWidth } = this.scrollView;
      // console.log(
      //   { scrollLeft },
      //   { offsetWidth },
      //   { scrollWidth },
      //   { condition4Nxt: offsetWidth + scrollLeft >= scrollWidth },
      //   { condition4Prev: scrollLeft === 0 }
      // );
      if (offsetWidth + scrollLeft >= scrollWidth) {
        this.isNextShown = false;
      } else {
        this.isNextShown = true;
      }
      if (scrollLeft === 0) {
        this.isPrevShown = false;
      } else {
        this.isPrevShown = true;
      }
    });
  }

  scrollCalendarBy(size: number) {
    this.scrollView.scrollBy({ top: 0, left: size, behavior: 'smooth' });
  }

  handleQuery({ detail: { value } }: { detail: { value: boolean } }) {
    this.numberOfGridOnScreen = value ? 3 : 7;
  }

  filterByEmployee(employeeNameParam: string, employeeArray: data[]) {
    this.employeeAppointments =
      employeeNameParam === 'all'
        ? employeeArray
        : employeeArray.filter(
            ({ employeeName }) => employeeNameParam === employeeName
          );
  }

  filterbyDate(date: string[]) {
    return this.isEmployeeDisplay
      ? stubData.map((result) => {
          return {
            ...result,
            appointments: result.appointments.filter((appointments) =>
              date.includes(appointments.date)
            ),
          };
        })
      : [...stubData];

    // console.log(
    //   this.employeeAppointments.filter(
    //     (result) => result.appointments.length > 0
    //   ),
    //   stubData.filter((result) => result.appointments.length > 0),
    //   { date }
    // );
  }

  handleChangeView(emp: boolean) {
    this.isEmployeeDisplay = emp;
  }

  setTimeNow() {
    const nowOffsetDay = Math.ceil(dayjs().diff(this.startOfWeek, 'day', true));
    const nowOffsetMinute = dayjs().diff(dayjs().startOf('day'), 'minute');
    const nowGridRow = `${nowOffsetMinute + 1} / span 1`;
    const timeDisplay =
      this.selectDay?.options[this.selectDay?.selectedIndex].value ===
        dayjs().format('YYYY-MM-DD') || !this.isEmployeeDisplay
        ? 'block'
        : 'none';

    const nowGridColumn = this.isEmployeeDisplay
      ? '1 / -1'
      : `${nowOffsetDay} / span 1`;
    return {
      nowGridColumn,
      nowGridRow,
      timeDisplay,
    };
  }

  handleSelect() {
    const selectDay = this.selectDay;
    const { value: dayValue } = selectDay.options[selectDay.selectedIndex];
    // this.filterbyDate([dayValue]);
    const selectEmployee = this.selectEmployee;
    const { value: employeeValue } =
      selectEmployee.options[selectEmployee.selectedIndex];

    this.filterByEmployee(employeeValue, this.filterbyDate([dayValue]));
    console.log(dayValue, 'here');
  }
  protected render(): unknown {
    const { nowGridColumn, nowGridRow, timeDisplay } = this.setTimeNow();
    if (this.selectDay) {
      this.handleSelect();
    }

    return html`<div class="week-calendar">
      <lit-media-query
        .query=${this.mobileQuery}
        @changed=${this.handleQuery}
      ></lit-media-query>
      <!-- Navigation buttons -->
      <div>
        <input
          @change=${() => this.handleChangeView(true)}
          id="emp"
          name="Employee"
          type="radio"
          .checked=${this.isEmployeeDisplay}
        />
        <label for="emp"> employees</label>
      </div>
      <div>
        <input
          @change=${() => this.handleChangeView(false)}
          id="day"
          name="Employee"
          type="radio"
        />
        <label for="day"> days</label>
      </div>
      <select @change=${this.handleSelect} id="select-day">
        <option
          value=${dayjs().startOf('week').format('YYYY-MM-DD')}
          .selected=${dayjs().startOf('week').format('YYYY-MM-DD') ===
          dayjs().format('YYYY-MM-DD')}
        >
          ${dayjs().startOf('week').format('ddd, DD-MMM-YY')}
        </option>
        <option
          value=${dayjs().startOf('week').add(1, 'day').format('YYYY-MM-DD')}
          .selected=${dayjs()
            .startOf('week')
            .add(1, 'day')
            .format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')}
        >
          ${dayjs().startOf('week').add(1, 'day').format('ddd, DD-MMM-YY')}
        </option>
        <option
          value=${dayjs().startOf('week').add(2, 'day').format('YYYY-MM-DD')}
          .selected=${dayjs()
            .startOf('week')
            .add(2, 'day')
            .format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')}
        >
          ${dayjs().startOf('week').add(2, 'day').format('ddd, DD-MMM-YY')}
        </option>
        <option
          value=${dayjs().startOf('week').add(3, 'day').format('YYYY-MM-DD')}
          .selected=${dayjs()
            .startOf('week')
            .add(3, 'day')
            .format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')}
        >
          ${dayjs().startOf('week').add(3, 'day').format('ddd, DD-MMM-YY')}
        </option>
        <option
          value=${dayjs().startOf('week').add(4, 'day').format('YYYY-MM-DD')}
          .selected=${dayjs()
            .startOf('week')
            .add(4, 'day')
            .format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')}
        >
          ${dayjs().startOf('week').add(4, 'day').format('ddd, DD-MMM-YY')}
        </option>
        <option
          value=${dayjs().startOf('week').add(5, 'day').format('YYYY-MM-DD')}
          .selected=${dayjs()
            .startOf('week')
            .add(5, 'day')
            .format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')}
        >
          ${dayjs().startOf('week').add(5, 'day').format('ddd, DD-MMM-YY')}
        </option>
        <option
          value=${dayjs().startOf('week').add(6, 'day').format('YYYY-MM-DD')}
          .selected=${dayjs()
            .startOf('week')
            .add(6, 'day')
            .format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')}
        >
          ${dayjs().startOf('week').add(6, 'day').format('ddd, DD-MMM-YY')}
        </option>
      </select>
      <select @change=${this.handleSelect} id="select-employee">
        <option selected value="all">All Employees</option>
        ${stubData.map(
          ({ employeeName }) =>
            html`<option value=${employeeName}>${employeeName}</option>`
        )}
      </select>
      <div class="buttons">
        <button
          class=${classMap({ 'd-none': !this.isPrevShown, prev: true })}
          @click=${() => this.scrollCalendarBy(-window.innerWidth + 100)}
        >
          prev
        </button>
        <button
          class=${classMap({ 'd-none': !this.isNextShown, next: true })}
          @click=${() => this.scrollCalendarBy(window.innerWidth - 100)}
        >
          next
        </button>
      </div>
      <!-- End of nav button -->
      <!-- Start of calendar content  -->
      <main class="calendar-content-wrapper">
        <div id="calendar-view" class="calendar-content-inner-wrapper">
          <section id="calendar-content" class="calendar-content">
            <div class="white-bg"></div>
            <!-- Head section of the page shows the days or the employee -->
            <div
              class="days-list"
              style=${styleMap({
                gridTemplateColumns: `repeat(${
                  this.isEmployeeDisplay ? this.employeeAppointments.length : 7
                }, calc((100vw - 110px ) / ${
                  this.isEmployeeDisplay
                    ? Math.min(
                        this.employeeAppointments.length,
                        this.numberOfGridOnScreen
                      )
                    : this.numberOfGridOnScreen
                }))`,
                placeContent: 'center',
              })}
            >
              <!-- Logic to display days or Employee starts here -->
              ${this.isEmployeeDisplay
                ? this.employeeAppointments.map(
                    ({ employeeName, imgUrl }) => html`<div class="employee">
                      <div class="employee-img-wrapper">
                        <img src=${imgUrl} />
                      </div>
                      <h3 class="employee-name">${employeeName}</h3>
                    </div>`
                  )
                : Array(7) /*  Days display here */
                    .fill('')
                    .map(
                      (_, i) => html`<div class="week">
                        <span class="date">
                          ${dayjs(this.startOfWeek)
                            .add(i, 'day')
                            .format('DD')}</span
                        >
                        <span class="day">
                          ${dayjs(this.startOfWeek)
                            .add(i, 'day')
                            .format('dddd')}</span
                        >
                      </div>`
                    )}
            </div>
            <!-- Ends here -->
            <!-- The time on the left side starts here -->
            <div class="time">
              ${Array(48)
                .fill('')
                .map(
                  (_, i) =>
                    html`<div>
                      ${dayjs()
                        .startOf('day')
                        .add(30 * i, 'minute')
                        .format('HH : mm')}
                    </div>`
                )}
            </div>
            <!-- ends here -->
            <!-- Calendar grid starts here -->
            <div
              class="card-grid"
              style=${styleMap({
                gridTemplateColumns: `repeat(${
                  this.isEmployeeDisplay ? this.employeeAppointments.length : 7
                }, calc((100vw - 110px ) / ${
                  this.isEmployeeDisplay &&
                  this.employeeAppointments.length < this.numberOfGridOnScreen
                    ? this.employeeAppointments.length
                    : this.numberOfGridOnScreen
                }))`,
              })}
            >
              <!-- Row and column grid lines -->
              <span class="line column">
                ${Array(
                  this.isEmployeeDisplay
                    ? this.employeeAppointments.length + 1
                    : 8
                )
                  .fill('')
                  .map((_) => html`<hr />`)}
              </span>
              <span class="line row">
                ${Array(25)
                  .fill('')
                  .map((_) => html`<hr />`)}
              </span>
              <!-- Grid lines ends here -->
              <!-- Card content for the grid goes here -->
              ${this.employeeAppointments.map(
                ({ employeeName, appointments }, i) => {
                  return appointments.map(
                    ({ serviceName, startTime, endTime, date }) => {
                      const offsetMinute =
                        dayjs('2019-01-25')
                          .startOf('day')
                          .diff(`2019-01-25 ${startTime}`, 'minute') * -1;
                      const durationOfService = dayjs(
                        `${'2019-01-25'} ${endTime}`
                      ).diff(`${'2019-01-25'} ${startTime}`, 'minute');
                      const offsetDay = Math.ceil(
                        dayjs(date).diff(this.startOfWeek, 'day', true)
                      );
                      const gridRow = `${
                        offsetMinute + 1
                      } / span ${durationOfService}`;

                      const gridColumn = `${
                        (this.isEmployeeDisplay ? i : offsetDay) + 1
                      } / span 1`;

                      return html`<div
                        style=${styleMap({
                          gridRow,
                          gridColumn,
                          background: '#343',
                          display: 'grid',
                          placeContent: 'center',
                          color: '#fff',
                        })}
                      >
                        ${employeeName}
                        <br />
                        ${serviceName}
                        <br />
                        on ${date}
                        <br />
                        ${startTime} - ${endTime}
                      </div>`;
                    }
                  );
                }
              )}
              <!-- Content ends here and line for now begin -->
              <hr
                id="now-line"
                style=${styleMap({
                  gridRow: nowGridRow,
                  gridColumn: nowGridColumn,
                  border: '1px solid red',
                  display: timeDisplay,
                })}
              />
              <!-- Line ends here -->
            </div>
          </section>
        </div>
      </main>
    </div>`;
  }
}
