import React from 'react';

/**
 * ClientSymbol
 * Props:
 * - src: image path (optional)
 * - alt: alt text
 * - className: additional wrapper classes
 *
 * Renders a centered client logo with object-contain and a muted color.
 */
export default function ClientSymbol({ src, alt = 'client', className = '' }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="max-h-[75px] max-w-[152px] object-contain opacity-80" />
      ) : (
        <div className="w-[152px] h-[48px] flex items-center justify-center text-sm text-gray-500">{alt}</div>
      )}
    </div>
  );
}
