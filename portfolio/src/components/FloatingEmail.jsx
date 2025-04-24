import React from 'react';

export default function FloatingEmail() {
  return (
    <a
      href="mailto:jlau.dev@gmail.com"
      className="fixed right-0 top-1/2 transform -translate-y-1/2 translate-x-14 rotate-90 
      bg-black text-white text-sm font-bold py-1 px-2 rounded shadow-lg 
      hover:bg-white hover:text-black transition"
    >
      jlau.dev@gmail.com
    </a>
  );
}