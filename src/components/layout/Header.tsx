import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Start sidebar widget content */}
      <div className="xs-sidebar-group info-group info-sidebar">
        <div className="xs-overlay xs-bg-black"></div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a href="#" className="close-side-widget">X</a>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="logo">
                    <Link to="/"><img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/logo-2.png" alt="" /></Link>
                  </div>
                  <div className="content-box">
                    <h4>About Us</h4>
                    <div className="inner-text">
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                        roots in a piece of classical Latin literature from 45 BC, making it over
                        2000 years old.
                      </p>
                    </div>
                  </div>

                  <div className="form-inner">
                    <h4>Get a free quote</h4>
                    <form action="assets/inc/sendemail.php" method="POST" className="contact-form-validated">
                      <div className="form-group">
                        <input type="text" name="name" placeholder="Name" required />
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" placeholder="Email" required />
                      </div>
                      <div className="form-group">
                        <textarea name="message" placeholder="Message..." required></textarea>
                      </div>
                      <div className="form-group message-btn">
                        <button className="thm-btn" data-text="Submit Now +" type="submit"
                          data-loading-text="Please wait...">Submit Now
                          <span className="fas fa-arrow-right"></span>
                        </button>
                      </div>
                      <div className="result"></div>
                    </form>
                  </div>

                  <div className="sidebar-contact-info">
                    <h4>Contact Info</h4>
                    <ul className="list-unstyled">
                      <li>
                        <span className="icon-pin"></span> 88 broklyn street, New York
                      </li>
                      <li>
                        <span className="icon-call"></span>
                        <a href="tel:123456789">+1 555-9990-153</a>
                      </li>
                      <li>
                        <span className="icon-email"></span>
                        <a href="mailto:info@example.com">info@example.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="thm-social-link1">
                    <ul className="social-box list-unstyled">
                      <li>
                        <a href="#"><i className="icon-facebook-app-symbol" aria-hidden="true"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="icon-twitter" aria-hidden="true"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="icon-linkedin" aria-hidden="true"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="icon-pinterest" aria-hidden="true"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End sidebar widget content */}

      <header className="main-header">
        <div className="main-menu__top">
          <div className="main-menu__top-inner">
            <ul className="list-unstyled main-menu__contact-list">
              <li>
                <div className="icon">
                  <i className="icon-email"></i>
                </div>
                <div className="text">
                  <p><a href="mailto:info@Itzone24.com">info@Itzone25.com</a>
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-pin"></i>
                </div>
                <div className="text">
                  <p>4124 Cimmaron Road, CA 92806</p>
                </div>
              </li>
            </ul>
            <p className="main-menu__top-welcome-text">Welcome to Itzone
              our Best Technology HTML5 Template</p>
            <div className="main-menu__top-right">
              <p className="main-menu__social-title">Follow Us On:</p>
              <div className="main-menu__social">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link to="/"><img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/logo-1.png" alt="" /></Link>
                </div>
              </div>
              <div className="main-menu__main-menu-box">
                <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                <ul className="main-menu__list">
                  <li className="dropdown">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li className="dropdown">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="dropdown">
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li className="dropdown">
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="main-menu__right">
                <div className="main-menu__search-cart-btn-box">
                  <div className="main-menu__search-box">
                    <a href="#" className="main-menu__search search-toggler">
                      <i className="icon-search-interface-symbol"></i>
                    </a>
                  </div>
                  <div className="main-menu__btn-box">
                    <a href="#" className="navSidebar-button main-menu__nav-sidebar-icon">
                      <span className="icon-menu-2"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
