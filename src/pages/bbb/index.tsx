import { useEffect, useRef, useState } from "react";
import videojs, { VideoJsPlayer } from "video.js";
import { Parser } from "m3u8-parser";
import "video.js/dist/video-js.min.css";

const src =
  "https://test-1302380933.cos.ap-shanghai.myqcloud.com/3b70b7e222488ffca5a464bfc6b7cff7_xxx.m3u8";

export const BComponent = () => {
  const videoRef = useRef(null);
  const playerRef = useRef<VideoJsPlayer>();
  const [segmentsLen, setSegmentsLen] = useState(0);
  const [hasChangePlayList, setHasChangePlayList] = useState(false);

  let player: VideoJsPlayer = null as unknown as VideoJsPlayer;

  const options = {
    controls: true,
    // liveui: true,
  };

  const m3u8Analysis = async () => {
    var parser = new Parser();
    return fetch(src)
      .then((response) => response.text())
      .then((body) => {
        parser.push(body);
        parser.end();
        const parsedManifest = parser.manifest;
        // console.log("body", body);
        // console.log("parsedManifest", parsedManifest);
        // debugger;
        return parsedManifest;
      });
  };

  const rePlay = () => {
    debugger;
    player.reset();
    player.src({
      type: "application/x-mpegURL",
      src,
    });
    player.load();
    player.play();
  };

  const ended = () => {
    console.log("ended ended ended ended");
    const whereYouAt = player.currentTime();
    const lengthOfVideo = player.duration();
    console.log("whereYouAt", whereYouAt);
    console.log("lengthOfVideo", lengthOfVideo);
  };

  const ready = async () => {
    console.log("player is ready");
    player.autoplay(true);
    player.src({
      type: "application/x-mpegURL",
      src,
    });

    player.on("ended", ended);

    const data = await m3u8Analysis();
    setSegmentsLen(data?.segments?.length || 0);

    // player.on("timeupdate", (event) => {
    //   console.log("The currentTime attribute has been updated. Again.", event);
    // });

    // player.on("durationchange", (event) => {
    //   console.log("Not sure why, but the duration of the video has changed.", event);
    // });
  };

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;
      player = playerRef.current = videojs(videoElement, options, ready);
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
    <div>
      <div>当前segments长度: {segmentsLen}</div>
      {hasChangePlayList ? <div>PlayList 发生了改变</div> : null}
      <div data-vjs-player>
        <video ref={videoRef} className="video-js vjs-big-play-centered" />
      </div>
    </div>
  );
};
