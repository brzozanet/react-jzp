"use client";

import { useState } from "react";

export function LanguageSelector() {
  const [language, setLanguage] = useState("");
  const handleLanguageSelect = (event) => {
    console.log(event.target.value);
    setLanguage(event.target.value);
  };

  return (
    <>
      <select value={language} onChange={handleLanguageSelect}>
        <option value="PL">Polski</option>
        <option value="EN">Angielski</option>
      </select>
      <p>{language}</p>
    </>
  );
}
