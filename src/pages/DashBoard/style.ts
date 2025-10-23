import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  background: oklch(0.18 0.03 40);
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

export const Header = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 2.25rem;
  font-weight: bold;
  color: oklch(0.95 0.02 70);
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: oklch(0.65 0.025 55);
`;

export const ButtonGroup = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.75rem;
`;

export const Button = styled.button<{
  $variant?: "primary" | "outline" | "ghost";
  $size?: "sm" | "lg";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  border: none;

  ${(props) => {
    if (props.$variant === "outline") {
      return `
        background: transparent;
        border: 1px solid oklch(0.35 0.04 38);
        color: oklch(0.95 0.02 70);
        padding: ${props.$size === "lg" ? "0.75rem 1.5rem" : "0.5rem 1rem"};
        
        &:hover {
          background: oklch(0.28 0.035 38);
        }
      `;
    }
    if (props.$variant === "ghost") {
      return `
        background: transparent;
        color: oklch(0.95 0.02 70);
        padding: ${props.$size === "sm" ? "0.25rem" : "0.5rem 1rem"};
        
        &:hover {
          background: oklch(0.28 0.035 38);
        }
      `;
    }
    return `
      background: oklch(0.58 0.15 65);
      color: oklch(0.15 0.03 40);
      padding: ${props.$size === "lg" ? "0.75rem 1.5rem" : "0.5rem 1rem"};
      
      &:hover {
        background: oklch(0.62 0.16 60);
      }
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `;
  }}
`;

export const CampaignsGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: oklch(0.22 0.035 38);
  border: 1px solid oklch(0.35 0.04 38);
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:hover {
    border-color: oklch(0.58 0.15 65);
  }
`;

export const CardHeader = styled.div`
  padding: 1.5rem;
  padding-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: oklch(0.93 0.015 68);
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
  font-size: 0.875rem;
  color: oklch(0.65 0.025 55);
`;

export const CardContent = styled.div`
  padding: 0 1.5rem 1.5rem;
  flex: 1;
`;

export const CardFooter = styled.div`
  padding: 1.5rem;
  padding-top: 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CodeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background: oklch(0.28 0.035 38);
  border: 1px solid oklch(0.35 0.04 38);
  border-radius: 0.375rem;
`;

export const CodeInner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CodeText = styled.span`
  color: oklch(0.95 0.02 70);
  font-family: monospace;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
`;

export const IconButton = styled.button`
  height: 1.75rem;
  width: 1.75rem;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: oklch(0.35 0.04 38);
  }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: oklch(0.65 0.025 55);
`;

export const Dialog = styled.div<{ $open: boolean }>`
  display: ${(props) => (props.$open ? "flex" : "none")};
  position: fixed;
  inset: 0;
  z-index: 50;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

export const DialogContent = styled.div`
  background: oklch(0.22 0.035 38);
  border: 1px solid oklch(0.35 0.04 38);
  border-radius: 0.5rem;
  padding: 1.5rem;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
`;

export const DialogHeader = styled.div`
  margin-bottom: 1rem;
`;

export const DialogTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: oklch(0.93 0.015 68);
  margin-bottom: 0.5rem;
`;

export const DialogDescription = styled.p`
  font-size: 0.875rem;
  color: oklch(0.65 0.025 55);
`;

export const DialogBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`;

export const FormGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: oklch(0.93 0.015 68);
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  background: oklch(0.28 0.035 38);
  border: 1px solid oklch(0.35 0.04 38);
  border-radius: 0.375rem;
  color: oklch(0.95 0.02 70);
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: oklch(0.58 0.15 65);
    box-shadow: 0 0 0 2px oklch(0.58 0.15 65 / 0.2);
  }

  &::placeholder {
    color: oklch(0.65 0.025 55);
  }
`;

export const CodeInput = styled(Input)`
  text-align: center;
  max-width: 474px;
  font-size: 1.125rem;
  font-family: monospace;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem 0.75rem;
  background: oklch(0.28 0.035 38);
  border: 1px solid oklch(0.35 0.04 38);
  border-radius: 0.375rem;
  color: oklch(0.95 0.02 70);
  font-size: 0.875rem;
  resize: vertical;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: oklch(0.58 0.15 65);
    box-shadow: 0 0 0 2px oklch(0.58 0.15 65 / 0.2);
  }

  &::placeholder {
    color: oklch(0.65 0.025 55);
  }
`;

export const HelpText = styled.p`
  font-size: 0.75rem;
  color: oklch(0.65 0.025 55);
`;

export const DialogFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1rem;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  border: 2px dashed oklch(0.35 0.04 38);
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
`;

export const EmptyStateTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: oklch(0.93 0.015 68);
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`;

export const EmptyStateText = styled.p`
  color: oklch(0.65 0.025 55);
  margin-bottom: 1rem;
`;
