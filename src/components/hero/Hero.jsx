import "./hero.css"
import Speech from "./Speech"

const Hero = () => {
  return (
    <div className='hero'>

      {/* LEFT SECTION */}
      <div className="hSection left">
        <h1 className="hTitle">
          Hey There,
          <br />
          <span>I'm Ayan!</span>
        </h1>

        <div className="hIntro">
          <h2 className="hSubtitle">Web Developer</h2>

          <p className="hDesc">
            I build responsive and dynamic web applications using modern technologies
            like React, JavaScript and MySQL.
          </p>
        </div>


        {/* TECH STACK (replaces awards) */}
        <div className="awards">
          <h2>Tech Stack</h2>
          <p>Technologies I work with</p>

          <div className="awardList">
            <img src="./html.png" alt="HTML" />
            <img src="./css.png" alt="CSS" />
            <img src="./js.png" alt="JavaScript" />
            <img src="./react1.png" alt="React" />
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <a href="#services" className="scroll">
          <svg width="40" height="70" viewBox="0 0 24 40" fill="none">
            <rect
              x="2" y="2"
              width="20" height="36"
              rx="10"
              stroke="white"
              strokeWidth="2"
            />

            <circle cx="12" cy="10" r="2" fill="white">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 0 12"
                dur="1.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="1; 0"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </a>
      </div>

      {/* RIGHT SECTION */}
      <div className="hSection right">

        {/* SOCIAL LINKS */}
        <div className="follow">
          <a href="https://github.com/" target="_blank">
            <img src="/github.png" alt="GitHub" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://instagram.com/" target="_blank">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <div className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </div>
        </div>

        {/* SPEECH BUBBLE */}
        <Speech />

        {/* PROFILE CARD */}
        <div className="certificate">
          <img src="/certificate.png" alt="" />
          FULL STACK
          <br />
          WEB DEVELOPER
          <br />
          REACT • PHP • MYSQL

          {/* CONTACT BUTTON */}
          <a href="/#contact" className="contactList">
            <div className="contactButton">
              <svg viewBox="0 0 200 200" width="150" height="150">

                <circle cx="100" cy="100" r="90" fill="pink" />

                <path
                  id="innerCirclePath"
                  fill="none"
                  d="M 100, 100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120, 0"
                />

                <text className="circleText">
                  <textPath href="#innerCirclePath">
                    Hire Me •
                  </textPath>
                </text>

                <text className="circleText">
                  <textPath href="#innerCirclePath" startOffset="44%">
                    Contact Me •
                  </textPath>
                </text>



              </svg>
              <div className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="black" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                </svg>
              </div>
            </div>

          </a>
        </div>

      </div>
<div className="bg">
  {/* 3d */}
  <div className="hImg">
    <img src="/hero.png" alt="" />
  </div>
</div>


    </div>
  )
}

export default Hero