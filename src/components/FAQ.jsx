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
  const [faqClicked, setfaqClicked] = useState(-1);

  return (
    <section className="faq">
      <div className="faq__content">
        <ul className="faq__content__questions">
          {/* QUESTIONS ITEMS */}
          {questions.map((item, index) => (
            <li className="faq__content__questions__question" key={index}>
              <button
                className={`
                faq__content__questions__question__btnTitle 
                ${faqClicked === index ? "faqSelected" : null}`}
                // SET THE "faqClicked" USESTATE TO THE ELEMENT INDEX
                onClick={() =>
                  faqClicked !== index
                    ? setfaqClicked(index)
                    : setfaqClicked(-1)
                }
              >
                {/* QUESTION TITLE */}
                {item.title}

                {/* QUESTION RIGHT ARROW */}
                <i
                  className={`fas fa-chevron-up faqIcon 
                  ${faqClicked === index ? "faqRotateIcon" : null}`}
                ></i>
              </button>

              {/* QUESTION INNER TEXT */}
              <p
                className={`faq__content__questions__question__description 
                ${faqClicked === index ? "faqOpened" : null}`}
              >
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FAQ;
