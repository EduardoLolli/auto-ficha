import styled from "styled-components";

export const StyledChSlCard = styled.div`
  border: 1px solid #334155; /* border-slate-700 */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1); /* hover:shadow-xl */
    transform: scale(1.02); /* hover:scale-[1.02] */
  }
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.5); /* white/50 */
  backdrop-filter: blur(0.5rem); /* backdrop-blur-sm */
`;



export const HeaderContent = styled.div`
  max-width: 72rem; /* max-w-6xl */
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem; /* gap-3 */
`;

export const UserIconWrapper = styled.div`
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.2); /* bg-white/20 */
  border-radius: 9999px; /* rounded-full */
`;

export const WelcomeText = styled.div`
  & h1 {
    font-size: 1.25rem; /* text-xl */
    font-weight: 700; /* font-bold */
  }
  & p {
    font-size: 0.875rem; /* text-sm */
    color: #e2e8f0; /* slate-200 */
  }
`;

export const CharacterSelectionSection = styled.div`
  max-width: 72rem; /* max-w-6xl */
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem; /* p-6 */

  @media (min-width: 1024px) {
    padding-top: 2.5rem; /* lg:py-10 */
    padding-bottom: 2.5rem; /* lg:py-10 */
  }
`;

export const SectionHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left; /* lg:text-left */
  }

  & h2 {
    font-size: 1.875rem; /* text-3xl */
    font-weight: 700; /* font-bold */
    color: #1e293b; /* slate-800 */
    margin-bottom: 0.5rem;
  }
  & p {
    font-size: 1.125rem; /* text-lg */
    color: #475569; /* slate-600 */
  }
`;



export const CharacterCardHeader = styled.div`
  padding-bottom: 1rem;
`;

export const CharacterAvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem; /* space-y-3 */
`;

export const CharacterAvatar = styled.div`
  width: 5rem; /* w-20 */
  height: 5rem; /* h-20 */
  border: 4px solid #2563eb; /* border-blue-700 */
`;

export const CharacterAvatarFallback = styled.div`
  font-size: 1.125rem; /* text-lg */
  background-color: #334155; /* bg-slate-700 */
  color: white;
`;

export const CharacterName = styled.div`
  text-align: center;
  & h3 {
    font-weight: 700; /* font-bold */
    font-size: 1.125rem; /* text-lg */
    color: #1e293b; /* slate-800 */
  }
  & p {
    font-size: 0.875rem; /* text-sm */
    color: #475569; /* slate-600 */
  }
`;

export const CharacterCardContent = styled.div`
  padding-top: 0;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem; /* space-y-4 */
  }
`;

export const LevelBadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* gap-2 */
`;

export const ClassIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  & > div {
    padding: 0.75rem;
    background-color: #f1f5f9; /* slate-100 */
    border-radius: 9999px; /* rounded-full */
  }
`;

export const HpBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* space-y-2 */
`;

export const HpText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span:first-child {
    font-size: 0.875rem; /* text-sm */
    font-weight: 500; /* font-medium */
    color: #334155; /* slate-700 */
  }
  & span:last-child {
    font-size: 0.875rem; /* text-sm */
    color: #475569; /* slate-600 */
  }
`;

export const HpBarBackground = styled.div`
  width: 100%;
  background-color: #e2e8f0; /* slate-200 */
  border-radius: 9999px; /* rounded-full */
  height: 0.5rem; /* h-2 */
`;

export const HpBarFill = styled.div<{ $percentage: number; $color: string }>`
  height: 0.5rem; /* h-2 */
  border-radius: 9999px; /* rounded-full */
  transition: all 0.3s ease-in-out;
  background-color: ${({ $color }) => $color};
  width: ${({ $percentage }) => Math.min($percentage, 100)}%;
`;

export const SelectCharacterButton = styled.button`
  width: 100%;
  background: linear-gradient(
    to right,
    #2563eb,
    #475569
  ); /* from-blue-600 to-slate-600 */
  &:hover {
    background: linear-gradient(
      to right,
      #1d4ed8,
      #334155
    ); /* hover:from-blue-700 hover:to-slate-700 */
  }
`;

export const AddIconWrapper = styled.div`
  padding: 1rem;
  background-color: #cbd5e1; /* slate-300 */
  border-radius: 9999px; /* rounded-full */
  margin-bottom: 1rem;
`;

export const AddTitle = styled.h3`
  font-weight: 600; /* font-semibold */
  color: #334155; /* slate-700 */
  margin-bottom: 0.5rem;
`;

export const AddDescription = styled.p`
  font-size: 0.875rem; /* text-sm */
  color: #64748b; /* slate-500 */
  margin-bottom: 1rem;
`;
