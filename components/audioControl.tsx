"use client";

import { useEffect, useRef, useState } from "react";

export const AudioControl = () => {
  const [audio, setAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      // Create the Audio object only once when it's null.
      audioRef.current = new Audio("/Boccherini-Minuet.mp3");
    }

    if (audio) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset audio to the beginning.
    }
  }, [audio]);

  return (
    <div id="audio-control">
      <div id="audio-control-container">
        <div id="audio-control-button">
          <div onClick={() => setAudio(!audio)}>
            {audio ? "Feeling Fancy? 🔊" : "Feeling Fancy? 🔈"}
          </div>
        </div>
      </div>
    </div>
  );
};
