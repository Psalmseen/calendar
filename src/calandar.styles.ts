import { css } from 'lit';

export const calendarStyle = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .calendar {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .head {
    padding: 2rem;
    background-color: #e4e4e4;
    display: flex;
    border-radius: 0.5rem 0.5rem 0 0;
    justify-content: space-between;
    align-items: center;
  }
  .nav > * {
    font-family: monospace;
    font-size: 2rem;
    cursor: pointer;
    padding: 0 1rem;
    border-radius: 4px;
  }

  .nav > *:hover {
    background-color: #f8f8f8;
  }
  .calendar-content {
    border: 5px solid #e4e4e4;
    border-radius: 0 0 0.5rem 0.5rem;
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
  .calendar-content > * {
    border: 1px solid #c3c3c3;
    text-align: center;
    display: grid;
  }
  .calendar-content > * > span {
    place-self: center;
  }
`;
