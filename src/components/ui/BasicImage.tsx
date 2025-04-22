type BasicImageProps = {
  mobile?: string;
  desktop: string;
  alt: string;
  title?: string;
  className?: string;
  width: number;
  height: number;
};

export function BasicImage({
  mobile,
  desktop,
  alt,
  title,
  className = "",
  width,
  height,
}: BasicImageProps) {
  return (
    <img
      width={width}
      height={height}
      srcSet={`${mobile ?? desktop} 767w, ${desktop} 768w`}
      sizes="(max-width: 767px) 100vw, 768px"
      src={desktop}
      alt={alt}
      title={title}
      className={className}
    />
  );
}
