import { useEffect, useRef } from "react";
import videojs, { VideoJsPlayer } from "video.js";
import "video.js/dist/video-js.min.css";

export const BComponent = () => {
  const videoRef = useRef(null);
  const playerRef = useRef<VideoJsPlayer>();

  const options = {
    controls: true,
    // liveui: true,
  };

  useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;
      const player = (playerRef.current = videojs(videoElement, options, () => {
        console.log("player is ready");
        player.autoplay(true);
        player.src({
          type: "application/x-mpegURL",
          src: "https://test-1302380933.cos.ap-shanghai.myqcloud.com/3b70b7e222488ffca5a464bfc6b7cff7_xxx.m3u8",
        });
      }));
    } else {
      // debugger;
      // const player = playerRef.current;
      // player.autoplay(true);
      // player.src("http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4");
      // debugger;
    }
  }, [videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = undefined;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
};
