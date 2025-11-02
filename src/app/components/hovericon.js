import { useState } from 'react';
import Image from 'next/image';

export function HoverIcon({ href, src, hoverSrc, alt, className, objectfit }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
      style={{ position: 'relative', height: '100%' }}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image
          className={objectfit}
          src={isHovered ? hoverSrc : src}
          alt={alt}
          loading="lazy"
          fill={true}
        />
      </a>
    </div>
  );
}
