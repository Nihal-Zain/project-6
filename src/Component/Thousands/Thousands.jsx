import React from 'react'
import './Thousands.css'
export default function Thousands() {
  return <>
  
  <section  className="mt-4">
        <div className="container">
          <div className="row">
            <div className="protxt col-md-6  p-5 align-content-center">
              <h2>Thousands of Products</h2>
              <p>From eggs, bakeries, dairy products, fruits and vegetables, frozen meats, pantry staples, laundry detergents, baby products, all the way to pet supplies, grooming and personal care kits, shop all your daily essentials from one seamless app.</p>
              <a href="https://apps.apple.com/us/app/breadfast-groceries-and-more/id1288436997">
              <button type="button" className="btn  btn-lg ps-5 pe-5 mt-2">Explore Breadfast now!</button>
              </a>
            </div>
            <div className="col-md-6 p-3 d-flex flex-wrap">
              <div className="pocketImg +p-3">
                <img src="https://cdn.breadfast.com/wp-content/uploads/2021/12/img_da_web.png" className="w-100"/>
              </div>
            </div>
            </div>
          </div>
 </section>
  </>
}
