import React, { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import "./homePage.css";

export default function HomePage({ headings = [] }) {
  const vantaRef = useRef(null);
  const [currentHeading, setCurrentHeading] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); // Key to re-trigger animation

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 300.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xccccff,
      backgroundColor: 0x0,
      points: 15.0,
      maxDistance: 22.0,
      spacing: 15.0,
    });

    // Cleanup Vanta.js effect on component unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading((prev) => (prev + 1) % headings.length);
      setAnimationKey((prev) => prev + 1); // Update key to retrigger animation
    }, 3000); // Change heading every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [headings.length]);

  useEffect(() => {
    if (headings.length === 0) return;

    const interval = setInterval(() => {
      setCurrentHeading((prev) => (prev + 1) % headings.length);
      setAnimationKey((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [headings.length]);

  return (
    <div ref={vantaRef} className='w-full h-[50%]' style={{ width: '100%', height: '40vh', alignItems:"center" }}>
      <div style={{ color: 'white', textAlign: 'center', paddingTop: '7%' }}>
        <h1
          key={animationKey} // Use key to reapply animation
          className="zoom-in text-center font-bold text-3xl p-4 md:font-extrabold md:text-5xl md:pl-14 md:pr-14 md:p-10"
          // style={{ fontSize: "45px", fontWeight: "bolder", padding: "0rem 10rem" }}
        >
          {headings[currentHeading]}
        </h1>
      </div>
    </div>
  );
}
