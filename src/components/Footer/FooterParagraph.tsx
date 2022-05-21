import { useEffect, useState } from "react";
import styled from "styled-components";

import { getRandomIntInclusive } from "../../helperFunctions";
import phrases from "../../assets/footerPhrases";

const Paragraph: React.FC<{ className?: string }> = ({ className }) => {
  const [chosenPhrase, setChosenPhrase] = useState(
    phrases[getRandomIntInclusive(0, phrases.length - 1)]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setChosenPhrase(phrases[getRandomIntInclusive(0, phrases.length - 1)]);
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className={className}>
      <span>{chosenPhrase.icon}</span>
      {chosenPhrase.text}
    </p>
  );
};

export default styled(Paragraph)`
  span {
    margin-right: 0.5em;
  }

  padding: 0.5em;

  color: hotpink;
  font-weight: bold;
  text-align: center;
  font-family: sans-serif;
`;
