import styled from "styled-components";

export const StyledLoading = styled.div`
  position: fixed;
  inset: 0;
  background: linear-gradient(to bottom right, oklch(0.18 0.03 40), #3d2100ff, oklch(0.18 0.03 40));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;

  .loading-background {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .loading-rand {
    position: absolute;
    animation: pulse 2s infinite;
  }

  .loading-stars {
    width: 0.25rem;
    height: 0.25rem;
    @media (min-width: 640px) {
      width: 0.5rem;
      height: 0.5rem;
    }
    color: #fa6060ff;
    opacity: 0.6;
  }

  .loading-container {
    position: relative;
    z-index: 10;
    text-align: center;
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: 28rem;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 640px) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  .load-header {
    margin-bottom: 2rem;
    @media (min-width: 640px) {
      margin-bottom: 3rem;
    }
  }

  .load-header-container {
    position: relative;
    display: inline-block;
  }

  .load-circle {
    width: 6rem;
    height: 6rem;
    @media (min-width: 640px) {
      width: 8rem;
      height: 8rem;
    }
    border-width: 4px;
    border-style: solid;
    border-color: rgba(246, 59, 59, 0.3);
    border-radius: 9999px;
    animation: spin 1s linear infinite;
    position: absolute;
    inset: 0;
  }

  .load-reverse-circle {
    width: 5rem;
    height: 5rem;
    @media (min-width: 640px) {
      width: 7rem;
      height: 7rem;
    }
    border-width: 2px;
    border-style: solid;
    border-color: rgba(59, 130, 246, 0.5);
    border-radius: 9999px;
    animation: spin 1s linear infinite reverse;
    position: absolute;
    inset: 0.5rem;
    @media (min-width: 640px) {
      inset: 0.5rem;
    }

    animation-direction: reverse;
    animation-duration: 3s;
  }

  .shield-div {
    width: 6rem;
    height: 6rem;
    @media (min-width: 640px) {
      width: 8rem;
      height: 8rem;
    }
    background-color: oklch(0.18 0.03 40);
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    animation: pulse 2s infinite;
  }

  .shield {
    width: 2.5rem;
    height: 2.5rem;
    @media (min-width: 640px) {
      width: 3.5rem;
      height: 3.5rem;
    }
    color: #fff;
  }

  .shield-shine {
    position: absolute;
    inset: 0.5rem;
    background-color: rgba(250, 96, 96, 0.2);
    border-radius: 9999px;
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .orbital-div {
    position: absolute;
    inset: 0;
    animation: spin 1s linear infinite;
    animation-duration: 4s;
  }

  .sword-icon {
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 1rem;
    height: 1rem;
    @media (min-width: 640px) {
      width: 1.25rem;
      height: 1.25rem;
    }
    color: #fd9393ff;
  }

  .user-icon {
    position: absolute;
    top: 50%;
    right: -0.5rem;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    @media (min-width: 640px) {
      width: 1.25rem;
      height: 1.25rem;
    }
    color: #fd9393ff;
  }

  .crown-icon {
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 1rem;
    height: 1rem;
    @media (min-width: 640px) {
      width: 1.25rem;
      height: 1.25rem;
    }
    color: #fd9393ff;
  }

  .sparkles-icon {
    position: absolute;
    top: 50%;
    left: -0.5rem;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    @media (min-width: 640px) {
      width: 1.25rem;
      height: 1.25rem;
    }
    color: #fd9393ff;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes ping {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  .loading-title {
    font-size: 1.5rem;
    @media (min-width: 640px) {
      font-size: 1.875rem;
    }
    @media (min-width: 1024px) {
      font-size: 2.25rem;
    }
    font-weight: 700;
    color: #fedbdbff;
    margin-bottom: 0.5rem;
    @media (min-width: 640px) {
      margin-bottom: 1rem;
    }
  }

  .loading-text {
    margin-bottom: 1.5rem;
    @media (min-width: 640px) {
      margin-bottom: 2rem;
    }

    p {
      font-size: 1rem;
      @media (min-width: 640px) {
        font-size: 1.125rem;
      }
      color: #fd9393ff;
      margin-bottom: 0.5rem;
    }
  }

  .loading-footer {
    margin-top: 1.5rem;
    @media (min-width: 640px) {
      margin-top: 2rem;
    }

    p {
      font-size: 0.75rem;
      color: #fa6060ff;
      opacity: 0.6;
    }
  }
  .background-shine {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle,
      rgba(30, 58, 138, 0.2) 0%,
      transparent 70%,
      transparent 100%
    );
    animation: pulse 2s infinite;
  }
`;
