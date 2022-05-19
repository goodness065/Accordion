import React from "react";
import data from "../data";
import Questions from "./Questions";

const Accordion = () => {
  const questions = data;
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <Questions key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Accordion;
