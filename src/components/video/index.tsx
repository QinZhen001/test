import { useEffect, useRef, useState } from "react";
import videojs, { VideoJsPlayer } from "video.js";
import { Parser } from "m3u8-parser";
import "video.js/dist/video-js.min.css";
import "./index.css";

// Html5.Events = [
//   'loadstart',
//   'suspend',
//   'abort',
//   'error',
//   'emptied',
//   'stalled',
//   'loadedmetadata',
//   'loadeddata',
//   'canplay',
//   'canplaythrough',
//   'playing',
//   'waiting',
//   'seeking',
//   'seeked',
//   'ended',
//   'durationchange',
//   'timeupdate',
//   'progress',
//   'play',
//   'pause',
//   'ratechange',
//   'resize',
//   'volumechange'
//   ];

let segmentsLen = 0;
let volume = 1;
let lock1 = false;
let lock2 = false;

const options = {
  controls: true,
  controlBar: {
    pictureInPictureToggle: false,
  },
};

// const src =
// `https://test-1302380933.cos.ap-shanghai.myqcloud.com/b2f5fc64de460642a9ddfc950ebc3e0c_xxx.m3u8`;

let player1: VideoJsPlayer = null as unknown as VideoJsPlayer;
let player2: VideoJsPlayer = null as unknown as VideoJsPlayer;

export const M3U8Video = ({ sid = "" }) => {
  const src = `https://test-1302380933.cos.ap-shanghai.myqcloud.com/${sid}_xxx.m3u8`;

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const playerRef1 = useRef<VideoJsPlayer>();
  const playerRef2 = useRef<VideoJsPlayer>();
  const srcRef = useRef<string>(src);
  const [show, setShow] = useState(true);

  // player1 初始化
  useEffect(() => {
    if (!playerRef1.current) {
      const videoElement = videoRef1.current;
      if (!videoElement) return;
      player1 = playerRef1.current = videojs(videoElement, options, ready1);
    }
  }, [videoRef1]);

  // player2 初始化
  useEffect(() => {
    if (!playerRef2.current) {
      const videoElement = videoRef2.current;
      if (!videoElement) return;
      player2 = playerRef2.current = videojs(videoElement, options, ready2);
    }
  }, [videoRef2]);

  useEffect(() => {
    srcRef.current = src;
    console.log("cur src ", src);
    if (playerRef1.current) {
      playerRef1.current.src({
        type: "application/x-mpegURL",
        src,
      });
    }
    if (playerRef2.current) {
      playerRef2.current.src({
        type: "application/x-mpegURL",
        src,
      });
    }
  }, [src]);

  // 销毁播放器
  useEffect(() => {
    return () => {
      if (player1) {
        player1.dispose();
        player1 = null as unknown as VideoJsPlayer;
        playerRef1.current = undefined;
      }
      if (player2) {
        player2.dispose();
        player2 = null as unknown as VideoJsPlayer;
        playerRef2.current = undefined;
      }
      srcRef.current = "";
    };
  }, []);

  const m3u8Analysis = async (src: string) => {
    console.log("m3u8Analysis ", src);
    var parser = new Parser();
    return fetch(src)
      .then((response) => response.text())
      .then((body) => {
        parser.push(body);
        parser.end();
        const parsedManifest = parser.manifest;
        // console.log("body", body);
        console.log("parsedManifest", parsedManifest);
        return parsedManifest;
      });
  };

  // 静音预播放
  const prePlay = (player: VideoJsPlayer, currentTime: number) => {
    console.log("prePlay 预播放", currentTime, player);
    const src = srcRef.current || "";
    player.muted(true);
    player.src({
      type: "application/x-mpegURL",
      src: src,
    });
    player.currentTime(currentTime);
    player.volume(volume);
    player.play();
  };

  const play = (palyer: VideoJsPlayer, currentTime: number) => {
    console.log("play play play ", currentTime, palyer);
    palyer.currentTime(currentTime);
    palyer.muted(false);
    palyer.volume(volume);
    palyer.play();
  };

  const ended1 = async () => {
    console.log("ended1 -------- ");
    lock1 = false;
    const whereYouAt = player1.currentTime();
    const lengthOfVideo = player1.duration();
    console.log("whereYouAt1", whereYouAt);
    console.log("lengthOfVideo1", lengthOfVideo);
    const data = await m3u8Analysis(player1.src());
    if (data.segments.length !== segmentsLen) {
      console.log("m3u8 shoule update");
      segmentsLen = data.segments.length;
      play(player2, whereYouAt);
      setShow(false);
    } else {
      console.log("m3u8 already complete");
    }
  };

  const ended2 = async () => {
    console.log("ended2 ------ ");
    lock2 = false;
    const whereYouAt = player2.currentTime();
    const lengthOfVideo = player2.duration();
    console.log("whereYouAt2", whereYouAt);
    console.log("lengthOfVideo2", lengthOfVideo);
    const data = await m3u8Analysis(player2.src());
    if (data.segments.length !== segmentsLen) {
      console.log("m3u8 shoule update");
      segmentsLen = data.segments.length;
      play(player1, whereYouAt);
      setShow(true);
    } else {
      console.log("m3u8 already complete");
    }
  };

  const ready1 = async () => {
    console.log("player1 is ready");
    player1.on("ended", ended1);
    const data = await m3u8Analysis(player1.src());
    segmentsLen = data.segments.length;

    player1.on("timeupdate", (event) => {
      //   console.log("The currentTime attribute has been updated. Again.", event);
      const whereYouAt = player1.currentTime();
      const lengthOfVideo = player1.duration();
      if (lengthOfVideo - whereYouAt < 10) {
        if (!lock1) {
          lock1 = true;
          prePlay(player2, whereYouAt);
        }
      }
    });

    player1.on("volumechange", (event) => {
      volume = player1.volume();
      console.log("player1 volumechange ", volume);
    });

    // player1.on("timeupdate", (event) => {});

    // player1.on("playing", (event) => {
    //   console.log("playing ", event);
    // });
    // player1.on("waiting", (event) => {
    //   console.log("waiting ", event);
    // });
    // player1.on("seeking", (event) => {
    //   console.log("seeking ", event);
    // });
    // player1.on("seeked", (event) => {
    //   console.log("seeked ", event);
    // });

    // player1.on("durationchange", (event) => {
    //   console.log("Not sure why, but the duration of the video has changed.", event);
    // });

    // player1.on("progress", (event) => {});
  };

  const ready2 = () => {
    console.log("player2 ready");
    player2.on("ended", ended2);
    player2.on("timeupdate", (event) => {
      //   console.log("The currentTime attribute has been updated. Again.", event);
      const whereYouAt = player2.currentTime();
      const lengthOfVideo = player2.duration();
      if (lengthOfVideo - whereYouAt < 10) {
        if (!lock2) {
          lock2 = true;
          prePlay(player1, whereYouAt);
        }
      }
    });

    player2.on("volumechange", (event) => {
      volume = player2.volume();
      console.log("player2 volumechange ", volume);
    });
  };

  const exchange = () => {
    setShow((v) => !v);
  };

  return (
    <div>
      <button className="exchange" onClick={exchange}>
        exchange
      </button>
      <div className="wrapper wrapper1" style={{ zIndex: show ? 1 : -1 }}>
        <video ref={videoRef1} className="video-js vjs-big-play-centered vjs-fluid" />
      </div>
      <div className="wrapper wrapper2" style={{ zIndex: show ? -1 : 1 }}>
        <video ref={videoRef2} className="video-js vjs-big-play-centered vjs-fluid" />
      </div>
    </div>
  );
};
