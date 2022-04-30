import styled from "styled-components";

const Deck: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <p
        style={{
          fontFamily: "Germania One, cursive",
          fontSize: "18pt",
          color: "white",
        }}
      >
        Text on a card
      </p>
    </div>
  );
};

export default styled(Deck)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 50px;

  width: 300px;
  height: 400px;

  background-color: #2a2a2a;
  border-radius: 20px;
`;
