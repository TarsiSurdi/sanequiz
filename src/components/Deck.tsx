import { useEffect, useState } from "react";
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
  const [text, setText] = useState("Card Text");
  const [springProps, api] = useSpring(() => ({ x: 0, y: 0, rotateZ: 0 }));

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setText("Card Text");
    }, 1250);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  const bind = useDrag(({ down, movement: [mx], velocity: [vx, vy] }) => {
    const swipe = vx > 0.3;

    if (swipe) {
      if (mx > 50) {
        setText("Swipe Right");
      } else {
        setText("Swipe Left");
      }
    }

    api.start({
      x: down ? mx : 0,
      rotateZ: down ? mx * 0.3 : 0,
      immediate: true,
    });
  });

  return (
    <StyledCard {...bind()} style={{ ...springProps }}>
      <p>{text}</p>
    </StyledCard>
  );
};

export default animated(Deck);
