import React, { useState, useRef } from 'react';

const VoiceItemSelector = () => {
  const [items, setItems] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const initializeRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition API not supported in this browser.");
      return null;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = true;
    recognition.interimResults = false;
    return recognition;
  };

  const startListening = () => {
    if (!recognitionRef.current) {
      recognitionRef.current = initializeRecognition();
      if (!recognitionRef.current) return;
    }

    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim();
      if (transcript && !items.includes(transcript)) {
        setItems(prevItems => [...prevItems, transcript]);
      }
    };

    recognitionRef.current.start();
    setIsListening(true);
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  const resetItems = () => {
    stopListening();
    setItems([]);
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '10px' }}>
      <h2>Voice Item Selector</h2>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={startListening} disabled={isListening} style={{ marginRight: '10px' }}>
          Start Listening
        </button>
        <button onClick={stopListening} disabled={!isListening} style={{ marginRight: '10px' }}>
          Stop Listening
        </button>
        <button onClick={resetItems}>
          Reset
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ fontWeight: 'bold' }}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default VoiceItemSelector;
