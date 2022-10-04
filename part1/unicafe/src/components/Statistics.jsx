import React from 'react';
import StatisticLine from './StatisticLine';

function Statistics({ good, neutral, bad }) {
  return good || neutral || bad ? (
    <table>
      <tbody>
        <StatisticLine
          text='good'
          value={good}
        />
        <StatisticLine
          text='neutral'
          value={neutral}
        />
        <StatisticLine
          text='bad'
          value={bad}
        />
        <StatisticLine
          text='all'
          value={good + bad + neutral}
        />
        <StatisticLine
          text='average'
          value={(good - bad) / (good + neutral + bad)}
        />
        <StatisticLine
          text='positive'
          value={`${(good / (good + neutral + bad)) * 100}%`}
        />
      </tbody>
    </table>
  ) : (
    <div>No feedback given</div>
  );
}

export default Statistics;
