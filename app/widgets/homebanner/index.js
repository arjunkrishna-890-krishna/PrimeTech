export default function HomeBanner() {
  return (
    <div className="relative w-full h-screen">
      {/* Video Banner */}
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/3255275-uhd_3840_2160_25fps.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      ></video>
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      {/* Title Overlay */}
      <div className="absolute top-1/2 right-40 transform -translate-y-1/8 text-white text-5xl md:text-1xl text-right leading-relaxed">
        <h1>
          Excellence in Every <br /> Engineer's Step!
        </h1>
      </div>
      {/* Bottom White Vignette */}
      {/* <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div> */}
    </div>
  );
}
