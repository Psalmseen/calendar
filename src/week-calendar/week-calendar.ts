import dayjs from 'dayjs';
import { CSSResultGroup, html, LitElement, PropertyValueMap } from 'lit';
import { customElement } from 'lit/decorators.js';
import { weekCalendarStyle } from './week-calendar.styles';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('week-calendar')
export class WeekCalandar extends LitElement {
  static styles: CSSResultGroup = weekCalendarStyle;
  private timeStamps = [
    { date: '2022-06-26', startTime: '09:30', endTime: '10:20' },
    { date: '2022-06-26', startTime: '19:30', endTime: '21:10' },
    { date: '2022-06-27', startTime: '12:30', endTime: '15:00' },
    { date: '2022-06-28', startTime: '09:50', endTime: '11:00' },
    { date: '2022-06-29', startTime: '16:30', endTime: '17:40' },
    { date: '2022-06-30', startTime: '13:30', endTime: '14:20' },
    { date: '2022-07-01', startTime: '11:45', endTime: '12:20' },
    { date: '2022-07-02', startTime: '12:00', endTime: '14:20' },
  ];
  private startOfWeek = dayjs().startOf('week').format('YYYY-MM-DD hh:mm');

  protected firstUpdated(): void {
    this.shadowRoot.querySelector('#now-line').scrollIntoView({
      block: 'center',
    });
  }
  protected render(): unknown {
    console.log(this.startOfWeek, dayjs('2022-06-25 13:15'));
    const nowOffsetDay = Math.ceil(dayjs().diff(this.startOfWeek, 'day', true));
    const nowOffsetMinute = dayjs().diff(dayjs().startOf('day'), 'minute');
    const nowGridRow = `${nowOffsetMinute + 1} / span 1`;
    const nowGridColumn = `${nowOffsetDay} / span 1`;
    console.log(nowOffsetDay);
    return html`<div class="week-calendar">
      <div class="days-list">
        ${Array(7)
          .fill('')
          .map(
            (_, i) => html`<div>
              <span class="date">
                ${dayjs(this.startOfWeek).add(i, 'day').format('DD')}</span
              >
              <span class="day">
                ${dayjs(this.startOfWeek).add(i, 'day').format('dddd')}</span
              >
            </div>`
          )}
      </div>
      <main class="calendar-content-wrapper">
        <div class="calendar-content-inner-wrapper">
          <section class="calendar-content">
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
            <div class="card-grid">
              <span class="column line">
                ${Array(8)
                  .fill('')
                  .map((_) => html`<hr />`)}
              </span>
              <span class="line row">
                ${Array(25)
                  .fill('')
                  .map((_) => html`<hr />`)}
              </span>
              ${this.timeStamps.map((timeStamp) => {
                const offsetDay = Math.ceil(
                  dayjs(this.startOfWeek).diff(timeStamp.date, 'day', true) * -1
                );
                const offsetMinute =
                  dayjs(timeStamp.date)
                    .startOf('day')
                    .diff(
                      `${timeStamp.date} ${timeStamp.startTime}`,
                      'minute'
                    ) * -1;
                const durationOfService = dayjs(
                  `${timeStamp.date} ${timeStamp.endTime}`
                ).diff(`${timeStamp.date} ${timeStamp.startTime}`, 'minute');
                const gridRow = `${
                  offsetMinute + 1
                } / span ${durationOfService}`;
                const gridColumn = `${offsetDay + 1} / span 1`;

                return html`<div
                  style=${styleMap({
                    border: '1px solid green',
                    background: 'green',
                    gridRow,
                    gridColumn,
                  })}
                >
                  ${timeStamp.date} <br />
                  ${timeStamp.startTime} - ${timeStamp.endTime}
                </div>`;
              })}
              <hr
                id="now-line"
                style=${styleMap({
                  gridRow: nowGridRow,
                  gridColumn: nowGridColumn,
                  border: '1px solid red',
                })}
              />
            </div>
          </section>
        </div>
      </main>
    </div>`;
  }
}
