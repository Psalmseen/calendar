import { css } from 'lit';

export const spDashboardAppointmentCardStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .appt-card {
    padding: 1rem;
    position: relative;
    border-radius: 4px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.08);
    font-family: avenir;
    font-weight: 500;
    color: #1d252d;
    height: 100%;
    width: 100%;
    cursor: pointer;
    border-top: 4px solid;
    /* z-index: 50; */
    background-color: #fff;
  }
  .gold-top {
    border-top-color: #feb63e;
  }
  .blue-top {
    border-top-color: #48b3f5;
  }
  .green-top {
    border-top-color: #26d07c;
  }
  .time {
    font-size: 14px;
  }
  .style {
    font-size: 12px;
    padding: 0.3rem 0;
  }
  .state {
    font-size: 12px;
    font-weight: 900;
  }
  .tool-tip {
    position: absolute;
    z-index: 100;
    padding: 6px;
  }
  .tip--side {
    right: 0;
    top: 50%;
    transform: translate(100%, -50%);
  }
  .tip--top {
    top: -4px;
    left: 50%;
    transform: translate(-50%, -100%);
  }
  .tool-tip-content {
    background-color: #7091ac;
    border-radius: 4px;
    padding: 1rem;
    color: #fff;
    width: 340px;
    height: 164px;
    cursor: auto;
  }
  .tool-tip-arrow {
    background-color: #7091ac;
    position: absolute;
  }
  .tip--side > .tool-tip-arrow {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
    height: 12px;
    width: 8px;
  }

  .tip--top > .tool-tip-arrow {
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    clip-path: polygon(0 0, 100% 0%, 50% 100%);
    height: 8px;
    width: 12px;
  }
  .tool-tip__details-img {
    display: flex;
    align-items: center;
    font-size: 12px;
    gap: 0.5rem;
    font-weight: 500;
  }
  .tool-tip__img-wrapper {
    height: 40px;
    width: 40px;
    background-color: #442;
    border-radius: 50%;
  }
  .tool-tip__name {
    font-weight: 900;
  }
  hr {
    border: 1px solid #87a4bc;
    margin: 1rem 0;
  }
  .tool-tip__lower {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    font-size: 12px;
  }
  .tool-tip__time {
    font-size: 14px;
  }
  .tool-tip__style {
    font-weight: 900;
    margin: 0.3rem 0;
  }
  .tool-tip__price-edit {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  }
  .tool-tip__edit {
    color: #feb63e;
    cursor: pointer;
    font-weight: 900;
  }
  .tool-tip__price {
    font-size: 18px;
    font-weight: 900;
  }
  .d-none {
    display: none;
  }
`;
