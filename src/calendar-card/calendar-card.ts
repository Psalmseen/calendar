import { CSSResultGroup, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { spDashboardAppointmentCardStyles } from './calendar-card.styles';
import { classMap } from 'lit/directives/class-map.js';

export interface SpDashboardAppointmentCardData {
  time: string;
  hairstyle: string;
  apptStage: 'Process' | 'Fulfilled' | 'Upcoming';
  employeeName: string;
  appointmentDetails: string;
  price: number;
}

@customElement('calendar-card')
export class SpDashboardAppointmentCard extends LitElement {
  static styles: CSSResultGroup = spDashboardAppointmentCardStyles;
  @property({ type: Boolean }) private _isMouseonCard = false;
  @property({ type: Boolean }) private isToolTipTop = false;
  @property({ type: Object }) data: SpDashboardAppointmentCardData = {
    time: '10:30 - 12:00',
    hairstyle: 'Messi hair style',
    apptStage: 'Process',
    employeeName: 'Sean Thomas',
    appointmentDetails: '1h 30m with Jordan Natolo',
    price: 55.2,
  };
  render() {
    return html`<div
      class=${classMap({
        'appt-card': true,
        'green-top': this.data.apptStage === 'Fulfilled',
        'blue-top': this.data.apptStage === 'Upcoming',
        'gold-top': this.data.apptStage === 'Process',
      })}
      @mouseenter=${this.toogleToolTip}
      @mouseleave=${this.toogleToolTip}
    >
      <p class="time">${this.data.time}</p>
      <p class="style">${this.data.hairstyle}</p>
      <p class="state">${this.data.apptStage}</p>
      <div
        class=${classMap({
          'tool-tip': true,
          'tip--top': this.isToolTipTop,
          'tip--side': !this.isToolTipTop,
          'd-none': !this._isMouseonCard,
        })}
      >
        <span class="tool-tip-arrow"></span>
        <div class="tool-tip-content">
          <div class="tool-tip__details-img">
            <div class="tool-tip__img-wrapper"></div>
            <div class="tool-tip__detail">
              <p class="tool-tip__name">${this.data.employeeName}</p>
              <p class="tool-tip__state">${this.data.apptStage}</p>
            </div>
          </div>
          <hr />
          <div class="tool-tip__lower">
            <div class="tool-tip__time-style">
              <p class="tool-tip__time">${this.data.time}</p>
              <p class="tool-tip__style">${this.data.hairstyle}</p>
              <p class="tool-tip__duration">${this.data.appointmentDetails}</p>
            </div>
            <div class="tool-tip__price-edit">
              <p class="tool-tip__edit">Edit Appt</p>
              <p class="tool-tip__price">$${this.data.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  toogleToolTip() {
    this._isMouseonCard = !this._isMouseonCard;
  }
}
