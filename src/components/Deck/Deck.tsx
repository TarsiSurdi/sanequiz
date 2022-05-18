import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  animated,
  to as interpolate,
  useSpring,
  useSprings,
} from "react-spring";
import { useDrag, useGesture } from "@use-gesture/react";

import styles from "./styles.module.scss";

const cards = [
  "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
];

const Wrapper = styled.div`
  margin: 20px;

  width: 75%;
  height: 90%;

  max-width: 450px;
  max-height: 600px;

  display: grid;
  grid-template: 1fr / 1fr;
`;

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (i: number) => ({ x: 0, rot: 0, scale: 0, y: 0, rotateY: 0 });

const Deck = () => {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [isFlipped, setFlipped] = useState(new Array(cards.length).fill(false));

  const [props, api] = useSprings(cards.length, (i) => ({
    to: { ...to(i), rotateY: isFlipped[i] ? 180 : 0 },
    from: from(i),
  }));

  console.log(props);

  // const [rotateSprings] = useSprings(cards.length, (i) => ({
  //   ,
  //   config: { mass: 5, tension: 300, friction: 80 },
  // }));

  const bind = useGesture({
    onDrag: ({
      args: [index],
      active,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
    }) => {
      const trigger = vx > 0.2; // If you flick hard enough it should trigger the card to fly out
      if (!active && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      api.start((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = active ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!active && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    },
    onClick: ({ args: [index] }) => {
      console.log(index);
      setFlipped((prevState) => {
        prevState[index] = !prevState[index];
        return prevState;
      });
      api.start((i) => {
        if (index !== i) return;
        return { rotateY: isFlipped[i] ? 0 : 180 };
      });
    },
  });

  return (
    <Wrapper>
      {props.map(({ x, y, rot, scale, rotateY }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              backfaceVisibility: "hidden",
              transform: interpolate(
                [rot, scale, rotateY],
                (r, s, t) => `
                perspective(1500px)
                rotateX(10deg)
                rotateY(${t}deg)   
                rotateZ(${r}deg) 
                scale(${s})`
              ),
              transformStyle: "preserve-3d",
            }}
          >
            <p>Frente</p>
          </animated.div>

          <animated.div
            {...bind(i)}
            style={{
              backfaceVisibility: "hidden",
              transform: interpolate(
                [rot, scale, rotateY],
                (r, s, t) => `
                perspective(1500px)
                rotateX(10deg)
                rotateY(${t - 180}deg)   
                rotateZ(${r}deg) 
                scale(${s})`
              ),
              transformStyle: "preserve-3d",
            }}
          >
            <p>Verso</p>
          </animated.div>
        </animated.div>
      ))}
    </Wrapper>
  );
};

export default Deck;

// transform: interpolate([rot, scale], trans),
// backgroundImage: `url(${cards[i]})`,
