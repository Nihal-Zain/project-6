import React from 'react'
import'./Shoping.css'
export default function Shoping() {
  return <>
  
  <section className="pt-5 mt-3 shoping">
        <div className="container-fluid pt-4 ps-5 mt-5">
          <div className="row">
            <div className="shopImg col-md-6 pt-2 ps-5">
              <img src="https://cdn.breadfast.com/wp-content/uploads/2022/01/Start-Ordering-Banner.png" className="w-100"/>
            </div>
            <div className="shoptxt col-md-6 pt-2 ps-5  d-flex">
              <div className="align-content-center">
              <img src="https://cdn.breadfast.com/wp-content/uploads/2021/12/readyShoppingLogo.svg" className="logoImg"/>
                  <h4>Ready to start shopping?</h4>
                  <h6 >Download Breadfast and join our growing community of happy shoppers!</h6>
                    <a href="https://play.google.com/store/apps/details?id=com.breadfast&hl=en&gl=US"><img src="https://www.breadfast.com/wp-content/themes/breadfast/website/images/badge-google-play-store-en.png"/></a>
                    <a href="https://apps.apple.com/us/app/breadfast-groceries-and-more/id1288436997"><img src="https://www.breadfast.com/wp-content/themes/breadfast/website/images/badge-app-store.svg"/></a>
                    <a href="https://appgallery.huawei.com/#/app/C102125829"><img src="https://www.breadfast.com/wp-content/themes/breadfast/website/images/badge-huawei-app-gallery.png"/></a>
                  </div>
           </div>
            </div>
          </div>
       </section>
  </>
}
