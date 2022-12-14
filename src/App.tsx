import icon from "./assets/icons/icon.svg";

import Header from "./components/Header/Header";
import HeaderTitle from "./components/Header/HeaderTitle";

import GameWrapper from "./components/GameWrapper";
import Deck from "./components/Deck/Deck";

import Footer from "./components/Footer/Footer";

import { HelpCircle } from "react-feather";

function App() {
  return (
    <div className="App">
      <Header>
        <HeaderTitle>
          <img
            src={icon}
            style={{ height: "1.5em", marginRight: ".25em" }}
          ></img>
          SaneQuiz
        </HeaderTitle>
        <HelpCircle
          color="White"
          size={24}
          style={{ position: "absolute", top: "5px", right: "5px" }}
          onClick={() => {
            alert(
              "Este jogo possui mais de 50 perguntas em forma de carta sobre conceitos diversos da área de Saneamento Ambiental.\n\nJogue-o como quiser: sozinho, competindo com amigos... Use sua criatividade!\n\nInstruções: deslize as cartas para a esquerda ou direita para removê-las do topo do deck; um duplo toque sobre a carta faz com que ela vire, revelando a resposta; 5 cartas são geradas aleatoriamente por vez."
            );
          }}
        />
      </Header>
      <GameWrapper>
        <Deck />
      </GameWrapper>
      <Footer />
    </div>
  );
}

export default App;
