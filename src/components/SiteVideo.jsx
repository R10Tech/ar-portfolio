export default function SiteVideo() {
  return (
    <div className="site-video" aria-hidden="true">
      <video
        className="site-video__media"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/hero-video-poster.jpg"
      >
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="site-video__veil" />
    </div>
  );
}
