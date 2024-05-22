import { useState } from "react";
import style from "./style.module.scss";
import { IconDownloadVideo } from "../Icons/IconDownloadVideo";
import { IconVolumeMuted } from "../Icons/IconVolumeMuted";
import { IconDown } from "../Icons/IconDown";
import { IconVolume } from "../Icons/IconVolume";
import video from "../../assets/videos/background-desktop.mp4";
import useDownload from "../../hooks/useDownload";

export default function HeroVideo() {
  const [muted, setMuted] = useState(true);

  const download = useDownload();

  return (
    <section className={style.sectionComponent} aria-labelledby="hero-heading">
      <div className={style.videoContainer}>
        <video
          className={style.videoBackground}
          autoPlay
          muted={muted}
          loop
          aria-hidden="true"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={style.buttonsVideo}>
          <h1 className={style.h1Desktop} id="hero-heading">
            Welcome to the Play Matters Interactive Lookbook
          </h1>

          <div className={style.videoControls}>
            <button
              type="button"
              className={style.volumeBtn}
              onClick={() => setMuted(!muted)}
              aria-label={muted ? "Unmute video" : "Mute video"}
            >
              {muted ? <IconVolumeMuted /> : <IconVolume />}
            </button>
            <button
              type="button"
              className={style.downloadBtn}
              onClick={() => download(video, "lego-video.mp4")}
              aria-label="Download video"
            >
              <IconDownloadVideo />
            </button>
          </div>
        </div>

        <div className={style.scrollDownBtn}>
          <a href="#content" aria-label="Scroll down to content">
            Scroll down <IconDown />
          </a>
        </div>
      </div>

      <h1 className={style.h1Mobile}>
        Welcome to the Play Matters Interactive Lookbook
      </h1>
    </section>
  );
}
