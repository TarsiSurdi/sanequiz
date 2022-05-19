import { useState } from "react";
import styled from "styled-components";
import { animated, to as interpolate, useSprings } from "react-spring";
import { createUseGesture, dragAction } from "@use-gesture/react";

import { getRandomIntInclusive } from "../../helperFunctions";

import styles from "./styles.module.scss";

// Assets
import background from "../../assets/card.svg";
import cardData from "../../assets/cardData.json";

const useGesture = createUseGesture([dragAction]);

const Wrapper = styled.div`
  grid-area: 2 / 1;

  width: 100%;
  height: 100%;

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

interface cardDataI {
  pergunta: string;
  resposta: string;
  comentario?: string;
  imagem?: string;
}

const getRandomCard = (): cardDataI => {
  return cardData[getRandomIntInclusive(0, cardData.length)];
};

const Deck = () => {
  const [gone] = useState(() => new Set());
  const [cards, setCards] = useState<cardDataI[]>([
    getRandomCard(),
    getRandomCard(),
    getRandomCard(),
    getRandomCard(),
    getRandomCard(),
  ]);
  const [isFlipped, setFlipped] = useState(new Array(cards.length).fill(false));

  const [props, api] = useSprings(cards.length, (i) => ({
    to: { ...to(i), rotateY: isFlipped[i] ? 180 : 0 },
    from: from(i),
  }));

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
      if (!active && gone.size === cards.length) {
        let isFlippedAnimation = new Array(cards.length).fill(false);
        setFlipped(isFlippedAnimation);
        setCards((prevState) => {
          for (let i = 0; i < prevState.length; i++) {
            prevState[i] = getRandomCard();
          }
          return prevState;
        });
        setTimeout(() => {
          console.log(isFlipped);
          gone.clear();
          api.start((i) => {
            return {
              x: 0,
              y: i * -4,
              scale: 1,
              rot: -10 + Math.random() * 20,
              rotateY: isFlippedAnimation[i] ? 180 : 0,
              delay: i * 100,
            };
          });
        }, 600);
      }
    },
    onDoubleClick: ({ args: [index] }) => {
      setFlipped((prevState) => {
        prevState[index] = !prevState[index];
        return prevState;
      });

      setTimeout(() => {
        api.start((i) => {
          if (index !== i) return;
          const rotation = { rotateY: isFlipped[i] ? 180 : 0 };
          return rotation;
        });
      }, 50);
    },
  });

  return (
    <Wrapper>
      {props.map(({ x, y, rot, scale, rotateY }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
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
              backgroundImage: `url(${background})`,
            }}
          >
            <div>
              {cards[i].imagem ? <h4>Descreva:</h4> : <h4>Pergunta</h4>}
              {cards[i].pergunta && <h3>{cards[i].pergunta}</h3>}
              {cards[i].imagem && <img src={cards[i].imagem}></img>}
            </div>
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
              backgroundImage: `url(${background})`,
            }}
          >
            <div>
              <h4>Resposta</h4>
              <h3>{cards[i].resposta}</h3>
              {cards[i].comentario && <p>{cards[i].comentario}</p>}
            </div>
          </animated.div>
        </animated.div>
      ))}
    </Wrapper>
  );
};

export default Deck;
