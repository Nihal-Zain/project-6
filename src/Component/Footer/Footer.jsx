import React from 'react'
import './Footer.css'
export default function Footer() {
  return <>
   <section className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="media col-md-4">
                <div className="mediaLogo p-5">
                 <a href="#">  <img src="https://www.breadfast.com/wp-content/themes/breadfast/website/images/logo_breadfast_footer.svg"/></a>
              </div>
                <ul className="socialLinks my-2">
                  <li>
                    <div className="socialwidth">
                      <a href="https://x.com/followBreadfast/" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                  </li>
                  <li>
                    <div className="socialwidth">
                      <a href="https://www.facebook.com/Breadfast" target="_blank"><i className="fa-brands fa-facebook-f  "></i></a>
                    </div>
                  </li>
                  <li>
                    <div className="socialwidth">
                      <a href="https://www.instagram.com/breadfast/" target="_blank"><i className="fa-brands fa-instagram" ></i></a>
                    </div>
                  </li>
                  <li>
                    <div className="socialwidth">
                      <a href="https://www.youtube.com/channel/UCkenm01D__QJfTq9KGrOmdg" target="_blank"><i className="fa-brands fa-youtube" ></i></a>
                    </div>
                  </li>
                  <li>
                    <div className="socialwidth">
                      <a href="https://www.linkedin.com/company/breadfast/" target="_blank"><i className="fa-brands fa-linkedin "></i></a>
                    </div>
                  </li>
                </ul>
            </div>
            <div className="col-md-4">
              <h3>Get to know Us</h3>
              <ul>
                <a href="https://www.breadfast.com/covid-19/"><li>Covid-19</li></a>
                <a href="https://www.breadfast.com/frequently-asked-questions/"><li>FAQs</li></a>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Company</h3>
              <ul>
               <a href="https://www.breadfast.com/blog/"><li>Blog</li></a>
                <a href="https://www.breadfast.com/careers/"><li>Careers</li></a>
                <a href="https://www.breadfast.com/contact-us/"><li>Contact Us</li></a>
                <a href="https://www.breadfast.com/terms-and-conditions/"><li>Terms and Conditions</li></a>
                <a href="https://www.breadfast.com/privacy-policy/"/><li>Privacy Policy</li>
              </ul>
            </div>
            <hr/>
            <h5><a href="" className="p-4">All Rights Reserved - © 2024 Breadfast</a></h5>
          </div>
          </div>
         </section>
  
  </>
}
