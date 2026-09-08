import React from "react";
import { Composition } from "remotion";
import { SyntropyBanner, SyntropyBannerLight } from "./SyntropyBanner";
import { BANNER_DURATION, BANNER_FPS, BANNER_HEIGHT, BANNER_WIDTH } from "./tokens";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SyntropyBanner"
        component={SyntropyBanner}
        durationInFrames={BANNER_DURATION}
        fps={BANNER_FPS}
        width={BANNER_WIDTH}
        height={BANNER_HEIGHT}
      />
      <Composition
        id="SyntropyBannerLight"
        component={SyntropyBannerLight}
        durationInFrames={BANNER_DURATION}
        fps={BANNER_FPS}
        width={BANNER_WIDTH}
        height={BANNER_HEIGHT}
      />
    </>
  );
};
