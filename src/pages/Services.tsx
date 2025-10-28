import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import ChatPopup from "@/components/common/ChatPopup";
import SearchPopup from "@/components/common/SearchPopup";
import ScrollToTop from "@/components/common/ScrollToTop";
import Preloader from "@/components/common/Preloader";
import CustomCursor from "@/components/common/CustomCursor";
import PageHeader from "@/components/common/PageHeader";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="custom-cursor">
      <CustomCursor />
      <Preloader />
      <ChatPopup />
      
      <div className="page-wrapper">
        <Header />

        <PageHeader title="Services" breadcrumb="Services" />

        {/* Services Page Start */}
        <section className="services-page">
          <div className="container">
            <div className="row">
              {/* Services Two Single Start */}
              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                <div className="services-two__single">
                  <div className="services-two__img-box">
                    <div className="services-two__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/services/services-2-1.jpg" alt="" />
                    </div>
                    <div className="services-two__icon">
                      <span className="icon-ux-design"></span>
                    </div>
                  </div>
                  <div className="services-two__content">
                    <h3 className="services-two__title"><Link to="/services/ui-ux-design">UI/UX Design</Link>
                    </h3>
                    <p className="services-two__text">Comprehensive IT management, including network
                      monitoring, data backup,</p>
                    <div className="services-two__plus">
                      <Link to="/services/ui-ux-design"><span className="fas fa-plus"></span></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Services Two Single End */}
              {/* Services Two Single Start */}
              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                <div className="services-two__single">
                  <div className="services-two__img-box">
                    <div className="services-two__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/services/services-2-2.jpg" alt="" />
                    </div>
                    <div className="services-two__icon">
                      <span className="icon-software-development"></span>
                    </div>
                  </div>
                  <div className="services-two__content">
                    <h3 className="services-two__title"><Link to="/services/software-development">APP Development</Link>
                    </h3>
                    <p className="services-two__text">Comprehensive IT management, including network
                      monitoring, data backup,</p>
                    <div className="services-two__plus">
                      <Link to="/services/software-development"><span className="fas fa-plus"></span></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Services Two Single End */}
              {/* Services Two Single Start */}
              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="500ms">
                <div className="services-two__single">
                  <div className="services-two__img-box">
                    <div className="services-two__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/services/services-2-3.jpg" alt="" />
                    </div>
                    <div className="services-two__icon">
                      <span className="icon-product-design"></span>
                    </div>
                  </div>
                  <div className="services-two__content">
                    <h3 className="services-two__title"><Link to="/services/product-design">Product Design</Link>
                    </h3>
                    <p className="services-two__text">Comprehensive IT management, including network
                      monitoring, data backup,</p>
                    <div className="services-two__plus">
                      <Link to="/services/product-design"><span className="fas fa-plus"></span></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Services Two Single End */}
              {/* Services Two Single Start */}
              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="700ms">
                <div className="services-two__single">
                  <div className="services-two__img-box">
                    <div className="services-two__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/services/services-2-4.jpg" alt="" />
                    </div>
                    <div className="services-two__icon">
                      <span className="icon-code"></span>
                    </div>
                  </div>
                  <div className="services-two__content">
                    <h3 className="services-two__title"><Link to="/services/web-development">Website Design</Link>
                    </h3>
                    <p className="services-two__text">Comprehensive IT management, including network
                      monitoring, data backup,</p>
                    <div className="services-two__plus">
                      <Link to="/services/web-development"><span className="fas fa-plus"></span></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Services Two Single End */}
              {/* Services Two Single Start */}
              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="900ms">
                <div className="services-two__single">
                  <div className="services-two__img-box">
                    <div className="services-two__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/services/services-2-5.jpg" alt="" />
                    </div>
                    <div className="services-two__icon">
                      <span className="icon-promotion-1"></span>
                    </div>
                  </div>
                  <div className="services-two__content">
                    <h3 className="services-two__title"><Link to="/services/business-analysis">Business Analysis</Link>
                    </h3>
                    <p className="services-two__text">Comprehensive IT management, including network
                      monitoring, data backup,</p>
                    <div className="services-two__plus">
                      <Link to="/services/business-analysis"><span className="fas fa-plus"></span></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Services Two Single End */}
              {/* Services Two Single Start */}
              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="1100ms">
                <div className="services-two__single">
                  <div className="services-two__img-box">
                    <div className="services-two__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/services/services-2-6.jpg" alt="" />
                    </div>
                    <div className="services-two__icon">
                      <span className="icon-social-media-marketing"></span>
                    </div>
                  </div>
                  <div className="services-two__content">
                    <h3 className="services-two__title"><Link to="/services/web-development">Web Devolopment</Link>
                    </h3>
                    <p className="services-two__text">Comprehensive IT management, including network
                      monitoring, data backup,</p>
                    <div className="services-two__plus">
                      <Link to="/services/web-development"><span className="fas fa-plus"></span></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Services Two Single End */}
            </div>
          </div>
        </section>
        {/* Services Page End */}

        {/* Newsletter One Start */}
        <section className="newsletter-one">
          <div className="container">
            <div className="newsletter-one__inner">
              <div className="newsletter-one__left">
                <h2 className="newsletter-one__title">Subcribe to Our Newsletter</h2>
                <p className="newsletter-one__text">Get the latest SEO tips and software insights straight to your
                  inbox.</p>
              </div>
              <div className="newsletter-one__right">
                <form className="newsletter-one__form">
                  <div className="newsletter-one__input">
                    <input type="email" placeholder="Enter email address" />
                  </div>
                  <button type="submit" className="thm-btn">Subscribe Now <span className="fas fa-arrow-right"></span>
                  </button>
                  <div className="checked-box">
                    <input type="checkbox" name="skipper1" id="skipper" defaultChecked />
                    <label htmlFor="skipper"><span></span>by Subscribing. Your Accept Privacy
                      policy</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="particles-js-two"></div>
        </section>
        {/* Newsletter One End */}

        <Footer />
      </div>

      <MobileNav />
      <SearchPopup />
      <ScrollToTop />
    </div>
  );
};

export default Services;
