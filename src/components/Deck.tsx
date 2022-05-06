import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { useDrag } from "@use-gesture/react";

const StyledCard = styled(animated.div)`
  width: 60%;
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px;

  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.7);

  background-color: whitesmoke;

  font-family: "Germania One";
  font-size: 20pt;

  touch-action: none;
`;

const Deck = () => {
  const [springProps, api] = useSpring(() => ({ x: 0, y: 0, rotateZ: 0 }));

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({
      x: down ? mx : 0,
      rotateZ: down ? mx * 0.3 : 0,
      immediate: true,
    });
  });

  return (
    <StyledCard {...bind()} style={{ ...springProps }}>
      <p>Card Text</p>
    </StyledCard>
  );
};

export default animated(Deck);
