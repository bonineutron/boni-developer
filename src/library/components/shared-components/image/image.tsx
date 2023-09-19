import { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  height: string;
  width: string;
  className?: string;
}

export function Image({ src, alt, height, width, className }: Props): JSX.Element {
  // states
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // methods
  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setError(true);
  };

  return (
    <>
      {loading && !error && (
        <img
          src={'/images/global/image-loading.svg'}
          alt={alt}
          className={`object-cover animate-pulse ${className || ''}`}
          style={{ height: height, width: width }}
        />
      )}
      {error && (
        <img
          src={'/images/global/image-error.svg'}
          alt={alt}
          className={`object-cover ${className || ''}`}
          style={{ height: height, width: width }}
        />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`object-cover ${loading ? 'hidden' : ''} ${className || ''}`}
        style={{ height: height, width: width }}
      />
    </>
  );
}
