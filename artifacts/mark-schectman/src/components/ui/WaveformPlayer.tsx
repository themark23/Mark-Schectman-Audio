import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

type Props = {
  audioUrl: string;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
};

function formatTime(secs: number) {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function WaveformPlayer({ audioUrl, isActive, onActivate, onDeactivate }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wsRef = useRef<WaveSurfer | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Create WaveSurfer instance on mount
  useEffect(() => {
    if (!containerRef.current) return;

    const ws = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "hsl(152, 42%, 75%)",
      progressColor: "hsl(152, 42%, 22%)",
      cursorColor: "hsl(8, 75%, 50%)",
      cursorWidth: 2,
      height: 48,
      barWidth: 2,
      barGap: 1,
      barRadius: 2,
      normalize: true,
      interact: true,
    });

    ws.load(audioUrl);
    wsRef.current = ws;

    ws.on("ready", () => {
      setIsReady(true);
      setDuration(ws.getDuration());
    });

    ws.on("audioprocess", () => setCurrentTime(ws.getCurrentTime()));
    ws.on("seeking", () => setCurrentTime(ws.getCurrentTime()));
    ws.on("play", () => setIsPlaying(true));
    ws.on("pause", () => setIsPlaying(false));
    ws.on("finish", () => {
      setIsPlaying(false);
      onDeactivate();
    });

    return () => {
      ws.destroy();
      wsRef.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioUrl]);

  // Pause when another track becomes active
  useEffect(() => {
    if (!isActive && wsRef.current?.isPlaying()) {
      wsRef.current.pause();
    }
  }, [isActive]);

  function handlePlayPause() {
    if (!wsRef.current || !isReady) return;
    if (wsRef.current.isPlaying()) {
      wsRef.current.pause();
      onDeactivate();
    } else {
      onActivate();
      wsRef.current.play();
    }
  }

  return (
    <div className="flex items-center gap-4 w-full">
      {/* Play / Pause */}
      <button
        onClick={handlePlayPause}
        disabled={!isReady}
        aria-label={isPlaying ? "Pause" : "Play"}
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all disabled:opacity-40"
        style={{
          background: isPlaying
            ? "hsl(8, 75%, 50%)"
            : "hsl(152, 42%, 22%)",
        }}
      >
        {isPlaying ? (
          // Pause icon
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          // Play icon
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="white"
            style={{ marginLeft: "2px" }}
          >
            <polygon points="5,3 19,12 5,21" />
          </svg>
        )}
      </button>

      {/* Waveform */}
      <div className="flex-1 min-w-0">
        {!isReady && (
          <div className="flex items-center gap-[3px] h-12">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="w-[2px] rounded-sm"
                style={{
                  height: `${Math.random() * 60 + 20}%`,
                  background: "hsl(152, 42%, 80%)",
                  opacity: 0.4,
                  animation: `loading-pulse 1s ease-in-out ${(i % 5) * 0.12}s infinite alternate`,
                }}
              />
            ))}
          </div>
        )}
        <div
          ref={containerRef}
          style={{ display: isReady ? "block" : "none" }}
        />
      </div>

      {/* Time */}
      <span
        className="text-xs font-mono shrink-0 tabular-nums"
        style={{ color: "hsl(0,0%,50%)" }}
      >
        {formatTime(currentTime)}
        {duration > 0 && (
          <span style={{ color: "hsl(0,0%,70%)" }}>
            {" "}/ {formatTime(duration)}
          </span>
        )}
      </span>

      <style>{`
        @keyframes loading-pulse {
          from { transform: scaleY(0.6); }
          to   { transform: scaleY(1.4); }
        }
      `}</style>
    </div>
  );
}
