import React from 'react';
import { useState } from 'react';
import Button from './components/Button';
import Statistics from './components/Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button
        handleClick={handleGood}
        text={'good'}
      />
      <Button
        handleClick={handleNeutral}
        text={'neutral'}
      />
      <Button
        handleClick={handleBad}
        text={'bad'}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  );
}

export default App;

