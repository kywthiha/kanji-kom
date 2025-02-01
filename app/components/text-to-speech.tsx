"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, RotateCcw, RefreshCw } from "lucide-react";

export function TextToSpeech() {
  const [text, setText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSpeak = async () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      try {
        const response = await fetch("/api/text-to-speech", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text }),
        });

        if (!response.ok) {
          throw new Error("Failed to generate speech");
        }

        const resJson = await response.json();

        if (audioRef.current) {
          audioRef.current.src = resJson.link;
          audioRef.current.playbackRate = speed;
          audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error("Error generating speech:", error);
        alert("Failed to generate speech. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleReset = () => {
    setText("");
    setIsPlaying(false);
    setSpeed(1);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleSpeedChange = (newSpeed: number[]) => {
    const speed = newSpeed[0];
    setSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  const handleSpeedReset = () => {
    setSpeed(1);
    if (audioRef.current) {
      audioRef.current.playbackRate = 1;
    }
  };

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter Japanese text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        className="w-full p-2 border rounded"
      />
      <div className="flex items-center space-x-2">
        <span className="text-sm">Speed: {speed.toFixed(1)}x</span>
        <Slider
          value={[speed]}
          onValueChange={handleSpeedChange}
          min={0.5}
          max={2}
          step={0.1}
          className="w-[200px]"
        />
        <Button
          onClick={handleSpeedReset}
          variant="outline"
          size="sm"
          className="ml-2"
          title="Reset Speed"
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex space-x-2">
        <Button
          onClick={handleSpeak}
          className="flex-1"
          disabled={isLoading || text.trim() === ""}
        >
          {isLoading ? (
            "Loading..."
          ) : isPlaying ? (
            <>
              <Pause className="mr-2 h-4 w-4" /> Pause
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" /> Play
            </>
          )}
        </Button>
        <Button onClick={handleReset} variant="outline">
          <RotateCcw className="mr-2 h-4 w-4" /> Reset All
        </Button>
      </div>
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
    </div>
  );
}
