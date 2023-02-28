import React, { useState, useEffect } from 'react';
import './header.css';

const words = ['Design.', 'Developer.'];

function Header() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  // typeWriter
useEffect(() => {
  if (subIndex === words[index].length) {
    setTimeout(() => {
      setReverse(true);
    }, 1000);
  }

  if (subIndex === 0 && reverse) {
    setReverse(false);
    setIndex((prev) => (prev + 1) % words.length);
  }

  const timeout = setTimeout(() => {
    setSubIndex((prev) =>
      prev + (reverse ? -1 : 1)
    );
  }, Math.max(reverse ? 75 : 150, parseInt(Math.random() * 350)));

  return () => clearTimeout(timeout);
}, [subIndex, index, reverse]);


  return (  
    <header className="">
      <div className="ml-[5.8rem] sm:ml-[20rem] md:max-lg:ml-[8rem]">
        <h1 className="text-[4rem] font-extrabold  sm:text-[8rem] sm:text-start md:max-lg:text-[10rem] font-serif">
          Web{' '}
          <span className="text-[3rem] blinking-cursor sm:text-[8rem]  block sm:inline md:max-lg:text-[7rem] font-sans">
            {`${words[index].substring(0, subIndex)}`}
          </span>
        </h1>
    </div>
      
    </header>
  );
}

export default Header;
