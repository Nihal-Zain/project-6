import React from 'react'
import './Heeder.css';
export default function Heeder() {
  return <>
  
  <section>
        <div className="container-fluid p-5 ">
          <div className="row">
            <div className="col-md-6 p-3 d-flex flex-wrap">
              <div className={ "p-3 pocketImg "}>
                <img src="https://cdn.breadfast.com/wp-content/uploads/2021/12/img_app_hero_web_with_elipse.png" className="w-100"/>
              </div>
            </div>
            <div className={"col-md-6  p-5 align-content-center contant"}>
              <h2>Household needs, from bread to everything.</h2>
              <p className="firstp">Fast & smooth shopping experience for the household.</p>
              <p className="secp">Download the app and order now</p>
              <a href="https://play.google.com/store/apps/details?id=com.breadfast&hl=en&gl=US"><img src="https://www.breadfast.com/wp-content/themes/breadfast/website/images/badge-google-play-store-en.png"/></a>
              <a href="https://apps.apple.com/us/app/breadfast-groceries-and-more/id1288436997"><img src="https://www.breadfast.com/wp-content/themes/breadfast/website/images/badge-app-store.svg"/></a>
              <a href="https://appgallery.huawei.com/#/app/C102125829"><img src="https://www.breadfast.com/wp-content/themes/breadfast/website/images/badge-huawei-app-gallery.png"/></a>
            </div>
            </div>
          </div>
       </section>
  
  </>
}
