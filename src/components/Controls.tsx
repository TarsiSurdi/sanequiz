import { ReactNode } from "react";
import styled from "styled-components";

const Controls: React.FC<{ className?: string; children?: ReactNode }> = ({
  className,
  children,
}) => {
  return <div className={className}>{children}</div>;
};

export default styled(Controls)`
  background-color: white;
`;
