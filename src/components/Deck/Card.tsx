import { FC, PropsWithChildren, useState } from "react";
import { animated } from "react-spring";

const Card: FC<PropsWithChildren<{ style: any }>> = (props) => {
  const [isFlipped, setFlipped] = useState(false);

  return (
    <animated.div style={{ ...props.style }}>{props.children}</animated.div>
  );
};

export default Card;
