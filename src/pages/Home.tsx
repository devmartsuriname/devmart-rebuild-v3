import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import ChatPopup from "@/components/common/ChatPopup";
import SearchPopup from "@/components/common/SearchPopup";
import ScrollToTop from "@/components/common/ScrollToTop";
import Preloader from "@/components/common/Preloader";
import CustomCursor from "@/components/common/CustomCursor";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="custom-cursor">
      <CustomCursor />
      <Preloader />
      <ChatPopup />
      
      <div className="page-wrapper">
        <Header />

        {/* Main Slider Start */}
        <section className="main-slider">
          <div className="swiper-container thm-swiper__slider" data-swiper-options='{"slidesPerView": 1, "loop": true,
                "effect": "fade",
                "pagination": {
                "el": "#main-slider-pagination",
                "type": "bullets",
                "clickable": true
                },
                "navigation": {
                "nextEl": "#main-slider__swiper-button-next",
                "prevEl": "#main-slider__swiper-button-prev"
                },
                "autoplay": {
                "delay": 5000
                }}'>
            <div className="swiper-wrapper">

              <div className="swiper-slide">
                <div className="main-slider__bg"
                  style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/backgrounds/slider-1-1.jpg)" }}>
                </div>
                <div className="main-slider__shape-1"></div>
                <div className="main-slider__shape-2"></div>
                <div className="main-slider__shape-3"></div>
                <div className="main-slider__shape-4"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <div className="main-slider__sub-title-box">
                          <p className="main-slider__sub-title">PERFECT IT SOLUTIONS</p>
                          <div className="main-slider__sub-title-shape"></div>
                        </div>
                        <h2 className="main-slider__title">Powerful IT Solutions<br /> For Your <span>Business</span></h2>
                        <p className="main-slider__text">Innovating and empowering businesses with tailored solutions for success<br /> and growth. Innovating and empowering</p>
                        <div className="main-slider__btn-and-video-box">
                          <div className="main-slider__btn-box">
                            <Link to="/about" className="thm-btn main-slider__btn">Discover More
                              <span className="fas fa-arrow-right"></span>
                            </Link>
                          </div>
                          <div className="main-slider__video-link">
                            <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                              <div className="main-slider__video-icon">
                                <span className="icon-play"></span>
                                <i className="ripple"></i>
                              </div>
                            </a>
                            <h4 className="main-slider__video-text">Watch Video</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="main-slider__bg"
                  style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/backgrounds/slider-1-2.jpg)" }}>
                </div>
                <div className="main-slider__shape-1"></div>
                <div className="main-slider__shape-2"></div>
                <div className="main-slider__shape-3"></div>
                <div className="main-slider__shape-4"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <div className="main-slider__sub-title-box">
                          <p className="main-slider__sub-title">PERFECT IT SOLUTIONS</p>
                          <div className="main-slider__sub-title-shape"></div>
                        </div>
                        <h2 className="main-slider__title">Powerful IT Solutions<br /> For Your <span>Business</span></h2>
                        <p className="main-slider__text">Innovating and empowering businesses with tailored solutions for success<br /> and growth. Innovating and empowering</p>
                        <div className="main-slider__btn-and-video-box">
                          <div className="main-slider__btn-box">
                            <Link to="/about" className="thm-btn main-slider__btn">Discover More
                              <span className="fas fa-arrow-right"></span>
                            </Link>
                          </div>
                          <div className="main-slider__video-link">
                            <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                              <div className="main-slider__video-icon">
                                <span className="icon-play"></span>
                                <i className="ripple"></i>
                              </div>
                            </a>
                            <h4 className="main-slider__video-text">Watch Video</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="main-slider__bg"
                  style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/backgrounds/slider-1-3.jpg)" }}>
                </div>
                <div className="main-slider__shape-1"></div>
                <div className="main-slider__shape-2"></div>
                <div className="main-slider__shape-3"></div>
                <div className="main-slider__shape-4"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="main-slider__content">
                        <div className="main-slider__sub-title-box">
                          <p className="main-slider__sub-title">PERFECT IT SOLUTIONS</p>
                          <div className="main-slider__sub-title-shape"></div>
                        </div>
                        <h2 className="main-slider__title">Powerful IT Solutions<br /> For Your <span>Business</span></h2>
                        <p className="main-slider__text">Innovating and empowering businesses with tailored solutions for success<br /> and growth. Innovating and empowering</p>
                        <div className="main-slider__btn-and-video-box">
                          <div className="main-slider__btn-box">
                            <Link to="/about" className="thm-btn main-slider__btn">Discover More
                              <span className="fas fa-arrow-right"></span>
                            </Link>
                          </div>
                          <div className="main-slider__video-link">
                            <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                              <div className="main-slider__video-icon">
                                <span className="icon-play"></span>
                                <i className="ripple"></i>
                              </div>
                            </a>
                            <h4 className="main-slider__video-text">Watch Video</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="swiper-pagination" id="main-slider-pagination"></div>

            <div className="main-slider__nav">
              <div className="swiper-button-prev" id="main-slider__swiper-button-next">
                <i className="icon-right-arrow"></i>
              </div>
              <div className="swiper-button-next" id="main-slider__swiper-button-prev">
                <i className="icon-right-arrow"></i>
              </div>
            </div>

          </div>
        </section>
        {/* Main Slider End */}

        {/* Feature One Start */}
        <section className="feature-one">
          <div className="container">
            <div className="feature-one__inner">
              <div className="row">
                {/* Feature One Single Start */}
                <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                  <div className="feature-one__single">
                    <div className="feature-one__shape-1"></div>
                    <div className="feature-one__icon">
                      <span className="icon-solution"></span>
                    </div>
                    <h3 className="feature-one__title"><Link to="/about">Best IT Solution Provider</Link></h3>
                    <p className="feature-one__text">Innovating and empowering businesses with tailored solutions for success and growth.</p>
                  </div>
                </div>
                {/* Feature One Single End */}
                {/* Feature One Single Start */}
                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                  <div className="feature-one__single feature-one__single-2">
                    <div className="feature-one__shape-1"></div>
                    <div className="feature-one__icon">
                      <span className="icon-team"></span>
                    </div>
                    <h3 className="feature-one__title"><Link to="/about">Expert & Dedicated Team Members</Link></h3>
                    <p className="feature-one__text">Innovating and empowering businesses with tailored solutions for success and growth.</p>
                  </div>
                </div>
                {/* Feature One Single End */}
                {/* Feature One Single Start */}
                <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                  <div className="feature-one__single feature-one__single-3">
                    <div className="feature-one__shape-1"></div>
                    <div className="feature-one__icon">
                      <span className="icon-clock"></span>
                    </div>
                    <h3 className="feature-one__title"><Link to="/about">24/7 Hours Support</Link></h3>
                    <p className="feature-one__text">Innovating and empowering businesses with tailored solutions for success and growth.</p>
                  </div>
                </div>
                {/* Feature One Single End */}
              </div>
            </div>
          </div>
        </section>
        {/* Feature One End */}

        {/* About One Start */}
        <section className="about-one">
          <div className="about-one__shape-3 float-bob-y">
            <img src="/itzone-technology-it-solutions-html5-template/assets/images/shapes/about-one-shape-3.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="about-one__left">
                  <div className="about-one__img-box wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                    <div className="about-one__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/about-one-img-1.jpg" alt="" />
                    </div>
                    <div className="about-one__img-2">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/about-one-img-2.jpg" alt="" />
                    </div>
                    <div className="about-one__shape-1 float-bob-x"></div>
                    <div className="about-one__shape-2 rotate-me"></div>
                    <div className="about-one__experience">
                      <div className="about-one__experience-shape" style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/shapes/about-one-experience-shape.png)" }}></div>
                      <div className="about-one__experience-inner">
                        <div className="about-one__experience-count count-box">
                          <h3 className="count-text" data-stop="27" data-speed="1500">00</h3>
                          <span>+</span>
                        </div>
                        <p className="about-one__experience-text">Years of<br /> Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-one__right">
                  <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">About Company</span>
                    </div>
                    <h2 className="section-title__title title-animation">We Are Increasing Business Success With
                      <span>Technology</span>
                    </h2>
                  </div>
                  <p className="about-one__text">Innovating and empowering businesses with tailored solutions for success and growth. Innovating and empowering businesses with tailored solutions for success and growth.</p>
                  <ul className="about-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <p>Business Growth & Analysis</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <p>Innovative Tech Solutions</p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <p>Expert Support Team</p>
                    </li>
                  </ul>
                  <div className="about-one__btn-and-client-box">
                    <div className="about-one__btn-box">
                      <Link to="/about" className="thm-btn">Learn More
                        <span className="fas fa-arrow-right"></span>
                      </Link>
                    </div>
                    <div className="about-one__client-box">
                      <div className="about-one__client-img">
                        <img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/about-one-client-img.png" alt="" />
                      </div>
                      <p className="about-one__client-text">800 + Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About One End */}

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

export default Home;
