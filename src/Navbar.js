import React, { useEffect } from 'react';
import TopBar from './TopBar'

const NavBar = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      for (let i = 1; i <= 4; i++) {
        const element = document.querySelector(`#len${i}`);
        if (element) {
          element.classList.toggle('bounce');
        }
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);


}

export default NavBar;
