import React from 'react'
import './Home.css'
import img1 from '../../../img/img1.png';
import img2 from '../../../img/img2.png';
import img3 from '../../../img/img3.png';
import img4 from '../../../img/img4.png';

export default function Home() {
   return (
      <div >
         <section className='clothesBox'>
            <div className='clothesItem'>
               <div className='clothesImg'>
                  <img src={img1} alt="" />
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
                     <img src={img2} alt="" />
                     <p>Cute Multi Color Polak Dot Sweater</p>
                     <span>$54</span>
                  </div>
                  <div className='imgTwo'>
                     <img src={img3} alt="" />
                     <p>Square Neck Adjustable Shoulder Straps Dress</p>
                     <span>$31</span>
                  </div>
                  <div className='imgThree'>
                     <img src={img4} alt="" />
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
         <section className='clothesThree'>
            <div className='shopBox'>
               <div className='shop'>
                  <div className='explore'>
                     <h2>Explore the categories</h2>
                  </div>
                  <p>prev</p>
                  <span>next</span>
               </div>
               <div className='shopNow'>
                  <div className='coats'>
                     <img src="img/image1.png" alt="" />
                     <p>Coats & Jackets</p>
                     <u>shop now</u>
                  </div>
                  <div className='sweatshirts'>
                     <img src="img/image2.png" alt="" />
                     <p>Sweatshirts & T-shirts</p>
                     <u>shop now</u>
                  </div>
                  <div className='bestsellers'>
                     <div className='bestsellersBox'>
                        <h2>Bestsellers</h2>
                     </div>
                     <p>Bestsellers</p>
                     <u>shop now</u>
                  </div>
                  <div className='shirts'>
                     <img src="img/image3.png" alt="" />
                     <p>Shirts & Tops</p>
                     <u>shop now</u>
                  </div>
               </div>
            </div>
         </section>
         <section className='firsttimeBox'>
            <div className='firsttimeItem'>
               <div className='firsttimeImg'>
                  <img src="img/image4.png" alt="" />
               </div>
               <div className='firsttimeText'>
                  <h2>Code for 10% off your first full-price order</h2>
                  <p>FIRSTTIME</p>
                  <button>Subscribe</button>
               </div>
            </div>
         </section>
         <section className='instagramBox'>
            <div className='instagramItem'>
               <div className='instagramImg'>
                  <img src="img/image5.png" alt="" />
                  <div>
                     <h2>Instagram</h2>
                  </div>
                  <u>FOLLOW US</u>
               </div>
               <div>
                  <img src="img/image6.png" alt="" />
               </div>
            </div>
         </section>
      </div>
   )
}
