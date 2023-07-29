import { useEffect } from "react";
import "./style.css";
import ScrollReveal from 'scrollreveal';

function Service(){

    useEffect(()=>{
        ScrollReveal({
          reset: true,
          distance: "200px",
          duration: 2000,
          delay: 400
        })
        ScrollReveal().reveal(".imageDiv",{
          delay: 500,
          origin: "bottom"
          
        })
        ScrollReveal().reveal(".service_info",{
          delay: 500,
          origin: "bottom"
        })
      },[])
    return(
        <div className="service">

            <div className="truck">
                <div className="truck_img imageDiv">
                <img src="image/service1.jpg" alt="" className="background" />
                    <div>
                        <h1>Truck shipping</h1>
                    </div>
                </div>

                <div className="service_info">
                    <h2>ROAD TRANSPORTATION</h2>
                    <hr />
                    <h3>Delivery of full load, part load and groupage shipments. We will always find room on our trucks for your cargo.</h3>
                    <p>We always handle your single shipments and your frequent deliveries with equal amount of professionalism and commitment. In our day-to-day operations, we constantly work on making our procedures more efficient and reducing the strain on the environment without compromising quality and service.</p>
                </div>
            </div>

            <div className="ocean">
            <div className="ocean_img imageDiv">
            <img src="image/service2.jpg" alt="" className="background" />
                    <div>
                        <h1>Ocean shipping</h1>
                    </div>
            </div>

            <div className="service_info">
                    <h2>OCEAN FREIGHT </h2>
                    <hr />
                    <h3>When costs are your primary concern and time is not a factor, try our sea freight services.</h3>
                    <p>We always handle your single shipments and your frequent deliveries with equal amount of professionalism and commitment. In our day-to-day operations, we constantly work on making our procedures more efficient and reducing the strain on the environment without compromising quality and service.</p>
                </div>
            </div>

            <div className="railway">
            <div className="railway_img imageDiv">
            <img src="image/service3.jpg" alt="" className="background" />
                    <div>
                        <h1>Railway shipping</h1>
                    </div>
            </div>

            <div className="service_info">
                    <h2>RAILWAY TRANSPORTATION</h2>
                    <hr />
                    <h3>Our company’s rail services provide much more than the average logistics company. Rail is faster, safer.</h3>
                    <p>We always handle your single shipments and your frequent deliveries with equal amount of professionalism and commitment. In our day-to-day operations, we constantly work on making our procedures more efficient and reducing the strain on the environment without compromising quality and service.</p>
                </div>
            </div>
        </div>
    )
}

export default Service;