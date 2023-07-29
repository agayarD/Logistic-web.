import { useEffect } from "react";
import "./style.css";
import ScrollReveal from 'scrollreveal';
import {withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import loadjs from 'loadjs';


function Contact(){

    useEffect(()=>{
        ScrollReveal({
          reset: true,
          distance: "200px",
          duration: 2000,
          delay: 400
        })
        ScrollReveal().reveal(".contact_top",{
          delay: 500,
          origin: "left"
          
        })
        ScrollReveal().reveal(".form",{
          delay: 500,
          origin: "bottom"
        })
        ScrollReveal().reveal(".right_side",{
            delay: 500,
            origin: "top"
          })
          loadjs('https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY', {
      returnPromise: true,
    }).then(() => {
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48581.93720495895!2d49.75660025!3d40.44492325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2saz!4v1687685579690!5m2!1str!2saz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    });
      },[])

      const MapComponent = withGoogleMap(() => (
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: 40.712776, lng: -74.005974 }}
        >
          <Marker position={{ lat: 40.712776, lng: -74.005974 }} />
        </GoogleMap>
      ));
    
    return(
        <section className="contact">
            <div className="contact_top">
            <img src="image/contact.jpg" alt="" className="background" />
                <div>
                    <h1>Contact us</h1>
                </div>
            </div>

            <div className="contact_container">
                <div className="left_side">
                <form class="form">
    
    <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>first name</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>last name</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" class="input"/>
        <span>email</span>
    </label> 
        
    <label>
        <input required="" type="tel" placeholder="" class="input"/>
        <span>contact number</span>
    </label>
    <label>
        <textarea required="" rows="3" placeholder="" class="input01"></textarea>
        <span>message</span>
    </label>
    
    <button class="fancy" href="#">
      <span class="top-key"></span>
      <span class="text">submit</span>
      <span class="bottom-key-1"></span>
      <span class="bottom-key-2"></span>
    </button>
</form>
                </div>
                <div className="right_side">
                    <div>
                        <p>Address:</p>
                        <p><span><i class="bi bi-house-check-fill"></i></span> 138 Atlantis Ln Kingsport Illinois 121164</p>
                    </div>
                    <div>
                        <p>Phones:</p>
                        <p>
                            <span><i class="bi bi-telephone-fill"></i></span>
                              <a href="#">123-456-7890</a>
                              </p>
                        <p>
                            <span><i class="bi bi-headset"></i></span>
                              <a href="#">123-456-7890</a>
                              </p>
                    </div>
                    <div>
                        <p>E-mail:</p>
                        <p>
                            <span><i class="bi bi-envelope-at-fill"></i></span>
                            <a href="#"> mail@demolink.org</a>
                             </p>
                    </div>
                </div>
            </div>

            <div>
      <MapComponent
        containerElement={<div style={{ height: '500px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
        </section>
    )
}

export default Contact;