import styled from "styled-components";
import { X, Check } from "react-feather";

const Controls: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <X color="red" size={64} />
      <Check color="green" size={64} />
    </div>
  );
};

export default styled(Controls)`
  flex: 2;
  display: flex;

  align-items: center;
  justify-content: space-around;

  width: 100%;
`;
