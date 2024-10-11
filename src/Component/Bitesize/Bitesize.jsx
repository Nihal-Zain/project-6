import React from 'react'
import'./Bitesize.css'
export default function Bitesize() {
  return<>
  <section className='m-5'>
    <div className='container'>
    <div className="title pt-4 d-flex flex-wrap align-items-center">
              <h5>Bitesized by Breadfast</h5><i className="fa-solid fa-arrow-right fa-2xl ps-3"></i>
            </div>
    </div>
  <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
  <div className="col">
    <div className="card rounded-4 shadow-lg  h-100">
      <img src="https://cdn.breadfast.com/wp-content/uploads/2023/05/Blog.png" className="card-img-top rounded-4" alt="..."/>
      <div className="card-body">
        <h5 className="card-title m-3">In Mental Health Awareness Month, Here is What You Need To</h5>
        <a href="https://www.breadfast.com/blog/in-mental-health-awareness-month-here-is-what-you-need-to-know/">Read More</a><i className="fa-solid fa-arrow-right fa-xl ps-3"></i>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card rounded-4 shadow-lg  h-100">
      <img src="https://cdn.breadfast.com/wp-content/uploads/2023/04/A.png" className="card-img-top rounded-4" alt="..."/>
      <div className="card-body">
        <h5 className="card-title m-3">Lighting Lanterns of Goodness</h5>
        <a href="https://www.breadfast.com/blog/lighting-lanterns-of-goodness/" >Read More</a><i className="fa-solid fa-arrow-right fa-xl ps-3"></i>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card rounded-4 shadow-lg  h-100">
      <img src="https://cdn.breadfast.com/wp-content/uploads/2023/02/PL-ITEMS-BLOGPOST-VISUAL.jpg" className="card-img-top rounded-4" alt="..."/>
      <div className="card-body">
        <h5 className="card-title m-3">A Complete Guide to Breadfast’s Private Label Products</h5>
        <a href="https://www.breadfast.com/blog/lighting-lanterns-of-goodness/" >Read More</a><i className="fa-solid fa-arrow-right fa-xl ps-3"></i>
      </div>
    </div>
  </div>
</div>
</section> 
  </>
}
