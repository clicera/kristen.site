import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, X, Sparkles } from 'lucide-react';
import { heroWorkspaceImg } from '../data/media';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  posterUrl?: string;
  title?: string;
  description?: string;
  onOpenBooking?: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  posterUrl = heroWorkspaceImg,
  title = 'How Clicera Drives 1-on-1 Growth for Small Businesses & Startups',
  description = 'A quick 2-minute overview of our direct freelance model: modern SEO & GEO, high-converting social media, and authoritative content.',
  onOpenBooking
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
        // Autoplay policy might require mute
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => {});
        }
      });
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMute = !videoRef.current.muted;
    videoRef.current.muted = nextMute;
    setIsMuted(nextMute);
  };

  return (
    <div
      id="video-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="video-modal-container"
        className="bg-[#1A1A1A] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/10 text-white flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#252525]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
              Interactive Video Walkthrough
            </span>
          </div>
          <button
            type="button"
            id="close-video-modal-btn"
            onClick={onClose}
            aria-label="Close video"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative aspect-video bg-black group">
          <video
            ref={videoRef}
            src={videoUrl}
            poster={posterUrl}
            playsInline
            controls
            className="w-full h-full object-cover"
          />
        </div>

        {/* Footer Details & Action */}
        <div className="p-6 bg-[#1A1A1A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-1">
              {title}
            </h3>
            <p className="text-xs text-gray-400 max-w-xl">
              {description}
            </p>
          </div>
          {onOpenBooking && (
            <button
              type="button"
              id="video-modal-book-call-btn"
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="btn-primary whitespace-nowrap text-xs py-3 px-5 shadow-xs shrink-0 cursor-pointer"
            >
              <span>Book Strategy Call</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
