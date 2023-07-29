import { useEffect } from "react";
import "./style.css";
import ScrollReveal from 'scrollreveal';
import React, { useState } from 'react';
function About(){

    useEffect(()=>{
        ScrollReveal({
          reset: true,
          distance: "200px",
          duration: 2000,
          delay: 400
        })
        ScrollReveal().reveal(".right",{
          delay: 500,
          origin: "bottom"
          
        })
        ScrollReveal().reveal(".left",{
          delay: 500,
          origin: "bottom"
        })
        ScrollReveal().reveal(".information_left",{
            delay: 500,
            origin: "top"
          })
          ScrollReveal().reveal(".information_right",{
            delay: 500,
            origin: "bottom"
          })
      },[])
    
      const [activeButton, setActiveButton] = useState('all');

      const handleButtonClick = (name) => {
        setActiveButton(name);
      };
    
    //---   logo----

    const logos = [
        'image/plogo.png',
        'image/plogo2.jpg',
        'image/plogo3.png',
        'image/plogo2.jpg',
        'image/plogo.png',
        'image/plogo2.jpg',
        'image/plogo3.png',
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const visibleLogosCount = 4;
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
        }, 3000);
    
        return () => clearInterval(interval);
      }, [logos.length]);
    
      const handleClick = (direction) => {
        if (direction === 'left') {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length);
        } else if (direction === 'right') {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
        }
      };
    return(
        <section className="aboutUs">
            <div className="about_service">                
                    <img src="image/about1.jpg" alt="" className="background" />                
            <div className="aboutUs_container">
                <div className="right">
                    <p>
                    <span>
                        <span></span>
                    </span>
                        <span>ABOUT OUR COMPANY</span>
                    </p>
                    <h2> Best Service</h2>
                    <p>Our mission is to attract and retain customers by providing Best in Class transportation solutions and fostering a profitable, disciplined culture of safety, service, and trust.</p>
                </div>
            </div>
            </div>

            <div className="about_service">
                 <img src="image/about2.jpg" alt="" className="background" />
           
            <div className="aboutUs_container">
                <div className="left">
                    <p>
                    <span>
                        <span></span>
                    </span>
                        <span>ABOUT OUR COMPANY</span>
                    </p>
                    <h2>Reputation </h2>
                    <p>We have established a strong presence in the transportation industry. Our award-winning services earn a reputation for quality and excellence that few can rival.</p>
                </div>
            </div>
            </div>

            <div className="about_service">
            <img src="image/about3.jpg" alt="" className="background" />
            <div className="aboutUs_container">
                <div className="right">
                    <p>
                    <span>
                        <span></span>
                    </span>
                        <span>ABOUT OUR COMPANY</span>
                    </p>
                    <h2>Safety & Security</h2>
                    <p>Safety for our employees, customers and motoring public will always remain our primary focus in all the policies, procedures and programs that govern our business.</p>
                </div>
            </div>
            </div>

            <div className="information">
                <div className="information_container">
                    <div className="information_left">
                        <h2>We’re Ready To Bring The Most Complex Projects To Life!</h2>
                        <p>ATL GROUP</p>
                        <div>
                        <p>ATL GROUP cargo shipping company is your one-stop shop for international shipping and logistics needs.
At competitive rates, our friendly staff will provide you with reliable, transparent, and personalized service, covering every detail of shipping your goods around the world.</p>
                        </div>
                    </div>
                    <div className="information_right">
                        <h2>Custom Support & Sale</h2>
                        <p>
                            <span><i class="bi bi-telephone-fill"></i></span>
                            <a href="#">1-234-5678910</a> 
                        </p>
                        <p>4096 N Highland St Arlington, VA 32101</p>
                        <p>Monday to Friday 9:00 am – 6:00 pm; Saturday 9:00 am – 4:00 pm</p>
                    </div>
                </div>
            </div>

            <div className="qalery_container">
  <h1>Gallery</h1>
  <div className="menu">
    <button className={`btn ${activeButton === 'all' ? 'active' : ''}`} onClick={() => handleButtonClick('all')}>all</button>
    <button className={`btn ${activeButton === '120' ? 'active' : ''}`} onClick={() => handleButtonClick('120')}>120</button>
    <button className={`btn ${activeButton === '200' ? 'active' : ''}`} onClick={() => handleButtonClick('200')}>200</button>
    <button className={`btn ${activeButton === '240' ? 'active' : ''}`} onClick={() => handleButtonClick('240')}>240</button>
  </div>

  <div className="items">
    {activeButton === '120' || activeButton === 'all' ? (
      <div className="item men">
        <img src="image/men1.jpg" alt="" />
        <img src="image/men2.jpg" alt="" />
        <img src="image/children2.jpg" alt="" />
        <img src="image/children3.jpg" alt="" />
        <img src="image/children4.jpg" alt="" />
        <img src="image/children.jpg" alt="" />
        <img src="image/children2.jpg" alt="" />
        <img src="image/children3.jpg" alt="" />
      </div>
    ) : null}

    {activeButton === '240' || activeButton === 'all' ? (
      <div className="item children">
        <img src="image/children.jpg" alt="" />
        <img src="image/children2.jpg" alt="" />
        <img src="image/children3.jpg" alt="" />
        <img src="image/children4.jpg" alt="" />
        <img src="image/children.jpg" alt="" />
        <img src="image/children2.jpg" alt="" />
        <img src="image/children3.jpg" alt="" />
        <img src="image/children4.jpg" alt="" />
      </div>
    ) : null}

    {activeButton === '200' || activeButton === 'all' ? (
      <div className="item women">
        <img src="image/women.jpg" alt="" />
        <img src="image/children2.jpg" alt="" />
        <img src="image/children3.jpg" alt="" />
        <img src="image/children4.jpg" alt="" />
        <img src="image/children.jpg" alt="" />
        <img src="image/children2.jpg" alt="" />
        <img src="image/children3.jpg" alt="" />
      </div>
    ) : null}
  </div>
</div>

<div className="partner-logos">
    <h1>Partner networks</h1>
    
      <div className="partner-logos-container">
      <button onClick={() => handleClick('left')}>
        <i className="bi bi-chevron-compact-left"></i>
      </button>
        {logos.slice(currentIndex, currentIndex + visibleLogosCount).map((logo, index) => (
          <div className="logo-wrapper" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
<button onClick={() => handleClick('right')}>
        <i className="bi bi-chevron-compact-right"></i>
      </button>
      </div>
      
    </div>

        </section>
    )
}

export default About;