import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="mobile-nav__wrapper">
      <div className="mobile-nav__overlay mobile-nav__toggler"></div>
      <div className="mobile-nav__content">
        <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>

        <div className="logo-box">
          <Link to="/" aria-label="logo image"><img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/logo-2.png" width="150"
            alt="" /></Link>
        </div>
        <div className="mobile-nav__container"></div>

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>
            <a href="mailto:needhelp@Itzone.com">needhelp@Itzone.com</a>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <a href="tel:666-888-0000">666 888 0000</a>
          </li>
        </ul>
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-facebook-square"></a>
            <a href="#" className="fab fa-pinterest-p"></a>
            <a href="#" className="fab fa-instagram"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
