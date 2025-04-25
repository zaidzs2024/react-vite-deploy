import { useState } from 'react';
import './App.css';

function App() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [attempts, setAttempts] = useState(0);

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const guessedNumber = parseInt(guess);

    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 10) {
      setMessage('Please enter a number between 1 and 10.');
      return;
    }

    setAttempts(attempts + 1);

    if (guessedNumber < randomNumber) {
      setMessage('Too low! Try again.');
    } else if (guessedNumber > randomNumber) {
      setMessage('Too high! Try again.');
    } else {
      setMessage(`Correct! You've guessed it in ${attempts + 1} attempts.`);
    }
  };

  const handleReset = () => {
    setGuess('');
    setMessage('');
    setRandomNumber(generateRandomNumber());
    setAttempts(0);
  };

  return (
    <div className="game-container">
      <h2>Number Guessing Game</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={handleChange}
          placeholder="Enter a number (1 - 10)"
        />
        <button type="submit">Submit Guess</button>
      </form>
      {message && <p className="message">{message}</p>}
      <button onClick={handleReset} className="reset-btn">Reset Game</button>
    </div>
  );
}

// Generate a random number between 1 and 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export default App;
