import React, { useState, useRef, useEffect } from 'react';
import { VIDEO_SHOWCASE_DATA, VideoItem } from '../data/media';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, CheckCircle2, Clock, Video, ArrowRight } from 'lucide-react';

interface VideoShowcaseProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ onOpenBooking }) => {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(VIDEO_SHOWCASE_DATA[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true); // default muted for browser autoplay policy
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [showControls, setShowControls] = useState<boolean>(true);
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // When active video changes, reset video state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(false);
      setActiveChapterIndex(0);
      videoRef.current.load();
    }
  }, [activeVideo.id]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Video play prevented:', err);
      });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    setCurrentTime(curr);

    // Update active chapter based on current time
    const chapters = activeVideo.chapters;
    for (let i = chapters.length - 1; i >= 0; i--) {
      if (curr >= chapters[i].time) {
        setActiveChapterIndex(i);
        break;
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration || 0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const seekTo = parseFloat(e.target.value);
    videoRef.current.currentTime = seekTo;
    setCurrentTime(seekTo);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMute = !videoRef.current.muted;
    videoRef.current.muted = nextMute;
    setIsMuted(nextMute);
  };

  const handleSpeedChange = (speed: number) => {
    if (!videoRef.current) return;
    videoRef.current.playbackRate = speed;
    setPlaybackSpeed(speed);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  const seekToChapter = (seconds: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = seconds;
    setCurrentTime(seconds);
    videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  return (
    <section id="video-showcase" className="py-20 md:py-28 bg-[#FAF7F2] relative border-t border-[#4B1D73]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EBF5] text-[#4B1D73] mb-4 border border-[#4B1D73]/15">
            <Video className="w-4 h-4 text-[#4B1D73]" />
            <span className="typography-h2 text-[12px] sm:text-[14px] text-[#4B1D73]">
              VIDEO BREAKDOWNS & STRATEGY
            </span>
          </div>

          <h2 className="typography-h3 font-bold text-[#2B2B2B] mb-4">
            See Exactly How We Drive 1-on-1 Growth
          </h2>
          <p className="typography-body max-w-2xl mx-auto">
            Watch real screen walkthroughs, client audits, and our proprietary Generative Engine Optimization (GEO) framework in action.
          </p>
        </div>

        {/* Video Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {VIDEO_SHOWCASE_DATA.map((vid) => {
            const isActive = activeVideo.id === vid.id;
            return (
              <button
                key={vid.id}
                type="button"
                id={`video-tab-${vid.id}`}
                onClick={() => setActiveVideo(vid)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#4B1D73] text-white shadow-md'
                    : 'bg-[#F0EBF5] text-[#2B2B2B] hover:text-[#4B1D73] border border-purple-100 hover:bg-white'
                }`}
              >
                <Play className={`w-3.5 h-3.5 ${isActive ? 'text-purple-200 fill-purple-200' : 'text-[#4B1D73]'}`} />
                <span>{vid.title}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full ml-1 font-normal ${
                  isActive ? 'bg-white/20 text-white' : 'bg-white text-[#6B6B6B]'
                }`}>
                  {vid.duration}
                </span>
              </button>
            );
          })}
        </div>

        {/* Video Stage & Interactive Chapter Player */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#2B2B2B]/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 8 Cols: Custom Video Player Container */}
            <div className="lg:col-span-8 flex flex-col">
              <div
                className="relative aspect-video rounded-2xl overflow-hidden bg-black group border border-black/10 shadow-inner"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => isPlaying && setShowControls(false)}
              >
                <video
                  ref={videoRef}
                  id="main-showcase-video-player"
                  src={activeVideo.videoUrl}
                  poster={activeVideo.posterUrl}
                  muted={isMuted}
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                  onClick={togglePlay}
                  className="w-full h-full object-cover cursor-pointer"
                />

                {/* Big Center Play Button Overlay (when paused) */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-opacity cursor-pointer"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-[#4B1D73] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform border-2 border-white/40">
                        <Play className="w-8 h-8 fill-white ml-1" />
                      </div>
                      <span className="text-white text-xs font-semibold uppercase tracking-wider mt-3 bg-black/60 px-3 py-1 rounded-full border border-white/20">
                        Click to Play ({activeVideo.duration})
                      </span>
                    </div>
                  </div>
                )}

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10 pointer-events-none">
                  <span className="bg-[#4B1D73] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {activeVideo.tag}
                  </span>
                  <span className="bg-black/60 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-full border border-white/20">
                    1-on-1 Walkthrough
                  </span>
                </div>

                {/* Video Controls Bar Overlay */}
                <div
                  className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 transition-opacity duration-300 ${
                    showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  {/* Progress Scrubber Bar */}
                  <div className="relative mb-3 flex items-center">
                    <input
                      type="range"
                      min={0}
                      max={duration || 100}
                      step={0.1}
                      value={currentTime}
                      onChange={handleSeek}
                      aria-label="Video timeline scrubber"
                      className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#4B1D73] focus:outline-hidden"
                    />
                  </div>

                  <div className="flex items-center justify-between text-white text-xs">
                    {/* Play/Pause & Time */}
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        id="video-play-toggle-btn"
                        onClick={togglePlay}
                        className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
                        title={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? (
                          <Pause className="w-4 h-4 fill-white" />
                        ) : (
                          <Play className="w-4 h-4 fill-white ml-0.5" />
                        )}
                      </button>

                      <div className="font-mono text-xs text-gray-200">
                        <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
                      </div>
                    </div>

                    {/* Volume, Speed & Fullscreen */}
                    <div className="flex items-center gap-3">
                      {/* Speed Pills */}
                      <div className="hidden sm:flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full">
                        {[1, 1.25, 1.5].map((speed) => (
                          <button
                            key={speed}
                            type="button"
                            onClick={() => handleSpeedChange(speed)}
                            className={`px-1.5 py-0.5 rounded text-[10px] font-bold cursor-pointer ${
                              playbackSpeed === speed ? 'bg-[#4B1D73] text-white' : 'text-gray-300 hover:text-white'
                            }`}
                          >
                            {speed}x
                          </button>
                        ))}
                      </div>

                      {/* Mute Button */}
                      <button
                        type="button"
                        id="video-mute-toggle-btn"
                        onClick={toggleMute}
                        className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
                        title={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 text-amber-300" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-white" />
                        )}
                      </button>

                      {/* Fullscreen Button */}
                      <button
                        type="button"
                        id="video-fullscreen-btn"
                        onClick={toggleFullscreen}
                        className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
                        title="Fullscreen"
                      >
                        <Maximize2 className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Title & Description Details */}
              <div className="mt-5">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#2B2B2B]">
                    {activeVideo.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#4B1D73] bg-[#F0EBF5] px-3 py-1 rounded-full border border-purple-100 shrink-0">
                    Verified Strategy Session
                  </span>
                </div>
                <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
                  {activeVideo.description}
                </p>

                {/* Key Takeaways */}
                <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-black/5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#4B1D73] mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> What You Learn in This Breakdown:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#2B2B2B]">
                    {activeVideo.keyHighlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4B1D73] shrink-0 mt-0.5" />
                        <span className="leading-snug">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Interactive Chapters & Timestamp Navigation */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-5">
              <div className="bg-[#F0EBF5] rounded-2xl p-5 border border-[#4B1D73]/15">
                <div className="flex items-center justify-between pb-3 border-b border-[#4B1D73]/15 mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#4B1D73]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4B1D73]">
                      Interactive Chapters
                    </span>
                  </div>
                  <span className="text-[11px] text-[#6B6B6B]">Click to jump</span>
                </div>

                <div className="space-y-2.5">
                  {activeVideo.chapters.map((ch, idx) => {
                    const isCurrent = activeChapterIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        id={`chapter-btn-${idx}`}
                        onClick={() => seekToChapter(ch.time)}
                        className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex items-start gap-2.5 ${
                          isCurrent
                            ? 'bg-white text-[#4B1D73] shadow-xs border-l-4 border-[#4B1D73]'
                            : 'hover:bg-white/60 text-[#2B2B2B]'
                        }`}
                      >
                        <div className={`text-xs font-mono font-bold mt-0.5 ${isCurrent ? 'text-[#4B1D73]' : 'text-[#6B6B6B]'}`}>
                          {formatTime(ch.time)}
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-bold leading-tight">
                            {ch.label.replace(/^\d{2}:\d{2}\s*—\s*/, '')}
                          </div>
                          <div className="text-[11px] text-[#6B6B6B] mt-0.5 leading-snug">
                            {ch.description}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Direct Booking Callout Card */}
              <div className="bg-[#1A1A1A] text-white rounded-2xl p-5 border border-black/10 shadow-md">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-1">
                  Ready to Apply This Strategy?
                </div>
                <h4 className="font-heading font-bold text-base text-white mb-2">
                  Get a 1-on-1 Growth Audit for Your Brand
                </h4>
                <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                  We will evaluate your search entity authority, keyword ranking gaps, and AI citation scores together.
                </p>
                <button
                  type="button"
                  id="video-callout-book-btn"
                  onClick={() => onOpenBooking(activeVideo.title)}
                  className="btn-primary w-full bg-white text-[#1A1A1A] hover:bg-gray-100 text-xs font-semibold py-3 px-4 rounded-full flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Free 1-on-1 Strategy Call</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#4B1D73]" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
