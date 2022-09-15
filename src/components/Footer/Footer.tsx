import styled from "styled-components";

import FooterParagraph from "./FooterParagraph";

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <footer className={className}>
      <FooterParagraph />
    </footer>
  );
};

export default styled(Footer)`
  padding-bottom: env(safe-area-inset-bottom);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: fit-content;

  background-color: #1a5d8a;
`;
