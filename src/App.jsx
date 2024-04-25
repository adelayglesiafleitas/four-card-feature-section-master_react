import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import Card from "./Components/Card.jsx";
import SupervisorImg from "./assets/images/icon-supervisor.svg";
import KarmaImg from "./assets/images/icon-karma.svg";
import TeamImg from "./assets/images/icon-team-builder.svg";
import CalculatorImg from "./assets/images/icon-calculator.svg";
import "./assets/Styles/App.css";
const App = () => {
  return (
    <>
      <main className="container">
        <Header />
        <div>
          <Card
            area="Supervisor"
            supervisor="Monitors activity to identify project roadblocks"
            img={SupervisorImg}
            color="--Cyan"
            time="2"
            classcard="container__card1"
          />
          <Card
            area="Team Builder"
            supervisor=" Scans our talent network to create the optimal team for your project"
            img={TeamImg}
            color="--Red"
            time="2.3"
            classcard="container__card2"
          />
          <Card
            area="Karma"
            supervisor="Regularly evaluates our talent to ensure quality"
            img={KarmaImg}
            color="--Orange"
            time="2.6"
            classcard="container__card3"
          />
          <Card
            area="Calculator"
            supervisor=" Uses data from past projects to provide better delivery estimates"
            img={CalculatorImg}
            color="--Blue"
            time="2.9"
            classcard="container__card4"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
