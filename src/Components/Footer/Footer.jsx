import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
<div className="footer-content">
    <div className="footer-content-left">
<img src={assets.logo} alt="" />
<p>Delicious meals, delivered to your doorstep.
     Order from your favorite restaurants and enjoy fresh, tasty food delivered quickly and conveniently. 
     Fast delivery, great flavors, and satisfaction in every bite!
</p>
<div className="footer-social-icons">
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
</div>
    </div>
     <div className="footer-content-center">
<h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy policy</li>
</ul>
    </div>
    <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+234-0902-2560-924</li>
    <li>Contact@tomato.com</li>
</ul>
    </div>
</div>
<hr/>
<p className="footer-copyright">
    copyrigt@ 2026 tomato.com. All Right Reserved
</p>
    </div>
  )
}

export default Footer