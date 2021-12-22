import { useEffect, useRef, useState } from "react";
import videojs, { VideoJsPlayer } from "video.js";
import { Parser } from "m3u8-parser";
import "video.js/dist/video-js.min.css";
import "./index.css";

const src =
  "https://test-1302380933.cos.ap-shanghai.myqcloud.com/a9592ca35f42633c90d67bbccfc98440_xxx.m3u8";

let segmentsLen = 0;
let lock = false;

const options = {
  controls: true,
  // liveui: true,
};
let interval: any = null;

export const BComponent = () => {
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);
  const playerRef = useRef<VideoJsPlayer>();
  const playerRef2 = useRef<VideoJsPlayer>();
  const [show, setShow] = useState(true);
  const [hasChangePlayList, setHasChangePlayList] = useState(false);

  let player: VideoJsPlayer = null as unknown as VideoJsPlayer;
  let player2: VideoJsPlayer = null as unknown as VideoJsPlayer;

  //   useEffect(() => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //     interval = setInterval(() => {
  //       if (player2) {
  //         console.log("player2 setInterval");
  //         player2.src({
  //           type: "application/x-mpegURL",
  //           src,
  //         });
  //       }
  //     }, 5000);
  //   }, []);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;
      player = playerRef.current = videojs(videoElement, options, ready);
    }
  }, [videoRef]);

  useEffect(() => {
    if (!playerRef2.current) {
      const videoElement = videoRef2.current;
      if (!videoElement) return;
      player2 = playerRef2.current = videojs(videoElement, options, ready2);
    }
  }, [videoRef]);

  const m3u8Analysis = async () => {
    var parser = new Parser();
    return fetch(src)
      .then((response) => response.text())
      .then((body) => {
        parser.push(body);
        parser.end();
        const parsedManifest = parser.manifest;
        // console.log("body", body);
        console.log("parsedManifest", parsedManifest);
        // debugger;
        return parsedManifest;
      });
  };

  const rePlay = (currentTime: number) => {
    console.log("rePlay rePlay");
    // debugger;

    // player.src({
    //   type: "application/x-mpegURL",
    //   src,
    // });
    // player2.load();
    // player.play();
    // player2.src({
    //   type: "application/x-mpegURL",
    //   src,
    // });
    exchange();
    // player2.reset();
    // player2.src({
    //   type: "application/x-mpegURL",
    //   src,
    // });
    player2.currentTime(currentTime - 3);
    player2.play();
  };

  const ended = async () => {
    console.log("ended ended ended ended");
    const whereYouAt = player.currentTime();
    const lengthOfVideo = player.duration();
    console.log("whereYouAt", whereYouAt);
    console.log("lengthOfVideo", lengthOfVideo);
    const data = await m3u8Analysis();

    rePlay(whereYouAt);
    // if (data.segments.length !== segmentsLen) {
    //   segmentsLen = data.segments.length;
    //   rePlay(whereYouAt);
    // }
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
    segmentsLen = data.segments.length;

    player.on("timeupdate", (event) => {
      //   console.log("The currentTime attribute has been updated. Again.", event);

      //   console.log("progress. ", event);
      const whereYouAt = player.currentTime();
      const lengthOfVideo = player.duration();
      //   console.log("whereYouAt", whereYouAt);
      //   console.log("lengthOfVideo", lengthOfVideo);
      if (lengthOfVideo - whereYouAt < 10) {
        // debugger;
        if (!lock) {
          //   debugger;
          lock = true;
          loadSrc();
        }
      }
    });

    // player.on("durationchange", (event) => {
    //   console.log("Not sure why, but the duration of the video has changed.", event);
    // });

    // player.on("progress", (event) => {
    //     console.log("progress. ", event);
    //   const whereYouAt = player.currentTime();
    //   const lengthOfVideo = player.duration();
    //   //   console.log("whereYouAt", whereYouAt);
    //   //   console.log("lengthOfVideo", lengthOfVideo);
    //   if (lengthOfVideo - whereYouAt < 10) {
    //     debugger;
    //     if (!lock) {
    //       debugger;
    //       lock = true;
    //       loadSrc();
    //     }
    //   }
    // });
  };

  const loadSrc = () => {
    console.log("loadSrc");
    player2.src({
      type: "application/x-mpegURL",
      src,
    });
  };

  const ready2 = () => {
    player2.src({
      type: "application/x-mpegURL",
      src,
    });
  };

  const exchange = () => {
    setShow((v) => !v);
  };

  // Dispose the Video.js player when the functional component unmounts
  //   useEffect(() => {
  //     const player = playerRef.current;

  //     return () => {
  //       if (player) {
  //         player.dispose();
  //         playerRef.current = undefined;
  //       }
  //     };
  //   }, [playerRef]);

  return (
    <div>
      <button className="exchange" onClick={exchange}>
        exchange
      </button>
      <div className="wrapper wrapper1" style={{ zIndex: show ? 1 : -1 }}>
        <video ref={videoRef} className="video-js vjs-big-play-centered" />
      </div>
      <div className="wrapper wrapper2" style={{ zIndex: show ? -1 : 1 }}>
        <video ref={videoRef2} className="video-js vjs-big-play-centered" />
      </div>
    </div>
  );
};

type MyArgs = {
  id: string;
};

const args: MyArgs = {
  id: "safasfa",
};
