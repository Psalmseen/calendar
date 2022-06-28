import { CSSResultGroup, html, LitElement, PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { calendarStyle } from './calandar.styles';
import dayjs, { Dayjs } from 'dayjs';

@customElement('calandar-app')
export class CalandarApp extends LitElement {
  private INITIAL_MONTH = dayjs().month();
  private INITIAL_YEAR = dayjs().year();
  private WEEKDAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  private daysOfMonth: number = 0;
  private paddingDays: number = 0;

  @property({ type: Number }) currentMonthIndex: number = this.INITIAL_MONTH;
  @property({ type: Number }) currentyear: number = this.INITIAL_YEAR;

  changeYear(direction: 'front' | 'back') {
    let updatedTime: Dayjs;
    if (direction === 'front') {
      updatedTime = dayjs(
        new Date(this.currentyear, this.currentMonthIndex)
      ).add(1, 'year');
    } else {
      updatedTime = dayjs(
        new Date(this.currentyear, this.currentMonthIndex)
      ).subtract(1, 'year');
    }
    this.currentMonthIndex = updatedTime.month();
    this.currentyear = updatedTime.year();
  }
  changeMonth(direction: 'front' | 'back') {
    let updatedTime: Dayjs;
    if (direction === 'front') {
      updatedTime = dayjs(
        new Date(this.currentyear, this.currentMonthIndex)
      ).add(1, 'month');
    } else {
      updatedTime = dayjs(
        new Date(this.currentyear, this.currentMonthIndex)
      ).subtract(1, 'month');
    }
    this.currentMonthIndex = updatedTime.month();
    this.currentyear = updatedTime.year();
  }

  getToday() {
    this.currentMonthIndex = dayjs().month();
    this.currentyear = dayjs().year();
  }

  getPaddingDays() {
    this.paddingDays = dayjs(new Date(this.currentyear, this.currentMonthIndex))
      .startOf('month')
      .get('day');
  }
  getDaysOfMonth() {
    this.daysOfMonth = dayjs(
      new Date(this.currentyear, this.currentMonthIndex)
    ).daysInMonth();
  }

  static styles: CSSResultGroup = calendarStyle;
  protected render(): unknown {
    console.log(dayjs(new Date(2022, 6, 31)).add(15, 'days'));
    this.getPaddingDays();
    this.getDaysOfMonth();
    return html`<div class="calendar">
      <header class="head">
        <h1 class="month-name">
          ${dayjs(new Date(this.currentyear, this.currentMonthIndex)).format(
            'MMMM YYYY'
          )}
        </h1>
        <div class="nav">
          <span @click=${() => this.changeYear('back')} class="f-back"><<</span>
          <span @click=${() => this.changeMonth('back')} class="back"><</span>
          <span @click=${this.getToday} class="today">Today</span>
          <span @click=${() => this.changeMonth('front')} class="front">></span>
          <span @click=${() => this.changeYear('front')} class="f-front"
            >>></span
          >
        </div>
      </header>
      <main class="calendar-content">
        ${this.WEEKDAY.map((day) => html`<h2><span>${day}</span></h2>`)}
        ${Array(this.paddingDays)
          .fill('')
          .map((_) => html`<div class="padding"></div>`)}
        ${Array(this.daysOfMonth)
          .fill('')
          .map((_, i) => html`<h3><span>${i + 1}</span></h3>`)}
        ${Array(
          (this.daysOfMonth + this.paddingDays) % 7 !== 0
            ? 7 - ((this.daysOfMonth + this.paddingDays) % 7)
            : 0
        )
          .fill('')
          .map((_) => html`<div class="padding"></div>`)}
      </main>
    </div>`;
  }
}
