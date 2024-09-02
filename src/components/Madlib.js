import React, { useState } from "react";
import MadlibForm from "./MadlibForm";

function Madlib() {
  const [story, setStory] = useState(null);

  function generateStory(formData) {
    const { noun, noun2, adjective, color } = formData;

    // Define an array of story templates
    const stories = [
      `Once upon a time, there was a ${adjective} ${noun} who loved the color ${color}. They went on an adventure with a ${noun2} by their side.`,
      `In a distant land, a ${adjective} ${noun} was searching for a ${noun2} of the rarest ${color}.`,
      `The ${adjective} ${noun} dreamed of one day finding a ${color} ${noun2}.`,
      `A ${adjective} ${noun} and a ${noun2} decided to paint the town ${color}!`,
      `Legend has it that a ${adjective} ${noun} with a ${noun2} once turned the sky ${color}.`
    ];

    // Randomly select a story template
    const randomIndex = Math.floor(Math.random() * stories.length);
    const selectedStory = stories[randomIndex];

    // Set the generated story
    setStory(selectedStory);
  }

  function resetStory() {
    setStory(null);
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center">Madlibs!</h1>
          {story ? (
            <div>
              <p className="card-text">{story}</p>
              <button className="btn btn-success" onClick={resetStory}>Play Again</button>
            </div>
          ) : (
            <MadlibForm onSubmit={generateStory} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Madlib;
