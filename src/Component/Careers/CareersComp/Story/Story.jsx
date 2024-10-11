import React from 'react'
import  './Story.css'
export default function Story() {
  return <>
  <section className="pt-5 mt-3 shoping">
    <div className="title text-center">
        <h2>Our <span>Story</span></h2>
    </div>
        <div className="container-fluid pt-2 ps-5  bg-white">
          <div className="row">
            <div className=" col-md-6 pt-2 ps-5">
              <img src="https://cdn.breadfast.com/wp-content/uploads/2022/01/Bread-Basket.png" className="w-100"/>
            </div>
            <div className="storyTxt col-md-6 align-content-center">
                  <p>  Our journey began with one dream; give Egyptian households a holistic shopping experience from bread to everything else. We started our entrepreneurial quest by making fresh, delicious, and on-demand bread accessible all over Cairo.</p>
                  <p>In Arabic, bread is called Aish, which means ‘life’. Bread is the most essential component in every household and yet it is not always available.</p>
                  <p>Today, Breadfast is serving tens of thousands of families in Cairo, Giza, Alexandria, and Mansoura, currently relying on the Breadfast app to provide their grocery essentials. We are domestically and globally expanding our supply chain and logistics services across Egypt and the Middle East, aspiring to become part of every household in the MENA region.</p>
                  </div>
           </div>
            </div>
       </section>
  
  </>
}
