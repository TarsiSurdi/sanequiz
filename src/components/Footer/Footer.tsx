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
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  position: fixed;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;