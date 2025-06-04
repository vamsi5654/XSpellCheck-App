import React, { useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

export default function SpellCheckApp() {
  const [inputText, setInputText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputText(value);
    generateSuggestion(value);
  };

  const generateSuggestion = (text) => {
    if (!text.trim()) {
      setSuggestion("");
      return;
    }

    const words = text.split(/\s+/);
    for (let word of words) {
      const cleanedWord = word.toLowerCase();
      if (customDictionary[cleanedWord]) {
        setSuggestion(`Did you mean: ${customDictionary[cleanedWord]}?`);
        return;
      }
    }

    setSuggestion(""); // No match found
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontWeight: "bold" }}>Spell Check and Auto-Correction</h1>
      <textarea
        placeholder="Enter text..."
        value={inputText}
        onChange={handleChange}
        rows={6}
        cols={60}
        style={{ fontSize: "18px", padding: "10px" }}
      />
      {suggestion && (
        <p style={{ color: "red", fontSize: "18px", marginTop: "10px" }}>
          {suggestion}
        </p>
      )}
    </div>
  );
}
