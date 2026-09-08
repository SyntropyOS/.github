# Remotion — Syntropy AI

Proyecto propio para imágenes de empresa/producto. Separado del Remotion de VantaDB.

## Uso

```sh
npm install
npm run studio          # vista previa
npm run typecheck       # debe pasar
npm run render:banner        # frames dark (chroma #0A0A0A? ver nota)
npm run render:banner-light  # frames light (chroma hairline)
```

## GIF single-play dual-theme

1. Renderizar frames de ambas variantes.
2. Convertir con ffmpeg (colorkey del fondo → alfa real, paleta 64, `-loop -1` = una sola reproducción):

```sh
ffmpeg -y -framerate 15 -start_number 0 -i out/syntropy-frames/element-%02d.png -filter_complex "[0:v]scale=960:240:flags=lanczos,colorkey=0x0A0A0A:0.03:0,split[a][b];[a]palettegen=max_colors=64:stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=5" -loop -1 out/syntropy-banner.gif
```

Para light, fondo `#F0EEE6` y `colorkey=0xF0EEE6:0.03:0`. Verificar transparencia (índice alfa) y legibilidad en ambos temas antes de subir a `syntropyos/.github`.

## Reglas de composición

120f, 30fps, 960×240, loop-safe, GIF-safe (tintas planas, toggles, sin blur). Tokens en `src/tokens.ts`.
