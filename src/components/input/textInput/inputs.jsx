import React, { useContext, useEffect } from "react";
import "../input.css";
import FormContext from "../../../context/form/FormContext";

export const TextInput = ({ question, inputref }) => {
  const { formValue, setFormValue, navigateNext } = useContext(FormContext);

  const handleChange = (e) => {
    setFormValue({ ...formValue, [question.name]: e.target.value });
  };
  useEffect(() => {
    const handlelistner = (event) => {
      if (event.key === "Enter") {
        navigateNext();
      }
    };
    document.addEventListener("keydown", handlelistner);
    return () => {
      document.removeEventListener("keydown", handlelistner);
    };
  });

  return (
    <input
      ref={inputref}
      type="text"
      className="text_answer_input"
      placeholder="Type your answer here..."
      onChange={handleChange}
      value={formValue[question.name] ? formValue[question.name] : ""}
    />
  );
};
