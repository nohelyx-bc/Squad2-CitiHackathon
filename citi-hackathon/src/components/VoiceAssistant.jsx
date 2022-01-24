import React from "react";
//import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

// const appId = '<INSERT_SPEECHLY_APP_ID_HERE>';
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const VoiceAssistant = () => {
  const commands = [
    { command: "reset", callback: ({ resetTranscript }) => resetTranscript() },
    {
      command: "open *",
      callback: (site) => {
        window.open("http://" + site);
      },
    },
    {
      command: "cambiar fondo a *",
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
        <button
          onClick={startListening({ continuous: true, language: "es-MX" })}
          onTouchStart={startListening({ continuous: true, language: "es-MX" })}
          onMouseDown={startListening({ continuous: true, language: "es-MX" })}
          onTouchEnd={SpeechRecognition.stopListening}
          onMouseUp={SpeechRecognition.stopListening}
          className="boton-regresar"
        >
         Presione para hablar 
        </button>
        <button className="boton-confirmar" onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
      </div>
      <Footer />
    </>
  );
};
export default VoiceAssistant;
