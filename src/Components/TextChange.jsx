import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Full Stack Developer", 
    "Frontend Developer", 
    "Web Developer"
  ];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isForward) {
        if (endValue <= texts[index].length) {
          setCurrentText(texts[index].substring(0, endValue));
          setEndValue(prev => prev + 1);
        } else {
          setIsForward(false);
        }
      } else {
        if (endValue > 0) {
          setCurrentText(texts[index].substring(0, endValue));
          setEndValue(prev => prev - 1);
        } else {
          setIsForward(true);
          setIndex(prev => (prev + 1) % texts.length);
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return <span className="transition ease duration-300">{currentText}</span>;
};

export default TextChange;