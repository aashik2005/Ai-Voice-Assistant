import React, { useContext } from "react";
import "./App.css";
import { dataContext } from "./context/UserContext";
import speak from "./assets/speak.gif";
import listening from "./assets/aiVoice.gif";

function App() {
  let {
    recognition,
    speaking,
    setSpeaking,
    prompt,
    response,
    setPrompt,
    setResponse,
  } = useContext(dataContext);

  return (
    <div className="main">
      {!speaking ? (
        <button
          onClick={() => {
            recognition.stop();
            setPrompt("Listening...");
            setSpeaking(true);
            setResponse(false);
            recognition.start();
          }}
        >
          Click to Speak
        </button>
      ) : (
        <div>
          {!response ? (
            <img className="speakimg" src={speak} />
          ) : (
            <img className="listeningimg" src={listening} />
          )}
          <br />
          <p>{prompt}</p>
        </div>
      )}
    </div>
  );
}

export default App;
