import React, { useEffect, useRef, useState } from 'react';
import { useCounter } from '../hooks/useCounter';

export const AnimatedCounter = ({ number, text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);
  const count = useCounter(isVisible ? number : 0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={counterRef}
      className="bg-[#212D45] rounded-lg h-[55px] p-6 transition-transform duration-400 hover:scale-105 md:h-[135px] md:p-4 lg:h-[100px] sm:h-[50px] sm:p-3 flex-shrink-0 w-[240px] flex justify-center items-center"
    >
      <h5 className="font-semibold text-[36px] leading-[40px] text-white mb-2 md:text-[28px] md:leading-[32px] sm:text-[24px] sm:leading-[26px]">
        +{count}
      </h5>
      <p className="font-normal text-[18px] leading-[24px] text-white/75 md:text-[16px] md:leading-[20px] sm:text-[10px] sm:leading-[14px] ml-2">
        {text}
      </p>
    </div>
  );
};