import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <div className="skill-list">
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="./me.jpg" className="avatar" alt="Me"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Guilherme Rezende</h1>
      <p>
        Front-end web developer student at Etec. Passionated by programming and
        a chess lover. I like to hear to musics while reading books or when
        studing. I'm from Brazil🙋
      </p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill color="darkgrey" technology="JavaScript" emoji="🌟" />
      <Skill color="red" technology="Angular" emoji="🎟️" />
      <Skill color="yellow" technology="Java" emoji="💀" />
      <Skill color="purple" technology="Git and GitHub" emoji="💣" />
      <Skill color="cyan" technology="React.Js" emoji="👓" />
      <Skill color="green" technology="Next.Js" emoji="🤫" />
    </div>
  );
}

function Skill(props) {
  const style = { backgroundColor: props.color };
  return (
    <div className="skill" style={style}>
      <span>{props.technology}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
