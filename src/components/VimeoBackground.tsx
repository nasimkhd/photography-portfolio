const VIMEO_BACKGROUND_SRC =
  "https://player.vimeo.com/video/267069364?background=1&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0#t=8s";

type VimeoBackgroundProps = {
  className?: string;
};

export function VimeoBackground({ className = "" }: VimeoBackgroundProps) {
  const classes = [
    "absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <iframe
      src={VIMEO_BACKGROUND_SRC}
      title="Anthony Saleh film reel"
      allow="autoplay; fullscreen; picture-in-picture"
      className={classes}
    />
  );
}
