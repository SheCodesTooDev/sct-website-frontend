'use client';
import { useEffect, useState } from 'react';

function ScrollToTop() {
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <button
        className={`fixed scrollToTopButton ${
          isVisible ? 'visible' : ''
        } bottom-0 right-0 bg-sctyellow rounded-s-full px-4 py-2 mr-6 mb-[71px] z-50 items-center text-xs flex gap-2`}
        onClick={scrollToTop}
      >
        &#8679; BACK TO TOP
      </button>
    </>
  );
}

export default ScrollToTop;
