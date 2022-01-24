import React from "react";
//import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

// const appId = '<INSERT_SPEECHLY_APP_ID_HERE>';
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const VoiceAssistant = () => {
  const navigate=useNavigate()
  const handleRegresar = () => {
    navigate("/");
  };

  const commands = [
    { command: "reset", callback: ({ resetTranscript }) => resetTranscript() },
    {
      command: "open *",
      callback: (site) => {
        window.open("/" + site);
      },
    },
    {
      command: "change background colour to *",
      callback: (color) => {
        document.body.style.background = color;
      },
    },
  ];
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
  } = useSpeechRecognition({ commands });
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <div className="container-transferencias">
        <Header />
        <p>Microfono: {listening ? "Encendido" : "Apagado"}</p>
        {/* <button
          onClick={startListening({ continuous: true, language: "es-MX" })}
          onTouchStart={startListening({ continuous: true, language: "es-MX" })}
          onMouseDown={startListening({ continuous: true, language: "es-MX" })}
          onTouchEnd={SpeechRecognition.stopListening}
          onMouseUp={SpeechRecognition.stopListening}
          className="boton-regresar"
        >
         Presione para hablar 
        </button> */}
        <section className="info-container voice">
          <button
            className="boton-confirmar"
            onClick={SpeechRecognition.startListening}
          >
            Start
          </button>
          <button
            className="boton-confirmar"
            onClick={SpeechRecognition.stopListening}
          >Stop</button>
          <button className="boton-confirmar" onClick={resetTranscript}>
            Reset
          </button>
        </section>
        <p>{transcript}</p>
        <button className="boton-regresar" onClick={handleRegresar}>Regresar</button>
      </div>
      <Footer />
    </>
  );
};
export default VoiceAssistant;
