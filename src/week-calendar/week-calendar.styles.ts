import { css } from 'lit';

export const weekCalendarStyle = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: avenir;
  }
  .calendar-content-wrapper {
    height: 80vh;
    border: 1px solid #afafaf;
    overflow: hidden;
  }
  .calendar-content-inner-wrapper {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 80vh;
    padding-left: 17px;
    box-sizing: content-box;
    width: 100%;
  }
  .calendar-content {
    padding-right: 32px;
    width: 100%;
    box-sizing: content-box;
    display: flex;
  }
  .time {
    display: grid;
    grid-template-rows: repeat(48, 60px);
    grid-template-columns: 1fr;
    width: 74px;
    font-size: 14px;
    text-align: center;
  }
  .time > div {
    align-self: start;
    transform: translateY(-50%);
  }
  .card-grid {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(1440, 2px);
    position: relative;
  }
  .line {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: space-between;
    z-index: -1;
    opacity: 0.3;
  }
  .row {
    flex-direction: column;
  }
  .days-list {
    display: flex;
    margin-left: 92px;
    padding: 1rem 0;
  }
  .days-list > * {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .day {
    font-size: 12px;
    padding-left: 12px;
  }
  .date {
    font-size: 18px;
    font-weight: 900;
  }
`;
