import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { loadFont } from "@remotion/google-fonts/SpaceGrotesk";
import {
  BANNER_HEIGHT,
  BANNER_WIDTH,
  CHROMA_DARK,
  TEXT_INK,
  SAGE_DEEP,
  WORDMARK_TRACKING,
} from "./tokens";

const { fontFamily: grotesk } = loadFont("normal", {
  weights: ["700"],
});

const EASE_OUT = Easing.bezier(0.16, 1, 0.3, 1);
const LETTERS = ["S", "Y", "N", "T", "R", "O", "P", "Y"];

/**
 * SyntropyBanner (dark) — lockup V-A sobre chroma-key.
 * Letras suben una vez con stagger; el anillo+O y el punto entran con pop.
 * Sin flote global. GIF-safe: tintas planas, sin blur.
 */
export const SyntropyBanner: React.FC<{ chroma?: string; ink?: string }> = ({
  chroma = CHROMA_DARK,
  ink = "#FAF9F5",
}) => {
  const frame = useCurrentFrame();

  const letter = (i: number) => {
    const start = 4 + i * 3;
    const opacity = interpolate(frame, [start, start + 12], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: EASE_OUT,
    });
    const translateY = interpolate(
      frame,
      [start, start + 8, start + 12],
      [70, -9, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
    return { opacity, translateY };
  };

  const ringIn = interpolate(frame, [8, 32], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <div
      style={{
        width: BANNER_WIDTH,
        height: BANNER_HEIGHT,
        backgroundColor: chroma,
        fontFamily: grotesk,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", lineHeight: 1, alignItems: "center" }}>
        {LETTERS.map((ch, i) => {
          const { opacity, translateY } = letter(i);
          if (ch === "O") {
            // Réplica exacta del V-A aprobado (.d2 + .d2 .oring del sheet):
            // flex centrado, anillo .72em border-box, borde .1em, margen .04em,
            // lift -.02em. Sin placeholding ni baseline: misma construcción = mismo look.
            return (
              <span
                key={i}
                style={{
                  width: "0.72em",
                  height: "0.72em",
                  fontSize: 132,
                  boxSizing: "border-box",
                  border: `0.1em solid ${ink}`,
                  borderRadius: "50%",
                  margin: `0 calc(${WORDMARK_TRACKING} + 4px) 0 0`,
                  position: "relative",
                  display: "inline-block",
                  opacity: ringIn,
                  transform: `translateY(${translateY - 0.02 * 132}px)`,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: "0.2em",
                    height: "0.2em",
                    marginLeft: "-0.1em",
                    marginTop: "-0.1em",
                    borderRadius: "50%",
                    backgroundColor: SAGE_DEEP,
                  }}
                />
              </span>
            );
          }
          return (
              <span
                key={i}
                style={{
                  fontSize: 132,
                  lineHeight: 1,
                  // La R previa al anillo cede su tracking al hueco simétrico:
                  // si no, R→O mide .14em+4px y O→P solo .04em.
                  letterSpacing: i === 4 ? 0 : WORDMARK_TRACKING,
                  textTransform: "uppercase",
                  color: ink,
                  transform: `translateY(${translateY}px)`,
                  opacity,
                  display: "inline-block",
                  paddingRight: i === 4 ? 0 : 4,
                  marginRight: i === 4 ? `calc(${WORDMARK_TRACKING} + 4px)` : 0,
                }}
              >
              {ch}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export const SyntropyBannerLight: React.FC = () => (
  <SyntropyBanner chroma="#F0EEE6" ink={TEXT_INK} />
);
