import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import './ChallengeSection.css';

const ChallengeSection = ({ selecedParagraph, words, characters, wpm, timeRemaining, timerStarted, testInfo, onInputChange, startAgain }) => {
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fadedown" className="challenge-section-header">Take Speed Test Now</h1>
            <TestContainer selecedParagraph={selecedParagraph} timeRemaining={timeRemaining} timerStarted={timerStarted} words={words} characters={characters} wpm={wpm} testInfo={testInfo} onInputChange={onInputChange} startAgain={startAgain} />
        </div>
    )
}

export default ChallengeSection