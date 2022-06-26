import React from "react";
import './TryAgain.css';

const TryAgain = ({ words, characters, wpm, startAgain }) => {
    return (
        <div className="try-again-container">
            <h3>Test Results</h3>
            <div className="result-container">
                <p><b>Words: </b>{words}</p>
                <p><b>Chracters: </b>{characters}</p>
                <p><b>WPM: </b>{wpm}</p>
            </div>
            <div>
                <button className="end-buttons start-again-btn" onClick={() => startAgain()}>Retry</button>
                <button onClick={() => {
                    window.open("https://www.facebook.com/sharer.php?u=VSS/flashtype", "facebook-share-dialog", "width=800,height=600")
                }} className="end-buttons share-btn">Share on Facebook</button>
                <button onClick={() => {
                    window.open("https://www.twitter.com/intent/tweet?text=VSS Codes", "Twitter", "width=800,height=600")
                }} className="end-buttons tweet-btn">Tweet</button>
            </div>
        </div>
    )
}

export default TryAgain;