import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';
import "./style.css";

function Footer(){

    useEffect(()=>{
        ScrollReveal({
          reset: true,
          distance: "200px",
          duration: 2000,
          delay: 400
        })
        ScrollReveal().reveal(".footer_container",{
          delay: 500,
          origin: "bottom"
        })
      },[])
    return(
        <section className="footer">
            <div className="footer_container">
                <div className="footer_container_top">
                    <div className="about">
                        <p>About</p>
                        <p>Whatever the final destination of your freight is and regardless of the weight and size of it, we will deliver it right on schedule! Be sure that our transportation and logistics services are at the lowest prices as opposed to other providers!</p>
                    </div>
                    <div className="services">
                        <p>Services</p>
                        <p>Ocean shipping</p>
                        <p>Truck shipping</p>
                        <p>Railway shipping</p>
                    </div>
                    <div className="contacts">
                        <p>Contacts</p>
                        <p>22 St. Black Road Raleigh, PA 34578</p>
                        <p>Roadway@demolink.org</p>
                        <p>Monday through Sunday, 24/7.</p>
                    </div>
                </div>
                <div className="footer_container_bottom">
                    <div className="footer_logo">
                        <h2>AZERBAIJAN TRADE AND LOGISTICS GROUP LLC</h2>
                    </div>
                    <div className="footer_media">
                        <ul>
                            <li>
                                <a href="#">
                                    <span><i class="bi bi-instagram"></i></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span><i class="bi bi-facebook"></i></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span><i class="bi bi-twitter"></i></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span><i class="bi bi-linkedin"></i></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;