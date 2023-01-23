import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import profPic from '../images/profile.png';

export default function HomePage() {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  const sectionsRef = useRef(null);

  useEffect(() => {
  // For first section only
    setAnimate(true);
  // The other sections
    const observer = new IntersectionObserver((entries) => {
      console.log("entries", entries)
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false);
        }
      });
    });
    observer.observe(sectionsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className='light-bg'>

      <section ref={sectionsRef} className={`center-section custom-fade-in ${animate ? 'animate' : ''}`}>
        <h1>Welcome to Passion</h1>
        <p>Passion is a small passion project made by KangaWorks</p>
      </section>
       {/* Not working that well on this section */}
      <section ref={sectionsRef} className={`center-section custom-hidden ${show ? 'custom-show' : ''}`}>
        <h1>Welcome to Passion</h1>
        <p>Passion is a small passion project made by KangaWorks</p>
      </section>

      <section ref={sectionsRef} className={`center-section custom-hidden ${show ? 'custom-show' : ''}`}>
        <h1>Welcome to Passion</h1>
        <p>Passion is a small passion project made by KangaWorks</p>
      </section>

      <section ref={sectionsRef} className={`center-section custom-hidden ${show ? 'custom-show' : ''}`}>
        <h1>Welcome to Passion</h1>
        <p>Passion is a small passion project made by KangaWorks</p>
      </section>

    </div>
  );
}
