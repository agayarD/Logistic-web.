import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import BlackDivItem from '../blackDivItem/BlackDivItem';
import './style.css';

function Homes() {

    useEffect(()=>{
        ScrollReveal({
          reset: true,
          distance: "200px",
          duration: 2000,
          delay: 400
        })
        ScrollReveal().reveal(".main",{
          delay: 500,
          origin: "left"
          
        })
        ScrollReveal().reveal(".left",{
          delay: 500,
          origin: "top"
        })
        ScrollReveal().reveal(".right",{
            delay: 500,
            origin: "bottom"
          })
          ScrollReveal().reveal(".blackDiv_h2",{
            delay: 500,
            origin: "left"
          })
          ScrollReveal().reveal(".blackDiv_body",{
              delay: 500,
              origin: "bottom"
            })
      },[])

    const [info,setinfo]=useState([
        {
           icon_url: <i class="bi bi-truck"></i>,
           header: "Expertise and Experience",
           text: "As a team specialized in the logistics sector, we have years of experience and knowledge. Having the necessary knowledge to understand your business and logistics needs enables us to offer you the best solutions.",
        },
        {
            icon_url: <i class="bi bi-train-front"></i>,
            header: "Customized Solutions",
            text: "Every customer's needs are different and we are aware of that. By providing you with customized logistics solutions, we can fully meet the requirements of your business. We have a wide range of services covering a range of services such as warehousing, distribution, inventory management.",
         },
         {
            icon_url: <i class="bi bi-airplane"></i>,
            header: "Technological Infrastructure",
            text: " The importance of technology in logistics operations is increasing. By using our up-to-date technological infrastructure, we can perform operations such as inventory management, tracking and route optimization more effectively and efficiently. This saves time and cost.",
         },
    ])
  return (
    <section className="home">
        <div className="home_header">
            <img src="image/home_header.jpg" alt="" className='background'/>
        <div className="main">
          <h2>AZERBAIJAN TRADE AND LOGISTICS GROUP LLC</h2>
          <p><span>ATL GROUP . </span>  
We specialize in a variety of logistics services. Our aim is to deliver the top level of logistics based on your requests. We hope that with our services you will receive the most personalized help in transporting any kind of cargos to any distances, even overseas. Discover the amazing world of logistics with Trans!</p>
        </div>
        </div>

        <div className="info_one">
            <div className="info_one_left left">
                <div className="head">
                    <p>WHY CHOOSE US</p>
                    <h2>Our Special Features</h2>
                </div>
                <div className="body">
                    <div className='body_icon'>
                        <img src="https://template59467.motopreview.com/mt-demo/59400/59467/mt-content/uploads/2017/04/mt-0933-home-icons01.png" alt="" />
                    </div>
                    <div className='body_text'>
                        <h3>100% SATISFIED CUSTOMERS</h3>
                        <p>Our customers are the luckiest people in the entire world, getting their mail safe and in time.</p>
                    </div>
                </div>

                <div className="body">
                    <div className='body_icon'>
                        <img src="https://template59467.motopreview.com/mt-demo/59400/59467/mt-content/uploads/2017/04/mt-0933-home-icons02.png" alt="" />
                    </div>
                    <div className='body_text'>
                        <h3>QUALITY SERVICE AFFORDABLE PRICE</h3>
                        <p>We offer the easiest and cheapest way of transportation services all over the world.</p>
                    </div>
                </div>

                <div className="body">
                    <div className='body_icon'>
                        <img src="https://template59467.motopreview.com/mt-demo/59400/59467/mt-content/uploads/2017/04/mt-0933-home-icons03.png" alt="" />
                    </div>
                    <div className='body_text'>
                        <h3>WORLDWIDE LOCATIONS</h3>
                        <p>We have offices in more than 50 countries worldwide.</p>
                    </div>
                </div>
            </div>
            <div className="info_one_right right">
                <img src="image/home1.png" alt="araba"/>
            </div>
        </div>

        <div className="info_two">
            <div className="info_left left">
            <img src="img/fhl.png" alt=""/>
            </div>
            <div className="info_right right">
                <h2>Trucking andFreight Transport</h2>
                <p>The world is changing all around us. To continue to thrive as a business over the next ten years and beyond, we must look ahead, understand the trends and forces that will shape our business in the future and move swiftly to prepare for what's to come. We must get ready for tomorrow today. That's what our future vision is all about. It creates a long-term destination for our business and provides us with a "Roadmap" for winning together with our partners.</p>
                <h3>OUR MISSION IS TO OFFER HIGH-QUALITY SERVICES TO OUR CUSTOMERS</h3>
                <p>Trans has set benchmarks in safety, security, performance, efficiency, punctuality, respectability, professionalism and reliability in the sector. The fully trained personnel with many years of background in the sector, bring a wealth of experience to the company and is one of its major assets.</p>
            </div>
        </div>

        <div className="blackDiv">
            <div className="blackDiv_container">
                <h2 className='blackDiv_h2'>Why Choose Us</h2>
                <hr />
                <div className="blackDiv_body">
                    {info.map((obj)=>(
                        <BlackDivItem icon={obj.icon_url} header={obj.header} text={obj.text}/>
                    ))}
                    
                </div>
                <hr />
            </div>
        </div>

        <div className="gps">
            <div className="gps_left left">
                <h2><span>GPS tracking</span> <br /> benefits & savings</h2>
                <p>Our Company is the recognized leader in the GPS fleet management industry and our GPS Fleet Tracking solution sets the standard for excellence and performance. We are committed to providing fleet operators everywhere with the highest quality, most cost-effective solutions.</p>
            </div>
            <div className="gps_right right">
                <img src="image/gps.png" alt="" />
            </div>
        </div>
    </section>
  );
}

export default Homes;

