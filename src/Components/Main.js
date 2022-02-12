import React, { useState } from 'react';


function Main() {
    // State.
    const [ index, setIndex ] = useState(0);
    const dataObj = { rooms : [
      {
        title: "Discover innovative ways to decorate",
        desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        imgMobile: "./images/mobile-image-hero-1.jpg",
        imgDesktop: "./images/desktop-image-hero-1.jpg",
      },
      {
        title: "We are available all across the globe",
        desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        imgMobile: "./images/mobile-image-hero-2.jpg",
        imgDesktop: "./images/desktop-image-hero-2.jpg",
      },
      {
        title: "Manufactured with the best materials",
        desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        imgMobile: "./images/mobile-image-hero-3.jpg",
        imgDesktop: "./images/desktop-image-hero-3.jpg",
      },
    ]};
  
  
    // Change info on arrow click.
    const handleDataChange = (type) => {
      switch (type) {
        case "plus":
          if (index === 2) {
            setIndex(0);
          } else {
            setIndex(index + 1);
          }
          break;
        case "minus":
          if (index === 0) {
            setIndex(2);
          } else {
            setIndex(index - 1);
          }
          break;
      }
    }


    return (
        <div className="main-wrapper">
            <div className="image-container">
                {/* ================== Image ================== */}
                <picture>
                    <source media="(min-width: 540px)" srcSet={dataObj.rooms[index].imgDesktop} />
                    <img src={dataObj.rooms[index].imgMobile} alt="Furniture Image" />
                </picture>
                {/* ================== Buttons ================== */}
                <div className="buttons-container">
                    <button onClick={() => handleDataChange("minus")}><img src="./images/icon-angle-left.svg" alt="Left Arrow" /></button>
                    <button onClick={() => handleDataChange("plus")}><img src="./images/icon-angle-right.svg" alt="Right Arrow" /></button>
                </div>
            </div>
            {/* ================== Text ================== */}
            <div className="text-container">
                <h1>{dataObj.rooms[index].title}</h1>
                <p>{dataObj.rooms[index].desc}</p>
                <a href="#">Shop now <img src="./images/icon-arrow.svg" alt="Arrow" /></a>
            </div>
        </div>
    )
}

export default Main;