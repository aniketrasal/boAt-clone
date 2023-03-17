import { Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export function TypewriterInput() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (letterIndex < words[wordIndex].length) {
        setText(words[wordIndex].slice(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);
      } else {
        setWordIndex((wordIndex + 1) % words.length);
        setLetterIndex(0);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [letterIndex]);

  const words = ["Earphones", "Smartwatches", "Speakers"];

  return <Input className="TypewriterInput" fontSize={"18px"} width={"65%"} value={text} readOnly />;
}
