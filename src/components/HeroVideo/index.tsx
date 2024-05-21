"use client";

import { useState } from "react";
import { IconDownloadVideo } from "../Icons/IconDownloadVideo";
import { IconVolumeMuted } from "../Icons/IconVolumeMuted";
import style from "./style.module.scss";
import video from "../../assets/videos/background-desktop.mp4";
import { IconVolume } from "../Icons/IconVolume";
import useDownload from "../../hooks/useDownload";
import { IconDown } from "../Icons/IconDown";

export default function HeroVideo() {
  const [muted, setMuted] = useState(true);

  const download = useDownload();

  return (
    <section className={style.sectionComponent}>
      <div className={style.videoContainer}>
        <video className={style.videoBackground} autoPlay muted={muted} loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={style.buttonsVideo}>
          <h1 className={style.h1Desktop}>
            Welcome to the Play Matters Interactive Lookbook
          </h1>

          <div className={style.videoControls}>
            <button
              type="button"
              className={style.volumeBtn}
              onClick={() => setMuted(!muted)}
            >
              {muted ? <IconVolumeMuted /> : <IconVolume />}
            </button>
            <button
              type="button"
              className={style.downloadBtn}
              onClick={() => download(video, "lego-video.mp4")}
            >
              <IconDownloadVideo />
            </button>
          </div>
        </div>

        <div className={style.scrollDownBtn}>
          <a href="#content">
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
