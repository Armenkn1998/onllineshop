import React, { useState } from "react";
import "./Product.css";
export default function Product() {
  const [openDetails, setOpenDetails] = useState(false);
  const [openSize, setOpenSize] = useState(false);
  const [openShipping, setOpenShipping] = useState(false);
  return (
    <div className="productSection">
<div className="product-card">
      <div className="product-text">
        <h2 className="short">
          <span>Home — Apparel — </span>Short Sleeve Round Neck Petal Split Back
          Detail Crop Tee
        </h2>
      </div>
      <div className="back">
        <h2>BACK</h2>
      </div>
      <div className="img-text">
        <div className="img-box">
          <div className="img1">
            <img src="images/img1.png" alt="" />
          </div>
          <div className="img4">
            <img src="images/img2.png" alt="" />
            <img src="images/img3.png" alt="" />
            <img src="images/img4.png" alt="" />
            <img src="images/img5.png" alt="" />
          </div>
        </div>
        <div className="text-box">
          <div className="square">
            <h2>Square Neck Adjustable Shoulder Straps Dress</h2>
            <p>$32</p>
          </div>
          <div className="color-box">
            <h2>COLOR:</h2>
            <div className="khaki-img">
              <img src="images/kubbej.png" alt="" />
              <div className="khaki">
                <h2>Khaki</h2>
                <img src="images/Vector 3.png" alt="" />
              </div>
            </div>
          </div>
          <div className="size-box">
            <h2>SIZE:</h2>
            <div className="guide">
              <div className="size-img">
                <img src="images/S.png" alt="" />
                <img src="images/M.png" alt="" />
                <img src="images/L.png" alt="" />
              </div>
              <h3>size guide</h3>
            </div>
          </div>
          <div className="btn">
            <button>add to bag</button>
          </div>

          <div className="det">
            <div className="accordion-header">
              <h2>details</h2>
              <span
                className="plus-icon"
                onClick={() => setOpenDetails(!openDetails)}
              >
                {openDetails ? "−" : "+"}
              </span>
            </div>

            {openDetails && (
              <div className="detailsContent">
                <p>
                  Imported. Solid, short sleeve, round neckline, petal split
                  back detail, slight crop, relaxed fit, unlined, stretchy,
                  non-sheer, basic, casual, comfy, breathable, eco, 100% cotton,
                  sportswear, activewear, yoga & gym look, minimalistic design,
                  spring/summer collection 100% Cotton. TSH
                </p>
              </div>
            )}
          </div>
          <div className="fit">
            <div className="accordion-header">
              <h2>Size & fit</h2>
              <span
                className="plus-icon"
                onClick={() => setOpenSize(!openSize)}
              >
                {openSize ? "−" : "+"}
              </span>
            </div>

            {openSize && (
              <div className="detailsContent2">
                <img src="images/bl.png" alt="" />
                <p>
                  Item Measurements: SIZE S Item Measurements: Length: 28",
                  Bust: 32" True to size
                </p>
              </div>
            )}
          </div>
          <div className="ret">
            <div className="accordion-header">
              <h2>Shipping & returns</h2>
              <span
                className="plus-icon"
                onClick={() => setOpenShipping(!openShipping)}
              >
                {openShipping ? "−" : "+"}
              </span>
            </div>

            {openShipping && (
              <div className="detailsContent">
                <p>Shipping info</p>
                <p>Order delivery time:</p>
                <p>
                  All orders are shipped priority/first class & delivered 5-7
                  business days from the day you place the order.
                </p>
                <p>
                  Shipping fee: Up to $10 = $3.75 $10.01 - $30.00 = $4.75 $30.01
                  - $75.00 = $5.75 $75.01 & over = free shipping
                </p>
                <p>
                  We will email you tracking info as soon as the order is
                  shipped.
                </p>
                <p>Returns info</p>
                <p>
                  We will accept all authorized returns All returns are accepted
                  as long as the request is made to return the item within 30
                  days of receiving the merchandise. Once approved we will
                  generate the FREE UPS prepaid label, we will email you with
                  the label attached. Just print the label, attach it to any
                  box/package and return the items. You will have 30 days to
                  send the item back for full refund once you receive the free
                  return label. Once we receive the items back we will process
                  the return and refund the balance back to your account. Please
                  note free return labels are available for items being shipped
                  within 48 continental states only. Please contact us here
                  ovroefashion@gmail.com to receive an RMA# for your return.
                  Please include your Order#, items returning, and the reason
                  for the return.
                </p>
              </div>
            )}
          </div>

          <div className="shar">
            <h2>share</h2>
          </div>
        </div>
      </div>
      <div className="rec-box">
        <h2>Recently viewed</h2>
        <div className="img2">
          <div className="bejimg">
            <img className="bejimg1" src="images/bej.png" alt="" />
            <h2>A V-neckline Drawstring Ruched Top</h2>
            <p>$31</p>
            <div className="color-box4">
              <img src="images/red.png" alt="" />
              <img src="images/black.png" alt="" />
              <img src="images/yellow.png" alt="" />
              <img src="images/white.png" alt="" />
            </div>
          </div>
          <div className="grenimg">
            <img className="grenimg1" src="images/green.png" alt="" />
            <h2>A V-neckline Drawstring Ruched Top</h2>
            <p>$31</p>
            <div className="color-box4">
              <img src="images/red.png" alt="" />
              <img src="images/black.png" alt="" />
              <img src="images/yellow.png" alt="" />
              <img src="images/white.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="prev-next">
          <h2>You may also like</h2>
          <div className="p-box">
            <p>prev</p>
            <p>next</p>
          </div>
        </div>
        <div className="four-img">
          <div className="onee">
            <img className="one" src="images/one.png" alt="" />
            <h2>A V-neckline Drawstring Ruched Top</h2>
            <p>$31</p>
            <div className="color-box4">
              <img src="images/red.png" alt="" />
              <img src="images/black.png" alt="" />
              <img src="images/yellow.png" alt="" />
              <img src="images/white.png" alt="" />
            </div>
          </div>

          <div className="twoo">
            <img className="two" src="images/two.png" alt="" />
            <h2>A V-neckline Drawstring Ruched Top</h2>
            <p>$31</p>
            <div className="color-box4">
              <img src="images/red.png" alt="" />
              <img src="images/black.png" alt="" />
              <img src="images/yellow.png" alt="" />
              <img src="images/white.png" alt="" />
            </div>
          </div>

          <div className="theree">
            <img className="there" src="images/there.png" alt="" />
            <h2>A V-neckline Drawstring Ruched Top</h2>
            <p>$31</p>
            <div className="color-box4">
              <img src="images/red.png" alt="" />
              <img src="images/black.png" alt="" />
              <img src="images/yellow.png" alt="" />
              <img src="images/white.png" alt="" />
            </div>
          </div>

          <div className="forr">
            <img className="for" src="images/for.png" alt="" />
            <h2>A V-neckline Drawstring Ruched Top</h2>
            <p>$31</p>
            <div className="color-box4">
              <img src="images/red.png" alt="" />
              <img src="images/black.png" alt="" />
              <img src="images/yellow.png" alt="" />
              <img src="images/white.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}
