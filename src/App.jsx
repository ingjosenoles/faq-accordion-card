import { useState } from "react";
import { questions } from "./questions";
import mobile from "./images/illustration-woman-online-mobile.svg";
import desktop from "./images/illustration-woman-online-desktop.svg";
import TheQuestion from "./TheQuestion";

function App() {
  const [quests] = useState(questions);

  return (
    <div className="container">
      <article>
        <picture>
          <source media="(min-width: 768px )" srcSet={desktop} />
          <img src={mobile} alt="" />
        </picture>
      </article>
      <article>
        <h1>FAQ</h1>
        {quests.map((quest, index) => (
          <TheQuestion key={index} {...quest} />
        ))}
      </article>
    </div>
  );
}

export default App;
