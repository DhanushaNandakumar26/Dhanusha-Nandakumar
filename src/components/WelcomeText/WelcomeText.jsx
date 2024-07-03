import React, { useEffect } from 'react';
import './WelcomeText.css'

const WelcomeText = () => {
    useEffect(() => {
        const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  });
  
  // Initial animation
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx+1))
});
    })

  return (
    <div className='fixed'>
        <div className='content'>
        <div className="word">
        <span>W</span>
        <span>E</span>
        <span>L</span>
        <span>C</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
        </div>
        <div className='introduction'>
        <span>
            Hey there! I am Dhanusha Nandakumar, a passionate front-end developer with a keen eye for design and a love for crafting immersive digital experiences. Welcome to my corner of the internet where pixels come to life and code tells stories.
            </span>
        </div>
        </div>
    </div>
  )
}

export default WelcomeText