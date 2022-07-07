import { css } from 'lit';

export const weekCalendarStyle = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: avenir;
  }

  .calendar-content-wrapper {
    height: 90vh;
    margin-top: 10vh;
    position: relative;
    border: 1px solid #afafaf;
    overflow: hidden;
  }
  .calendar-content-inner-wrapper {
    height: 90vh;
    width: 100%;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  html {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .calendar-content {
    width: max-content;
    display: grid;
    grid-template-columns: 74px 1fr;
    grid-template-rows: max-content 1fr;
    grid-row-gap: 0.5rem;
  }
  .time {
    display: grid;
    grid-row: 2 / -1;
    grid-column: 1 / span 1;
    position: sticky;
    left: 0px;
    z-index: 1;
    background-color: #fff;
    font-size: 14px;
    text-align: center;
  }
  .time > div {
    align-self: start;
    transform: translateY(-50%);
  }
  .card-grid {
    display: grid;
    grid-template-rows: repeat(1440, 2px);
    grid-column: 2 / -1;
    grid-row: 2 / -1;
    position: relative;
  }
  .line {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: space-between;
    z-index: -1;
    opacity: 0.3;
    grid-column: 1/ -1;
  }
  .row {
    flex-direction: column;
  }
  .days-list {
    display: grid;
    /* padding: 1rem 0; */
    border-bottom: 1px solid #afafaf;
    grid-row: 1 / span 1;
    grid-column: 2 / -1;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 6;
  }
  .employee {
    flex-direction: column;
  }
  .employee img {
    height: 40px;
    width: 40px;
    border: 1px solid red;
    border-radius: 50%;
    display: block;
  }
  .white-bg {
    background: #fff;
    position: sticky;
    top: 0;
    left: 0px;
    z-index: 2;

    /* grid-row: 1 / 2;
    grid-column: 1 / 2; */
  }
  .days-list > * {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    column-gap: 12px;
  }
  .day {
    font-size: 12px;
  }
  .date {
    font-size: 18px;
    font-weight: 900;
  }
  .employee-name {
    font-size: 14px;
    text-align: center;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .d-none {
    display: none !important;
  }
  .next {
    position: absolute;
    right: 0;
    top: 0;
  }
  .prev {
    position: absolute;
    left: 0;
    top: 0;
  }
  @media screen and (max-width: 600px) {
    .week {
      flex-direction: column;
    }
  }
`;
