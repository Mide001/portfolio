"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const fullText = "Portfolio is Coming Soon...";

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setAnimationCompleted(true);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 text-white animate-fade-in">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{text}</h1>
        {animationCompleted && (
          <p className="text-lg mb-8">Stay tuned for updates!</p>
        )}
      </div>
    </div>
  );
}
