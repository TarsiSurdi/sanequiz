import styled from "styled-components";
import { X, Check } from "react-feather";

interface ControlsButtonProps {
  type: string;
}

const ControlsButton = (props: ControlsButtonProps) => {
  const { type }: ControlsButtonProps = props;

  switch (type) {
    case "Cross":
      return <X className="CrossButton" color="red" size={64}></X>;
    case "Check":
      return <Check className="CheckButton" color="green" size={64}></Check>;
    default:
      return <p>Missing argument on &lt;ControlsButton&gt; component!</p>;
  }
};

const Controls: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <ControlsButton type="Cross" />
      <ControlsButton type="Check" />
    </div>
  );
};

export default styled(Controls)`
  padding: 2rem;

  flex: 2;
  display: flex;

  align-items: center;
  justify-content: space-around;

  width: 100%;

  svg {
    padding: 0 1em;

    border-radius: 10px;
  }

  svg.CrossButton {
    background-color: rgb(80, 19, 19);
  }

  svg.CheckButton {
    background-color: rgb(23, 51, 16);
  }
`;
