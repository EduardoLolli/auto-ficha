import styled from "styled-components";

export const StyledCharCard = styled.div`
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
  border: 1px solid #1e3a8a;
  backdrop-filter: blur(4px);

  border-radius: 0.5rem;
  border: 1px solid rgba(59, 130, 246, 0.2);
  background-color: rgba(50, 77, 150, 0.45);
  color: #e5e7eb;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05),
    0 1.5px 6px 0 rgba(30, 58, 138, 0.08);

  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 1.5rem;

  .card-header {
    padding-bottom: 0.5rem;
  }

  .card-char-name {
    color: #fff;
    font-size: 1.125rem;
  }

  .card-char-desc {
    color: #d1d5db;
    font-size: 0.875rem;
    line-height: 1.625;
  }

  .card-atrib {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  .card-atrib-stats {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card-atrib-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: #d1d5db;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .card-atrib-icon {
    width: 1rem;
    height: 1rem;
  }

  .card-stats {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .card-stats-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
  }

  .card-stats-span {
    color: #d1d5db;
    text-transform: capitalize;
  }

  .card-line {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 1;
    margin-left: 0.75rem;
  }
  .card-bar {
    flex: 1;
    height: 0.5rem;
  }

  .progress {
    position: relative;
    height: 0.5rem;
    width: 100%;
    overflow: hidden;
    border-radius: 9999px;
    background-color: #64748b;
  }

  .indicator {
    height: 100%;
    width: 100%;
    flex: 1;
    background-color: #2563eb;
    transition: all 0.3s;
  }

  .char-sele-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    white-space: nowrap;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5;
    outline: none;

    border: 1px solid #2651c6;
    transition-property: background-color, color, border-color, box-shadow;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;

    height: 2.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    width: 100%;
    transition: all 0.2s;
  }

  .selected-button {
    background-color: #2563eb;
    &:hover {
      background-color: #1d4ed8;
    }
    color: #fff;
  }

  .unselected-button {
    background-color: #2d55ce;
    &:hover {
      background-color: #1e3a8a;
    }
    color: #ffffff;
  }
`;
