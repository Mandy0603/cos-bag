import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <div className="global-footer">
      <div className="footer-brand">
        <div className="footer-brand__name">COS BAG</div>
        <div className="footer-brand__contact">
          Get social with us
          <i class="facebook square icon" />
          <i class="instagram icon" />
          <i class="twitter icon" />
          <i class="wechat icon" />
        </div>
      </div>
      <div className="footer-nav">
        <div className="footer-nav__about">
          <h3>About CosBag</h3>
          <ul>
            <li>About CosBag</li>
            <li>Careers</li>
            <li>CosBag stands social impact</li>
            <li>Affiliates</li>
            <li>Supply Chain Transparency</li>
            <li>Sitemap</li>
            <li>CosBag Global Sites</li>
          </ul>
        </div>

        <div className="footer-nav__mine">
          <h3>My CosBag</h3>
          <ul>
            <li>My Account</li>
            <li>Order Status</li>
            <li>Beauty Insider</li>
            <li>Rewards Bazaar</li>
            <li>Loves</li>
            <li>Flash Unlimited Shipping</li>
          </ul>
        </div>

        <div className="footer-nav__help">
          <h3>Help {"&"} FAQs</h3>
          <ul>
            <li>Online Ordering</li>
            <li>Shipping</li>
            <li>Billing</li>
            <li>Returns {"&"} Exchanges</li>
            <li>International Shipments</li>
            <li>Custoemr Service</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom" />
      <div className="footer-copyright">
        <div>Copyright &copy; 2019</div>
      </div>
    </div>
  );
};

export default Footer;
