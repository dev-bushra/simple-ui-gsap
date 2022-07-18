import { useRef, useEffect } from 'react';
import './App.scss';
import { TweenMax, TimelineLite, Power3 }  from 'gsap';

import boy from './images/boy.webp'
import girl from './images/girl.webp'

function App() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: .8});

  useEffect(() => {
    // IMAGES VARS 
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    // CONTENT VARS
    const headLineFirst = content.children[0].children[0];
    const headLineSecond = headLineFirst.nextSibling;
    const headLineThird = headLineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    // Remove initial flash
    TweenMax.to(app, 0, {css: {visibility: "visible"}});

    // IMAGES ANIMATION
    tl.from(girlImage, 1.2, {y: 1280, ease: Power3.easeOut}, 'Start')
    .from(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    .from(boyImage, 1.4, {y: 1280, ease: Power3.easeOut}, .2)
    .from(boyImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    
    // CONTENT ANIMATION
      tl.staggerFrom([headLineFirst.children, headLineSecond.children, headLineThird.children ], 1, {
        y: 44,
        ease:Power3.easeOut,
        delay: .8
      }, .15, 'Start')
      .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
      .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)
    
    // CHECKING ELEMENTS DIVS
    console.log(app);
    console.log(boyImage, boyImage);
    console.log(headLineFirst, headLineSecond, headLineThird, contentP, contentButton);

  }, [tl]);

  return (
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">

          {/* Our Lef side content */}
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Lorizzle ipsizzle elit</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">crazy velit aliquet</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">shizzlin dizzle</div>
                </div>
              </h1>
              <p>
              Lorizzle ipsizzle dolor get down get down owned, 
              consectetuer adipiscing elit. 
              crazy velit, aliquet volutpizzle, 
              vizzle, arcu.
              </p>
              <div className="btn-row">
                <button className="explore-button">
                  explore
                  <div className="arrow-icon">
                    {/* <img src={arrow} /> */}
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Our right side images */}
          <div className="hero-images">
            <div className="hero-images-inner" ref={el => images = el}>
              <div className="hero-image girl">
                <img src={girl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={boy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
