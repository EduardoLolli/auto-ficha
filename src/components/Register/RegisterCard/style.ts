import styled from "styled-components";

export const StyledRegisterForm = styled.div`
  display: flex;
  padding: 0px 24px 24px;
  flex-direction: column;
  gap: 1rem;

  .StyledCardHeader {
    padding-bottom: 1rem;
    padding: 24px;
    & > h2 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
      color: #1e293b;
    }
    & > p {
      margin: 0;
      margin-top: 4px;
      text-align: center;
      color: #475569;
    }
  }

  .StyledCardContent {
    padding: 0 24px 24px 24px;
  }
`;

export const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #1e293b, #172554, #1e293b);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  overflow: hidden;
`;

export const BackgroundElement = styled.div<{ delay?: string }>`
  position: absolute;
  border-radius: 9999px;
  filter: blur(3rem);
  ${({ delay }) => delay && `animation-delay: ${delay};`}
`;

export const BackgroundElement1 = styled(BackgroundElement)`
  top: 25%;
  left: 25%;
  width: 24rem;
  height: 24rem;
  background-color: rgba(59, 130, 246, 0.1); /* blue-500/10 */
`;

export const BackgroundElement2 = styled(BackgroundElement)`
  bottom: 25%;
  right: 25%;
  width: 40rem;
  height: 40rem;
  background-color: rgba(100, 116, 139, 0.1); /* slate-500/10 */
`;

export const BackgroundElement3 = styled(BackgroundElement)`
  top: 50%;
  left: 50%;
  width: 18rem;
  height: 18rem;
  background-color: rgba(29, 78, 216, 0.05); /* blue-700/5 */
  transform: translate(-50%, -50%);
  animation: none; /* No pulse for this one */
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 28rem; /* max-w-md */

  @media (min-width: 1024px) {
    max-width: 32rem; /* lg:max-w-lg */
  }

  @media (min-width: 1280px) {
    max-width: 36rem; /* xl:max-w-xl */
  }
`;

export const LogoSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const LogoIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const IconCircle = styled.div`
  padding: 0.75rem;
  background: linear-gradient(
    to right,
    #2563eb,
    #475569
  ); /* blue-600 to slate-600 */
  border-radius: 9999px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
`;

export const Title = styled.h1`
  font-size: 2.25rem; /* text-4xl */
  font-weight: 700; /* font-bold */
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* drop-shadow-lg */
`;

export const Subtitle = styled.p`
  color: #cbd5e1; /* slate-300 */
  font-size: 1.125rem; /* text-lg */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* space-y-6 */
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* space-y-2 */
`;

export const StyledLabel = styled.label`
  color: #e2e8f0; /* slate-200 */
  font-size: 1rem; /* text-base */
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  padding-left: 3rem; /* pl-12 */
  background-color: rgba(30, 41, 59, 0.5); /* slate-800/50 */
  border: 1px solid #334155; /* border-slate-700 */
  color: white;
  &::placeholder {
    color: #94a3b8; /* slate-400 */
  }
  &:focus {
    border-color: #3b82f6; /* blue-500 */
    box-shadow: 0 0 0 1px #3b82f6; /* ring-blue-500 */
  }
  font-size: 1rem; /* text-base */
  padding-top: 0.5rem; /* py-2 */
  padding-bottom: 0.5rem; /* py-2 */
`;

export const Icon = styled.div`
  position: absolute;
  left: 0.75rem; /* left-3 */
  top: 50%;
  transform: translateY(-50%);
  height: 1.25rem; /* h-5 */
  width: 1.25rem; /* w-5 */
  color: #94a3b8; /* slate-400 */
`;

export const DateTimeGenderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* grid-cols-1 */
  gap: 1rem; /* gap-4 */

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr); /* sm:grid-cols-2 */
  }
`;

export const StyledSelectTrigger = styled.div`
  background-color: rgba(30, 41, 59, 0.5); /* bg-slate-800/50 */
  border: 1px solid #334155; /* border-slate-700 */
  color: white;
`;

export const StyledSelectContent = styled.div`
  background-color: #1e293b; /* bg-slate-800 */
  border: 1px solid #334155; /* border-slate-700 */
  color: white;
`;

export const StyledAlert = styled.div`
  border: 1px solid #f87171; /* border-red-400 */
  background-color: rgba(153, 27, 27, 0.2); /* red-900/20 */
  color: #fca5a5; /* red-300 */
`;

export const StyledAlertDescription = styled.div`
  color: #fca5a5; /* red-300 */
`;

export const SuccessAlert = styled.div`
  border: 1px solid #4ade80; /* border-green-400 */
  background-color: rgba(22, 101, 52, 0.2); /* green-900/20 */
  color: #86efac; /* green-300 */
`;

export const SuccessAlertDescription = styled.div`
  color: #86efac; /* green-300 */
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(
    to right,
    #2563eb,
    #475569
  ); /* blue-600 to slate-600 */
  &:hover {
    background: linear-gradient(
      to right,
      #1d4ed8,
      #334155
    ); /* blue-700 to slate-700 */
  }
  color: white;
  font-size: 1.125rem; /* text-lg */
  padding-top: 0.75rem; /* py-3 */
  padding-bottom: 0.75rem; /* py-3 */
  border-radius: 0.5rem; /* rounded-lg */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
  transition: all 0.2s ease-in-out;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const LoginLinkWrapper = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  & p {
    color: #cbd5e1; /* slate-300 */
    font-size: 0.875rem; /* text-sm */
  }
`;

export const LoginLinkButton = styled.button`
  color: #60a5fa; /* blue-400 */
  &:hover {
    color: #93c5fd; /* blue-300 */
  }
  padding: 0;
`;
