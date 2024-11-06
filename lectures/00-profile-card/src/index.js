import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "JavaScript",
    level: "Advanced",
    color: "darkgrey",
  },
  {
    skill: "Angular",
    level: "Beginner",
    color: "red",
  },
  {
    skill: "Java",
    level: "Intermediate",
    color: "yellow",
  },
  {
    skill: "Git and GitHub",
    level: "Intermediate",
    color: "purple",
  },
  {
    skill: "React.Js",
    level: "Beginner",
    color: "cyan",
  },
  {
    skill: "Next.Js",
    level: "Beginner",
    color: "darkgreen",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
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
      {skills.map((skillObj) => (
        <Skill skillObj={skillObj} key={skillObj.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  const style = { backgroundColor: skillObj.color };

  return (
    <div className="skill" style={style}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "Beginner" && "🧒"}
        {skillObj.level === "Intermediate" && "🙋‍♂️"}
        {skillObj.level === "Advanced" && "💪"}
      </span>
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
