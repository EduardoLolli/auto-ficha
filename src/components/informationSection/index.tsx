import React from "react";
import StyledInformationSection from "../../styles/components/informationSection";

const InformationSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledInformationSection>
      {children}
    </StyledInformationSection>
  );
};

export default InformationSection;
