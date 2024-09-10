import React, { useState } from 'react';
import "./Questions.css";
// Sample dump data for questions
import questionsData from './data';

const Questions = () => {
    const [visibleAnswers, setVisibleAnswers] = useState([]); // State to track visible answers
    const [allowMultiple, setAllowMultiple] = useState(false); // State to track multiple answers mode
  
    // Toggle showing/hiding an answer
    const toggleAnswer = (id) => {
      if (allowMultiple) {
        // Multiple answers mode
        if (visibleAnswers.includes(id)) {
          setVisibleAnswers(visibleAnswers.filter(answerId => answerId !== id));
        } else {
          setVisibleAnswers([...visibleAnswers, id]);
        }
      } else {
        // Single answer mode
        setVisibleAnswers(visibleAnswers.includes(id) ? [] : [id]);
      }
    };
  
    // Toggle between single and multiple answers mode
    const toggleMode = () => {
      setAllowMultiple(!allowMultiple);
      setVisibleAnswers([]); // Clear all answers when switching modes
    };
  
    return (
      <div className="questions-container">
        <button className="toggle-mode-button" onClick={toggleMode}>
          {allowMultiple ? 'Switch to Single Answer Mode' : 'Switch to Multiple Answers Mode'}
        </button>
  
        {questionsData.map((q) => (
          <div className="question-box" key={q.id}>
            <div className="question-header">
              <p className="question-text">{q.question}</p>
              <button className="add-button" onClick={() => toggleAnswer(q.id)}>
                {visibleAnswers.includes(q.id) ? '-' : '+'} {/* Toggle button text */}
              </button>
            </div>
            {visibleAnswers.includes(q.id) && <p className="answer-text">{q.answer}</p>}
          </div>
        ))}
      </div>
    );
  };
export default Questions;
