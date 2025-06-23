import React, { useEffect, useState } from 'react';
import { getQuestions } from './api';
import { logEvent } from './logger';

function App() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    logEvent('frontend', 'info', 'component', 'App component mounted');
    getQuestions()
      .then(data => {
        setQuestions(data);
        logEvent('frontend', 'info', 'component', 'Questions loaded');
      })
      .catch(err => {
        setError('Failed to load questions');
        logEvent('frontend', 'error', 'component', `Failed to load questions: ${err.message}`);
      });
  }, []);

  return (
    <div>
      <h1>Campus Test Questions</h1>
      {error && <p>{error}</p>}
      <ul>
        {questions.map((q, i) => (
          <li key={i}>{JSON.stringify(q)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
