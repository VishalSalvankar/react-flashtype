import React from "react";
import './TypingChallengeContainer.css'
import ChallengeDetailsCard from './../ChallengeDetailsCard/ChallengeDetailsCard'
import TypingChallenge from "../TypingChallenge/TypingChallenge";

const TypingChallengeContainer = ({ selecedParagraph, words, characters, wpm, timeRemaining, timerStarted, testInfo, onInputChange }) => {
    return (
        <div className="typing-chllenge-container">
            <div className="details-container">
                <ChallengeDetailsCard cardName="Words" cardValue={words} />
                <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
            </div>
            <div className="typewriter-container">
                <TypingChallenge timeRemaining={timeRemaining} timerStarted={timerStarted} selectedParagraph={selecedParagraph} testInfo={testInfo} onInputChange={onInputChange} />
            </div>
        </div>
    )
}

export default TypingChallengeContainer