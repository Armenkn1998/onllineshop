import React from 'react'
import './Home.css'
import img from "./img/img1.png";
import img from "./img/img2.png";
import img from "./img/img1.png";
import img from "./img/img2.png";

export default function Home() {
   return (
      <div >
         <section className='clothesBox'>
            <div className='clothesItem'>
               <div className='clothesImg'>
                  <img src="img/img1.png" alt="" />
               </div>
               <div className='clothesText'>
                  <h2>NEW collections</h2>
                  <p>Check out our high-quality and affordable fashion!</p>
                  <button>Shop now</button>
               </div>
            </div>
         </section>
         <section className='clothesOne'>
            <div className='clothes-item'>
               <div className='clothes-text'>
                  <div className='textOne'>
                     <p>New arrivals</p>
                     <u>shop new arrivals</u>
                  </div>
                  <div className='textTwo'>
                     <span>prev</span>
                     <p>next</p>
                  </div>
               </div>
               <div className='clothes-img'>
                  <div className='imgOne'>
                     <img src="img/img2.png" alt="" />
                     <p>Cute Multi Color Polak Dot Sweater</p>
                     <span>$54</span>
                  </div>
                  <div className='imgTwo'>
                     <img src="img/img3.png" alt="" />
                     <p>Square Neck Adjustable Shoulder Straps Dress</p>
                     <span>$31</span>
                  </div>
                  <div className='imgThree'>
                     <img src="img/img4.png" alt="" />
                     <p>A V-neckline Drawstring Ruched Top</p>
                     <span>$31</span>
                  </div>
               </div>
            </div>
         </section>
         <section className='clothesTwo'>
            <div className='shopText'>
               <div className='ShopTextOne'>
                   <h2>For plus size</h2>
                   <p>Discover stylish images for every day</p>
                   <button>Shop now</button>
               </div>
               <div className='imgAndText'>
                  <div className='shopImgOne'>
                     <img src="img/img5.png" alt="" />
                     <p>Long Sleeves Solid Top</p>
                     <span>$35</span>
                  </div>
                  <div className='shopImgTwo'>
                     <img src="img/img6.png" alt="" />
                     <p>Night Sky Shimmer Sleeveless Layered Dress</p>
                     <span>$37</span>
                  </div>
               </div>
            </div>
         </section>
         <section>
            <div>
               <div>
                  <h2></h2>
               </div>
            </div>
         </section>
      </div>
   )
}
