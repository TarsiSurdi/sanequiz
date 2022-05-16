import Header from "./components/Header/Header";
import HeaderTitle from "./components/Header/HeaderTitle";

import GameWrapper from "./components/GameWrapper";
import Deck from "./components/Deck/Deck";

import Controls from "./components/Controls";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header>
        <HeaderTitle>Patognomonico</HeaderTitle>
      </Header>
      <GameWrapper>
        <Deck />
        <Controls />
      </GameWrapper>
      <Footer />
    </div>
  );
}

export default App;
