
import React, { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  title: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  overlayClassName?: string;
  showControls?: boolean;
}

const VideoPlayer = ({
  src,
  title,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  overlayClassName,
  showControls = false,
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [showOverlayControls, setShowOverlayControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div 
      className={cn("relative rounded-xl overflow-hidden group", className)}
      onMouseEnter={() => setShowOverlayControls(true)}
      onMouseLeave={() => setShowOverlayControls(false)}
    >
      <video
        ref={videoRef}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className={cn("absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-start p-8", overlayClassName)}>
        {title && (
          <div className="text-white">
            {title}
          </div>
        )}
      </div>
      
      {showControls && (
        <div className={`absolute bottom-4 right-4 flex items-center space-x-2 transition-opacity duration-300 ${showOverlayControls ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            onClick={toggleMute} 
            className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
          >
            {isMuted ? <VolumeX className="h-5 w-5 text-white" /> : <Volume2 className="h-5 w-5 text-white" />}
          </button>
          <button 
            onClick={togglePlay} 
            className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
          >
            {isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
          </button>
        </div>
      )}
      
      <button 
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 transition-colors duration-300 rounded-full p-4 backdrop-blur-sm opacity-0 group-hover:opacity-100"
      >
        <Play className="h-8 w-8 text-white" />
      </button>
    </div>
  );
};

export { VideoPlayer };
