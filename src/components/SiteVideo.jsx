import { useEffect, useRef } from 'react';

export default function SiteVideo({ className = '' }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');

    const play = () => {
      const attempt = video.play();
      if (attempt) attempt.catch(() => {});
    };

    play();
    video.addEventListener('loadeddata', play);
    video.addEventListener('canplay', play);
    document.addEventListener('visibilitychange', play);

    return () => {
      video.removeEventListener('loadeddata', play);
      video.removeEventListener('canplay', play);
      document.removeEventListener('visibilitychange', play);
    };
  }, []);

  return (
    <div className={`video-tile ${className}`.trim()} aria-hidden="true">
      <video
        ref={videoRef}
        className="video-tile__media"
        src="/assets/hero-bg.mp4"
        poster="/assets/hero-video-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
      />
    </div>
  );
}
