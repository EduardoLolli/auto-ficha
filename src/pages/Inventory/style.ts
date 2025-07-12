import styled from "styled-components";

export const StyledInventory = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    rgb(2, 17, 49),
    rgb(2, 33, 82) 50%,
    rgb(3, 22, 70) 100%
  );
  padding-bottom: 1.5rem;

  .inventory-container {
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
  }

  .inventory-header {
    text-align: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    @media (min-width: 640px) {
      margin-bottom: 2rem;
    }
  }

  .inventory-icon-div {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    @media (min-width: 640px) {
      width: 4rem;
      height: 4rem;
      margin-bottom: 1rem;
    }
    background-color: #2563eb;
    border-radius: 9999px;
    margin-bottom: 0.75rem;
  }

  .inventory-icon {
    width: 1.5rem;
    height: 1.5rem;
    color: #fff;
    @media (min-width: 640px) {
      width: 2rem;
      height: 2rem;
    }
  }

  .inventory-title {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    color: #dbeafe;
    margin-bottom: 0.5rem;

    @media (min-width: 640px) {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }

    @media (min-width: 1024px) {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
  }

  .inventory-p {
    font-size: 0.875rem;
    color: #7dd3fc;

    @media (min-width: 640px) {
      font-size: 1rem;
    }
  }

  .desktop-layout {
    display: none;

    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }

  .inv-header {
    display: flex;
    gap: 0.375rem;
    justify-content: space-between;
    padding: 1.5rem;
    padding-bottom: 1rem;
  }

  .inv-title {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: #dbeafe;
  }

  .inv-descrip {
    color: #7dd3fc;
  }

  .inv-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;

    @media (min-width: 640px) {
      margin-top: 0;
    }
  }
  .inv-coin-div {
    display: flex;
    align-items: center;
    color: #facc15;
  }

  .inv-coin {
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
  }

  .inv-span {
    font-weight: 500;
  }

  .inv-peso-div {
    display: flex;
    align-items: center;
    color: #7dd3fc;
  }

  .inv-peso {
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
  }

  .inv-kg {
    font-size: 0.875rem;
  }

  .inv-content {
    padding: 1.5rem;
    padding-top: 0;
    max-height: 32rem;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #334155 #1e293b;

    &::-webkit-scrollbar {
      width: 6px;
      background: #1e293b;
    }

    &::-webkit-scrollbar-thumb {
      background: #334155;
      border-radius: 6px;
    }
  }

  .item-space {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .item-row {
    position: relative;
    border-width: 1px;
    border-radius: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background-color: rgba(55, 65, 81, 0.3);
    }
  }

  .item-row-div {
    display: flex;
    align-items: center;
  }

  .item-row-icon-div {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.75rem;
  }

  .icon-row-icon {
    color: #dbeafe;
  }

  .item-row-inf {
    flex: 1;
  }

  .item-inf {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .common-icon {
    border: 1px solid #4b5563; /* gray-600 */
    background: rgba(31, 41, 55, 0.5); /* gray-800/50 */
  }
  .uncommon-icon {
    border: 1px solid #16a34a; /* green-600 */
    background: rgba(21, 128, 61, 0.3); /* green-900/30 */
  }
  .rare-icon {
    border: 1px solid #2563eb; /* blue-600 */
    background: rgba(30, 58, 138, 0.3); /* blue-900/30 */
  }
  .epic-icon {
    border: 1px solid #9333ea; /* purple-600 */
    background: rgba(88, 28, 135, 0.3); /* purple-900/30 */
  }
  .legendary-icon {
    border: 1px solid #ca8a04; /* yellow-600 */
    background: rgba(113, 63, 18, 0.3); /* yellow-900/30 */
  }
  .default-icon {
    border: 1px solid #4b5563; /* gray-600 */
    background: rgba(31, 41, 55, 0.5); /* gray-800/50 */
  }

  .common {
    color: #9ca3af; /* gray-400 */
  }
  .uncommon {
    color: #22c55e; /* green-400 */
  }
  .rare {
    color: #3b82f6; /* blue-400 */
  }
  .epic {
    color: #a21caf; /* purple-400 */
  }
  .legendary {
    color: #facc15; /* yellow-400 */
  }
  .default {
    color: #9ca3af; /* gray-400 */
  }

  .name-font {
    font-weight: 500;
  }

  .item-peso {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .item-peso-text {
    font-size: 0.75rem;
    color: #7dd3fc;
  }

  .item-qnt {
    font-size: 12px;
    color: #fff;
    background-color: #2563eb;
    border: 1px solid transparent;
    padding: 0px 3px;
    border-radius: 10px;
    transition: background-color 0.2s;
    &:hover {
      background-color: rgba(121, 164, 255, 0.8);
    }
  }
`;
