import { useState } from "react";
import { questions } from "./data";

export default function App() {
  return (
    <div className="App">
      <Flashcards />
    </div>
  );
}

function Flashcards() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <Card
          question={question}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
  );
}

function Card({ question, selectedId, setSelectedId }) {
  const handleClick = (id) => setSelectedId(id !== selectedId ? id : null);

  return (
    <div
      key={question.id}
      className={question.id === selectedId ? "selected" : ""}
      onClick={() => handleClick(question.id)}
    >
      <p>{question.id === selectedId ? question.answer : question.question}</p>
    </div>
  );
}
