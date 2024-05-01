import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

interface ImageProps {
  src: string;
  alt?: string;
  asp?: number;
  center?: boolean;
}

export const Image = ({ src, alt, asp ,center }: ImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const options = {};

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target === imgRef.current) {
          const img = entry.target as HTMLImageElement;
          img.src = src;
          img.parentElement?.classList.remove('loading');
          img.parentElement?.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <figure
      className={`${styles.figure__} ${asp ? styles.asp__ : ''} loading ${center ? styles.center : ''}`}
      style={asp ? { paddingBottom: `${asp}%` } : {}}
    >
      <img ref={imgRef} alt={alt} />
    </figure>
  );
};
