import React from 'react'
import './Pocket.css'
export default function Pocket() {
  return <>
  <section className="cardPocket mt-4">
    <div className="container p-5">
    <div className="title d-flex flex-wrap align-items-center">
              <h5>Careers</h5><i className="fa-solid fa-arrow-right fa-2xl ps-3"></i>
            </div>
  <div className="card  container  rounded-start-5">
  <div className="row p-4 shadow-lg">
    <div className="col-md-3">
      <img src="https://cdn.breadfast.com/wp-content/uploads/2021/12/img_join_team.png" className="img-fluid rounded-start-5 w-100" alt="..."/>
    </div>
    <div className="col-md-3">
      <div className="card-body">
        <h4 className="card-title">Your next career move is Now</h4>
        <p className="card-text">From tech, marketing, to supply chain, join a versatile, creative, and fast-growing team.</p>
        <a href="https://www.breadfast.com/careers/"><button type="button" className="btn ps-4 pe-4 m-2">Go to Careers Page</button></a>
      </div>
    </div>

    <div className="col-md-3">
      <img src="https://cdn.breadfast.com/wp-content/uploads/2021/12/img_join_team.png" className="img-fluid rounded-start-5 w-100" alt="..."/>
    </div>
    <div className="col-md-3">
      <div className="card-body">
        <h4 className="card-title">Join our Delivery Associates</h4>
        <p className="card-text">You're friendly, quick on your feet, and excellent navigator? Join our Delivery Associates and earn money now!</p>
        <a href="https://www.breadfast.com/deliver/"><button type="button" className="btn ps-4 pe-4 m-2">Apply Now</button></a>
      </div>
    </div>
  </div>
</div>
    </div>
  
</section>  
  </>
}
