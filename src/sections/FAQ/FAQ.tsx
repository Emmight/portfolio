import { useState } from 'react';
import Container from "../../components/Container/Container";
import { faq } from "../../data/faq";
import { ChevronDown } from "lucide-react";
import "./FAQ.css";

const FAQ = () => {

  const [open, setOpen] = useState<number | null>(0);

  return (
    <Container>

      <section
        className="faq"
        id="faq"
      >

        <h2
          className="faq-title"
          data-aos="zoom-in"
        >
          {faq.title}
        </h2>

        <p
          className="faq-subtitle"
          data-aos="fade-up"
        >
          {faq.subtitle}
        </p>

        <div className="faq-list" data-aos="zoom-in">

          {faq.questions.map((item, index) => (

            <div
              key={index}
              className={`faq-item ${
                open === index ? "active" : ""
              }`}
            >

              <button
                className="faq-question"
                onClick={() =>
                  setOpen(
                    open === index ? null : index
                  )
                }
              >

                <span>{item.question}</span>

                <ChevronDown
                  size={20}
                  className="faq-icon"
                />

              </button>

              <div className="faq-answer">

                <p>{item.answer}</p>

              </div>

            </div>

          ))}

        </div>

      </section>

    </Container>
  );
};

export default FAQ;