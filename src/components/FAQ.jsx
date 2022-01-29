import React, { useState } from "react";
import "./styles/FAQ.css";

const questionsList = [
  {
    title: "First questions....",
    description:
      " Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
  },
  {
    title: "Second questions....",
    description:
      " Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
  },
  {
    title: "Third questions....",
    description:
      " Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
  },
];

function FAQ({ questions = questionsList }) {
  const [faqClicked, setfaqClicked] = useState(0);

  return (
    <section className="faq">
      <div className="faq__content">
        <ul className="faq__content__questions">
          {questions.map((key, item) => (
            <li className="faq__content__questions__question" key={item}>
              <button
                className={`faq__content__questions__question__btnTitle ${
                  faqClicked === key ? "faqSelected" : null
                }`}
                onClick={() => {
                  if (faqClicked != key) {
                    setfaqClicked(key);
                  } else {
                    setfaqClicked(0);
                  }
                }}
              >
                {questions[item].title}
                <i
                  className={`fas fa-chevron-up faqIcon ${
                    faqClicked === key ? "faqRotateIcon" : null
                  }`}
                ></i>
              </button>
              <p
                className={`faq__content__questions__question__description ${
                  faqClicked === key ? "faqOpened" : null
                }`}
              >
                {questions[item].description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FAQ;
