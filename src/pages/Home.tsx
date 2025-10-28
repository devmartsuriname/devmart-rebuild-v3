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

        {/* Banner One Start */}
        <section className="banner-one">
          <div className="banner-one__shape-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800"></div>
          <div className="banner-one__shape-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000"></div>
          <div className="banner-one__shape-3 img-bounce-two"></div>
          <div className="banner-one__shape-4 float-bob-x">
            <img src="/itzone-technology-it-solutions-html5-template/assets/images/shapes/banner-one-shape-4.png" alt="" />
          </div>
          <div className="banner-one__shape-5 float-bob-y"></div>
          <div className="banner-one__shape-6 float-bob-y">
            <img src="/itzone-technology-it-solutions-html5-template/assets/images/shapes/banner-one-shape-6.png" alt="" className="rotate-me" />
          </div>
          <div className="container">
            <div className="banner-one__inner">
              <div className="banner-one__img-box">
                <div className="banner-one__img" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">
                  <img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/banner-one-img-1.png" alt="" />
                </div>
                <div className="banner-one__img-shape-1"></div>
                <div className="banner-one__img-shape-2 float-bob"></div>
                <div className="banner-one__img-shape-3 float-bob-y"></div>
                <div className="banner-one__img-shape-4 float-bob-x"></div>
                <div className="banner-one__img-shape-5 float-bob-y">
                  <img src="/itzone-technology-it-solutions-html5-template/assets/images/shapes/banner-one-img-shape-5.png" alt="" className="rotate-me" />
                </div>
              </div>
              <div className="banner-one__content">
                <div className="banner-one__sub-title-box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="0">
                  <p className="banner-one__sub-title">Best it Solution Service</p>
                </div>
                <h2 className="banner-one__title" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
                  Modern Your Business<br /> With <span>IT service.</span>
                </h2>
                <p className="banner-one__text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                  IT solutions refer to a broad range of services and technologies designed to address<br /> specific business needs, streamline operations, and drive growth.
                </p>
                <div className="banner-one__btn-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                  <div className="banner-one__btn">
                    <Link to="/about" className="thm-btn">Discover More
                      <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                  <div className="banner-one__btn">
                    <Link to="/contact" className="thm-btn">Let's Talk
                      <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="banner-one__video-link">
                <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                  <div className="banner-one__video-icon">
                    <span className="fa fa-play"></span>
                    <i className="ripple"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Banner One End */}

        {/* About One Start */}
        <section className="about-one">
          <div className="about-one__shape-2 float-bob">
            <img src="/itzone-technology-it-solutions-html5-template/assets/images/shapes/about-one-shape-2.png" alt="" />
          </div>
          <div className="about-one__shape-3 float-bob-y">
            <img src="/itzone-technology-it-solutions-html5-template/assets/images/shapes/about-one-shape-3.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="about-one__left">
                  <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">About Us</span>
                    </div>
                    <h2 className="section-title__title title-animation">Boost Business with Our <br /> Innovative
                      <span> IT Solutions</span>
                    </h2>
                  </div>
                  <p className="about-one__text">Innovating and empowering businesses with tailored solutions for success<br /> and growth. Empowering businesses to create meaningful innovation.</p>
                  <ul className="about-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-award"></span>
                      </div>
                      <div className="content">
                        <h4>Award-Winning Company.</h4>
                        <p>Partner with us to unlock new possibilities, drive progress, and shape<br /> a future filled with success</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-certified"></span>
                      </div>
                      <div className="content">
                        <h4>Certified Company</h4>
                        <p>Partner with us to unlock new possibilities, drive progress, and shape<br /> a future filled with success</p>
                      </div>
                    </li>
                  </ul>
                  <div className="about-one__btn-and-client-info">
                    <div className="about-one__btn-box">
                      <Link to="/about" className="thm-btn">Learn More
                        <span className="fas fa-arrow-right"></span>
                      </Link>
                    </div>
                    <div className="about-one__client-info-inner">
                      <div className="about-one__client-info">
                        <div className="about-one__client-img-inner">
                          <div className="about-one__client-img">
                            <img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/about-one-client-img-1.jpg" alt="" />
                          </div>
                        </div>
                        <div className="about-one__client-details">
                          <h5>Adam Smith</h5>
                          <p>ceo,Itzone</p>
                        </div>
                      </div>
                      <div className="about-one__client-sign">
                        <img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/about-one-client-sign.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-one__right wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                  <div className="about-one__img-box">
                    <div className="about-one__shape-1 float-bob-x">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/shapes/about-one-shape-1.png" alt="" />
                    </div>
                    <div className="about-one__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/about-one-img-1.jpg" alt="" />
                    </div>
                    <div className="about-one__img-2">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/about-one-img-2.jpg" alt="" />
                    </div>
                    <div className="about-one__video-link">
                      <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                        <div className="about-one__video-icon">
                          <span className="fa fa-play"></span>
                          <i className="ripple"></i>
                        </div>
                      </a>
                    </div>
                    <div className="about-one__client-box">
                      <ul className="about-one__client-box-img-list list-unstyled">
                        <li>
                          <div className="about-one__client-box-img">
                            <img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/about-one-client-img-1-1.jpg" alt="" />
                          </div>
                        </li>
                        <li>
                          <div className="about-one__client-box-img">
                            <img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/about-one-client-img-1-2.jpg" alt="" />
                          </div>
                        </li>
                        <li>
                          <div className="about-one__client-box-img">
                            <img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/about-one-client-img-1-3.jpg" alt="" />
                          </div>
                        </li>
                        <li>
                          <a href="#"><span className="fas fa-plus"></span></a>
                        </li>
                      </ul>
                      <p className="about-one__client-text"><span className="odometer" data-count="120">00</span><span className="about-one__client-text-letter">K</span> Satisfied Client</p>
                    </div>
                    <div className="about-one__experience-box">
                      <div className="about-one__experience-count-box">
                        <h3 className="odometer" data-count="25">00</h3>
                        <span>+</span>
                      </div>
                      <p className="about-one__experience-text">Years of Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About One End */}

        {/* Service One Start */}
        <section className="service-one">
          <div className="services-one__shape-1"></div>
          <div className="services-one__shape-2 float-bob-x">
            <img src="/itzone-technology-it-solutions-html5-template/assets/images/shapes/services-one-shape-2.png" alt="" />
          </div>
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Our Services</span>
              </div>
              <h2 className="section-title__title title-animation">Innovative IT Services
                <br /> Tailored <span>For Your Success.</span>
              </h2>
            </div>
            <div className="service-one__carousel owl-theme owl-carousel">
              {/* Services One Single Start */}
              <div className="item">
                <div className="service-one__single-inner">
                  <div className="service-one__single-wrap">
                    <div className="service-one__single">
                      <div className="service-one__single-shape-1"></div>
                      <div className="service-one__icon">
                        <span className="icon-social-media-marketing"></span>
                      </div>
                      <h3 className="service-one__title"><Link to="/services/software-development">Software Development</Link></h3>
                      <p className="service-one__text">Innovating and empowering businesses with tailored solutions for success and growth.</p>
                    </div>
                  </div>
                  <div className="service-one__btn-box">
                    <Link to="/services/software-development" className="thm-btn">Read More
                      <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Services One Single End */}
              {/* Services One Single Start */}
              <div className="item">
                <div className="service-one__single-inner">
                  <div className="service-one__single-wrap">
                    <div className="service-one__single">
                      <div className="service-one__single-shape-1"></div>
                      <div className="service-one__icon">
                        <span className="icon-financial-risk"></span>
                      </div>
                      <h3 className="service-one__title"><Link to="/services/web-development">Risk Management</Link></h3>
                      <p className="service-one__text">Innovating and empowering businesses with tailored solutions for success and growth.</p>
                    </div>
                  </div>
                  <div className="service-one__btn-box">
                    <Link to="/services/web-development" className="thm-btn">Read More
                      <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Services One Single End */}
              {/* Services One Single Start */}
              <div className="item">
                <div className="service-one__single-inner">
                  <div className="service-one__single-wrap">
                    <div className="service-one__single">
                      <div className="service-one__single-shape-1"></div>
                      <div className="service-one__icon">
                        <span className="icon-ux-design"></span>
                      </div>
                      <h3 className="service-one__title"><Link to="/services/ui-ux-design">UI/UX Design</Link></h3>
                      <p className="service-one__text">Innovating and empowering businesses with tailored solutions for success and growth.</p>
                    </div>
                  </div>
                  <div className="service-one__btn-box">
                    <Link to="/services/ui-ux-design" className="thm-btn">Read More
                      <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Services One Single End */}
              {/* Services One Single Start */}
              <div className="item">
                <div className="service-one__single-inner">
                  <div className="service-one__single-wrap">
                    <div className="service-one__single">
                      <div className="service-one__single-shape-1"></div>
                      <div className="service-one__icon">
                        <span className="icon-promotion"></span>
                      </div>
                      <h3 className="service-one__title"><Link to="/services">Digital Marketing</Link></h3>
                      <p className="service-one__text">Innovating and empowering businesses with tailored solutions for success and growth.</p>
                    </div>
                  </div>
                  <div className="service-one__btn-box">
                    <Link to="/services" className="thm-btn">Read More
                      <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Services One Single End */}
              {/* Services One Single Start */}
              <div className="item">
                <div className="service-one__single-inner">
                  <div className="service-one__single-wrap">
                    <div className="service-one__single">
                      <div className="service-one__single-shape-1"></div>
                      <div className="service-one__icon">
                        <span className="icon-implement"></span>
                      </div>
                      <h3 className="service-one__title"><Link to="/services/software-development">Cloud Provider</Link></h3>
                      <p className="service-one__text">Innovating and empowering businesses with tailored solutions for success and growth.</p>
                    </div>
                  </div>
                  <div className="service-one__btn-box">
                    <Link to="/services/software-development" className="thm-btn">Read More
                      <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Services One Single End */}
              {/* Services One Single Start */}
              <div className="item">
                <div className="service-one__single-inner">
                  <div className="service-one__single-wrap">
                    <div className="service-one__single">
                      <div className="service-one__single-shape-1"></div>
                      <div className="service-one__icon">
                        <span className="icon-monitor"></span>
                      </div>
                      <h3 className="service-one__title"><Link to="/services/business-analysis">Data Analytics</Link></h3>
                      <p className="service-one__text">Innovating and empowering businesses with tailored solutions for success and growth.</p>
                    </div>
                  </div>
                  <div className="service-one__btn-box">
                    <Link to="/services/business-analysis" className="thm-btn">Read More
                      <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Services One Single End */}
            </div>
          </div>
        </section>
        {/* Service One End */}

        {/* Why Choose One Start */}
        <section className="why-choose-one">
          <div className="why-choose-one__bg-shape-1" style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/shapes/why-choose-one-bg-shape-1.png)" }}></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="why-choose-one__left">
                  <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">WHY CHOOSE US</span>
                    </div>
                    <h2 className="section-title__title title-animation">Elevate Growth With Our IT Solutions <span>For Success.</span>
                    </h2>
                  </div>
                  <p className="why-choose-one__text">Innovating and empowering businesses with tailored solutions for success<br /> and growth. Innovating and empowering</p>
                  <div className="why-choose-one__progress-box">
                    <ul className="why-choose-one__progress-list list-unstyled">
                      <li>
                        <div className="why-choose-one__progress">
                          <h4 className="why-choose-one__progress-title">Business Grow</h4>
                          <div className="bar">
                            <div className="bar-inner count-bar" data-percent="90%">
                              <div className="count-text">90%</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="why-choose-one__progress">
                          <h4 className="why-choose-one__progress-title">Quality Products</h4>
                          <div className="bar">
                            <div className="bar-inner count-bar" data-percent="85%">
                              <div className="count-text">85%</div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="why-choose-one__progress">
                          <h4 className="why-choose-one__progress-title">Innovation Design</h4>
                          <div className="bar">
                            <div className="bar-inner count-bar" data-percent="96%">
                              <div className="count-text">96%</div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="why-choose-one__btn-and-call-box">
                    <div className="why-choose-one__btn-box">
                      <Link to="/about" className="thm-btn">Learn More
                        <span className="fas fa-arrow-right"></span>
                      </Link>
                    </div>
                    <div className="why-choose-one__call-box">
                      <div className="why-choose-one__call-icon">
                        <span className="icon-call"></span>
                      </div>
                      <div className="why-choose-one__call-content">
                        <p>Call Us Any Time</p>
                        <h5><a href="tel:0882466422710">+088 (246) 642-27-10</a></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="why-choose-one__right wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                  <div className="why-choose-one__img-box">
                    <div className="why-choose-one__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/why-choose-one-img-1.jpg" alt="" />
                    </div>
                    <div className="why-choose-one__img-2">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/why-choose-one-img-2.jpg" alt="" />
                    </div>
                    <div className="why-choose-one__shape-1 rotate-me"></div>
                    <div className="why-choose-one__cstomer-services">
                      <div className="why-choose-one__cstomer-services-bg float-bob-x" style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/shapes/why-choose-one-cstomer-services-bg-shape.png)" }}></div>
                      <div className="why-choose-one__cstomer-services-icon">
                        <span className="icon-customer-service"></span>
                      </div>
                      <h4>24/7 Customer Service</h4>
                    </div>
                    <div className="why-choose-one__client-active">
                      <div className="why-choose-one__client-count-box">
                        <h3 className="odometer" data-count="13">00</h3>
                        <span>K</span>
                        <span>+</span>
                      </div>
                      <p className="why-choose-one__client-text">Active Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why Choose One End */}

        {/* Process One Start */}
        <section className="process-one">
          <div className="process-one__shape-1"></div>
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Working Process</span>
              </div>
              <h2 className="section-title__title title-animation">How To Work <span>It</span>
              </h2>
            </div>
            <div className="row">
              {/* Process One Single Start */}
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                <div className="process-one__single-inner">
                  <div className="process-one__single">
                    <div className="process-one__icon">
                      <span className="icon-complete"></span>
                    </div>
                    <h3 className="process-one__title">Choose a project</h3>
                    <p className="process-one__text">Once the strategy is in place, we move to designing and developing your vision.</p>
                  </div>
                  <div className="process-one__count"></div>
                </div>
              </div>
              {/* Process One Single End */}
              {/* Process One Single Start */}
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                <div className="process-one__single-inner">
                  <div className="process-one__single">
                    <div className="process-one__icon">
                      <span className="icon-social-media-marketing"></span>
                    </div>
                    <h3 className="process-one__title">Project analysis</h3>
                    <p className="process-one__text">Once the strategy is in place, we move to designing and developing your vision.</p>
                  </div>
                  <div className="process-one__count"></div>
                </div>
              </div>
              {/* Process One Single End */}
              {/* Process One Single Start */}
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                <div className="process-one__single-inner">
                  <div className="process-one__single">
                    <div className="process-one__icon">
                      <span className="icon-execution"></span>
                    </div>
                    <h3 className="process-one__title">Plan Execute</h3>
                    <p className="process-one__text">Once the strategy is in place, we move to designing and developing your vision.</p>
                  </div>
                  <div className="process-one__count"></div>
                </div>
              </div>
              {/* Process One Single End */}
              {/* Process One Single Start */}
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                <div className="process-one__single-inner">
                  <div className="process-one__single">
                    <div className="process-one__icon">
                      <span className="icon-results"></span>
                    </div>
                    <h3 className="process-one__title">Deliver result</h3>
                    <p className="process-one__text">Once the strategy is in place, we move to designing and developing your vision.</p>
                  </div>
                  <div className="process-one__count"></div>
                </div>
              </div>
              {/* Process One Single End */}
            </div>
          </div>
        </section>
        {/* Process One End */}

        {/* Sliding Text One Start */}
        <section className="sliding-text-one">
          <div className="sliding-text-one__wrap">
            <ul className="sliding-text-one__list list-unstyled marquee_mode-1">
              <li>
                <h2 data-hover="UI/UX Design" className="sliding-text-one__title">UI/UX Design</h2>
                <span className="icon-star"></span>
              </li>
              <li>
                <h2 data-hover="Product Design" className="sliding-text-one__title">Product Design</h2>
                <span className="icon-star"></span>
              </li>
              <li>
                <h2 data-hover="Web Development" className="sliding-text-one__title">Web Development</h2>
                <span className="icon-star"></span>
              </li>
              <li>
                <h2 data-hover="BRANDING" className="sliding-text-one__title">BRANDING</h2>
                <span className="icon-star"></span>
              </li>
              <li>
                <h2 data-hover="Cyber Security" className="sliding-text-one__title">Cyber Security</h2>
                <span className="icon-star"></span>
              </li>
              <li>
                <h2 data-hover="Website design" className="sliding-text-one__title">Website design</h2>
                <span className="icon-star"></span>
              </li>
              <li>
                <h2 data-hover="Digital Marketing" className="sliding-text-one__title">Digital Marketing</h2>
                <span className="icon-star"></span>
              </li>
              <li>
                <h2 data-hover="Website design" className="sliding-text-one__title">Website design</h2>
                <span className="icon-star"></span>
              </li>
            </ul>
          </div>
        </section>
        {/* Sliding Text One End */}

        {/* Project One Start */}
        <section className="project-one">
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Portfolio</span>
              </div>
              <h2 className="section-title__title title-animation">Explore Our Recent <span>Projects</span>
              </h2>
            </div>
            <div className="project-one__carousel-container">
              <div className="project-one__carousel owl-carousel owl-theme">
                {/* Portfolio Two Single Start */}
                <div className="item">
                  <div className="project-one__single-box">
                    <ul className="project-one__box list-unstyled">
                      <li>
                        <div className="project-one__box-content">
                          <div className="single-project-one__bg" style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/project/project-1-1.jpg)" }}></div>
                          <div className="project-one__title">
                            <h3><Link to="/projects">Innovative Solutions,<br /> Powerful Results</Link></h3>
                          </div>
                          <div className="project-one__content-box">
                            <div className="project-one__icon">
                              <a href="/itzone-technology-it-solutions-html5-template/assets/images/project/project-1-1.jpg" className="img-popup"><span className="icon-right-arrow"></span></a>
                            </div>
                            <div className="project-one__title-box">
                              <h3 className="project-one__title-2"><Link to="/projects">Innovative Solutions,<br /> Powerful Results</Link></h3>
                              <p className="project-one__text">Explore How We've Empowered Businesses with Innovative Tech Solutions</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="active">
                        <div className="project-one__box-content">
                          <div className="single-project-one__bg" style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/project/project-1-2.jpg)" }}></div>
                          <div className="project-one__title">
                            <h3><Link to="/projects">Transforming Ideas Into<br /> Digital Excellence</Link></h3>
                          </div>
                          <div className="project-one__content-box">
                            <div className="project-one__icon">
                              <a href="/itzone-technology-it-solutions-html5-template/assets/images/project/project-1-2.jpg" className="img-popup"><span className="icon-right-arrow"></span></a>
                            </div>
                            <div className="project-one__title-box">
                              <h3 className="project-one__title-2"><Link to="/projects">Transforming Ideas Into Digital Excellence</Link></h3>
                              <p className="project-one__text">Explore How We've Empowered Businesses with Innovative Tech Solutions</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="project-one__box-content">
                          <div className="single-project-one__bg" style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/project/project-1-3.jpg)" }}></div>
                          <div className="project-one__title">
                            <h3><Link to="/projects">Driving Success Through<br /> Technology</Link></h3>
                          </div>
                          <div className="project-one__content-box">
                            <div className="project-one__icon">
                              <a href="/itzone-technology-it-solutions-html5-template/assets/images/project/project-1-3.jpg" className="img-popup"><span className="icon-right-arrow"></span></a>
                            </div>
                            <div className="project-one__title-box">
                              <h3 className="project-one__title-2"><Link to="/projects">Driving Success Through Technology</Link></h3>
                              <p className="project-one__text">Explore How We've Empowered Businesses with Innovative Tech Solutions</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="project-one__box-content">
                          <div className="single-project-one__bg" style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/project/project-1-4.jpg)" }}></div>
                          <div className="project-one__title">
                            <h3><Link to="/projects">Empowering Businesses<br /> with Cutting-Edge IT</Link></h3>
                          </div>
                          <div className="project-one__content-box">
                            <div className="project-one__icon">
                              <a href="/itzone-technology-it-solutions-html5-template/assets/images/project/project-1-4.jpg" className="img-popup"><span className="icon-right-arrow"></span></a>
                            </div>
                            <div className="project-one__title-box">
                              <h3 className="project-one__title-2"><Link to="/projects">Empowering Businesses with Cutting-Edge IT</Link></h3>
                              <p className="project-one__text">Explore How We've Empowered Businesses with Innovative Tech Solutions</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Portfolio Two Single End */}
              </div>
            </div>
          </div>
        </section>
        {/* Project One End */}

        {/* Counter One Start */}
        <section className="counter-one">
          <div className="counter-one__bg-shape float-bob-y" style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/shapes/counter-one-bg-shape.png)" }}></div>
          <div className="container">
            <div className="row">
              {/* Counter One Single Start */}
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="icon-complete"></span>
                  </div>
                  <div className="counter-one__content count-box">
                    <h3 className="counter-one__count"><span className="count-text" data-stop="1.9" data-speed="1500"></span>K</h3>
                    <p className="counter-one__text">Project Completed</p>
                  </div>
                </div>
              </div>
              {/* Counter One Single End */}
              {/* Counter One Single Start */}
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="icon-costumer"></span>
                  </div>
                  <div className="counter-one__content count-box">
                    <h3 className="counter-one__count"><span className="count-text" data-stop="25" data-speed="1500"></span>M</h3>
                    <p className="counter-one__text">Happy Clients Review</p>
                  </div>
                </div>
              </div>
              {/* Counter One Single End */}
              {/* Counter One Single Start */}
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="icon-customer"></span>
                  </div>
                  <div className="counter-one__content count-box">
                    <h3 className="counter-one__count"><span className="count-text" data-stop="350" data-speed="1500"></span>+</h3>
                    <p className="counter-one__text">Expert Team Members</p>
                  </div>
                </div>
              </div>
              {/* Counter One Single End */}
              {/* Counter One Single Start */}
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="icon-trophy"></span>
                  </div>
                  <div className="counter-one__content count-box">
                    <h3 className="counter-one__count"><span className="count-text" data-stop="458" data-speed="1500"></span>+</h3>
                    <p className="counter-one__text">Creative Plus award</p>
                  </div>
                </div>
              </div>
              {/* Counter One Single End */}
            </div>
          </div>
          <div id="particles-js"></div>
        </section>
        {/* Counter One End */}

        {/* Team One Start */}
        <section className="team-one">
          <div className="team-one__shape-1 rotate-me">
            <img src="/itzone-technology-it-solutions-html5-template/assets/images/shapes/team-one-shape-1.png" alt="" />
          </div>
          <div className="team-one__shape-2 float-bob-x">
            <img src="/itzone-technology-it-solutions-html5-template/assets/images/shapes/team-one-shape-2.png" alt="" />
          </div>
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Our expert team</span>
              </div>
              <h2 className="section-title__title title-animation">We have world expert <span>team</span>
              </h2>
            </div>
            <div className="row">
              {/* Team One Single Start */}
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/team/team-1-1.jpg" alt="" />
                    </div>
                    <div className="team-one__arrow-and-social">
                      <div className="team-one__arrow">
                        <span className="icon-share"></span>
                      </div>
                      <ul className="team-one__social list-unstyled">
                        <li>
                          <a href="#"><span className="icon-facebook-app-symbol"></span></a>
                        </li>
                        <li>
                          <a href="#"><span className="icon-twitter"></span></a>
                        </li>
                        <li>
                          <a href="#"><span className="icon-pinterest"></span></a>
                        </li>
                        <li>
                          <a href="#"><span className="icon-linkedin"></span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-one__content">
                    <div className="team-one__content-bg-shape" style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/shapes/team-one-content-bg-shape.png)" }}></div>
                    <h3 className="team-one__name"><Link to="/team">James Carter</Link></h3>
                    <p className="team-one__sub-title">CEO & Founder</p>
                  </div>
                </div>
              </div>
              {/* Team One Single End */}
              {/* Team One Single Start */}
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/team/team-1-2.jpg" alt="" />
                    </div>
                    <div className="team-one__arrow-and-social">
                      <div className="team-one__arrow">
                        <span className="icon-share"></span>
                      </div>
                      <ul className="team-one__social list-unstyled">
                        <li>
                          <a href="#"><span className="icon-facebook-app-symbol"></span></a>
                        </li>
                        <li>
                          <a href="#"><span className="icon-twitter"></span></a>
                        </li>
                        <li>
                          <a href="#"><span className="icon-pinterest"></span></a>
                        </li>
                        <li>
                          <a href="#"><span className="icon-linkedin"></span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-one__content">
                    <div className="team-one__content-bg-shape" style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/shapes/team-one-content-bg-shape.png)" }}></div>
                    <h3 className="team-one__name"><Link to="/team">Emma Brooks</Link></h3>
                    <p className="team-one__sub-title">Project Manager</p>
                  </div>
                </div>
              </div>
              {/* Team One Single End */}
              {/* Team One Single Start */}
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/team/team-1-3.jpg" alt="" />
                    </div>
                    <div className="team-one__arrow-and-social">
                      <div className="team-one__arrow">
                        <span className="icon-share"></span>
                      </div>
                      <ul className="team-one__social list-unstyled">
                        <li>
                          <a href="#"><span className="icon-facebook-app-symbol"></span></a>
                        </li>
                        <li>
                          <a href="#"><span className="icon-twitter"></span></a>
                        </li>
                        <li>
                          <a href="#"><span className="icon-pinterest"></span></a>
                        </li>
                        <li>
                          <a href="#"><span className="icon-linkedin"></span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-one__content">
                    <div className="team-one__content-bg-shape" style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/shapes/team-one-content-bg-shape.png)" }}></div>
                    <h3 className="team-one__name"><Link to="/team">Jecika Brown</Link></h3>
                    <p className="team-one__sub-title">Cheif Expert</p>
                  </div>
                </div>
              </div>
              {/* Team One Single End */}
              {/* Team One Single Start */}
              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/team/team-1-4.jpg" alt="" />
                    </div>
                    <div className="team-one__arrow-and-social">
                      <div className="team-one__arrow">
                        <span className="icon-share"></span>
                      </div>
                      <ul className="team-one__social list-unstyled">
                        <li>
                          <a href="#"><span className="icon-facebook-app-symbol"></span></a>
                        </li>
                        <li>
                          <a href="#"><span className="icon-twitter"></span></a>
                        </li>
                        <li>
                          <a href="#"><span className="icon-pinterest"></span></a>
                        </li>
                        <li>
                          <a href="#"><span className="icon-linkedin"></span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-one__content">
                    <div className="team-one__content-bg-shape" style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/shapes/team-one-content-bg-shape.png)" }}></div>
                    <h3 className="team-one__name"><Link to="/team">Adam Smith</Link></h3>
                    <p className="team-one__sub-title">UI/UX Designer</p>
                  </div>
                </div>
              </div>
              {/* Team One Single End */}
            </div>
          </div>
        </section>
        {/* Team One End */}

        {/* Brand One Start */}
        <section className="brand-one">
          <div className="container">
            <div className="brand-one__inner">
              <div className="brand-one__carousel owl-theme owl-carousel">
                <div className="item">
                  <div className="brand-one__single">
                    <div className="brand-one__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/brand/brand-1-1.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="brand-one__single">
                    <div className="brand-one__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/brand/brand-1-2.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="brand-one__single">
                    <div className="brand-one__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/brand/brand-1-3.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="brand-one__single">
                    <div className="brand-one__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/brand/brand-1-4.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="brand-one__single">
                    <div className="brand-one__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/brand/brand-1-5.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Brand One End */}

        {/* Testimonial One Start */}
        <section className="testimonial-one">
          <div className="testimonial-one__bg-color">
            <div className="testimonial-one__bg" style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/backgrounds/testimonial-one-bg.jpg)" }}></div>
          </div>
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Testimonials</span>
              </div>
              <h2 className="section-title__title title-animation">What Client Say <span>About </span>us
              </h2>
            </div>
            <div className="testimonial-one__carousel owl-theme owl-carousel">
              {/* Testimonial One Single Start */}
              <div className="item">
                <div className="testimonial-one__single">
                  <div className="testimonial-one__single-inner">
                    <div className="testimonial-one__single-shape-1"></div>
                    <div className="testimonial-one__star">
                      <span className="icon-star-1"></span>
                      <span className="icon-star-1"></span>
                      <span className="icon-star-1"></span>
                      <span className="icon-star"></span>
                      <span className="icon-star"></span>
                    </div>
                    <p className="testimonial-one__text">Absolutely fantastic experience! The team exceeded our expectations and delivered a solution that perfectly met our needs. Their attention to detail and commitment to quality is unmatched.</p>
                  </div>
                  <div className="testimonial-one__client-info">
                    <div className="testimonial-one__client-img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/testimonial/testimonial-1-1.jpg" alt="" />
                    </div>
                    <div className="testimonial-one__client-content">
                      <h4 className="testimonial-one__client-name"><a href="#">Thomas Alison</a></h4>
                      <p className="testimonial-one__sub-title">UI/UX Designer</p>
                    </div>
                  </div>
                  <div className="testimonial-one__quote">
                    <span className="fal fa-quote-right"></span>
                  </div>
                </div>
              </div>
              {/* Testimonial One Single End */}
              {/* Testimonial One Single Start */}
              <div className="item">
                <div className="testimonial-one__single">
                  <div className="testimonial-one__single-inner">
                    <div className="testimonial-one__single-shape-1"></div>
                    <div className="testimonial-one__star">
                      <span className="icon-star-1"></span>
                      <span className="icon-star-1"></span>
                      <span className="icon-star-1"></span>
                      <span className="icon-star"></span>
                      <span className="icon-star"></span>
                    </div>
                    <p className="testimonial-one__text">Absolutely fantastic experience! The team exceeded our expectations and delivered a solution that perfectly met our needs. Their attention to detail and commitment to quality is unmatched.</p>
                  </div>
                  <div className="testimonial-one__client-info">
                    <div className="testimonial-one__client-img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/testimonial/testimonial-1-2.jpg" alt="" />
                    </div>
                    <div className="testimonial-one__client-content">
                      <h4 className="testimonial-one__client-name"><a href="#">Sarah Williams</a></h4>
                      <p className="testimonial-one__sub-title">Marketing Manger</p>
                    </div>
                  </div>
                  <div className="testimonial-one__quote">
                    <span className="fal fa-quote-right"></span>
                  </div>
                </div>
              </div>
              {/* Testimonial One Single End */}
              {/* Testimonial One Single Start */}
              <div className="item">
                <div className="testimonial-one__single">
                  <div className="testimonial-one__single-inner">
                    <div className="testimonial-one__single-shape-1"></div>
                    <div className="testimonial-one__star">
                      <span className="icon-star-1"></span>
                      <span className="icon-star-1"></span>
                      <span className="icon-star-1"></span>
                      <span className="icon-star"></span>
                      <span className="icon-star"></span>
                    </div>
                    <p className="testimonial-one__text">Absolutely fantastic experience! The team exceeded our expectations and delivered a solution that perfectly met our needs. Their attention to detail and commitment to quality is unmatched.</p>
                  </div>
                  <div className="testimonial-one__client-info">
                    <div className="testimonial-one__client-img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/testimonial/testimonial-1-3.jpg" alt="" />
                    </div>
                    <div className="testimonial-one__client-content">
                      <h4 className="testimonial-one__client-name"><a href="#">James Anderson</a></h4>
                      <p className="testimonial-one__sub-title">CEO at Anaton</p>
                    </div>
                  </div>
                  <div className="testimonial-one__quote">
                    <span className="fal fa-quote-right"></span>
                  </div>
                </div>
              </div>
              {/* Testimonial One Single End */}
            </div>
          </div>
        </section>
        {/* Testimonial One End */}

        {/* Contact One Start */}
        <section className="contact-one">
          <div className="contact-one__shape-1 float-bob-x">
            <img src="/itzone-technology-it-solutions-html5-template/assets/images/shapes/contact-one-shape-1.png" alt="" />
          </div>
          <div className="contact-one__shape-2"></div>
          <div className="container">
            <div className="row">
              {/* Contact One Left Start */}
              <div className="col-xl-6 col-lg-6">
                <div className="contact-one__left">
                  <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">Get In Touch</span>
                    </div>
                    <h2 className="section-title__title title-animation">Let's Talk About Business <span>Solutions</span> With Us
                    </h2>
                  </div>
                  <div className="contact-one__img-and-content">
                    <div className="contact-one__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/contact-one-img-1.jpg" alt="" />
                    </div>
                    <div className="contact-one__content">
                      <p className="contact-one__text">We're here to listen! Whether you have questions, feedback, or just want to say hello, feel free to reach out.</p>
                      <div className="contact-one__call-box">
                        <div className="icon">
                          <span className="icon-call"></span>
                        </div>
                        <div className="content">
                          <p>Call Us Any Time</p>
                          <h3><a href="tel:0882466422710">+088 (246) 642-27-10</a></h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact One Left End */}
              {/* Contact One Right Start */}
              <div className="col-xl-6 col-lg-6">
                <div className="contact-one__right">
                  <form className="contact-form-validated contact-one__form">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <h4 className="contact-one__input-title">Full Name</h4>
                        <div className="contact-one__input-box">
                          <div className="contact-one__input-icon">
                            <span className="icon-user"></span>
                          </div>
                          <input type="text" name="name" placeholder="Thomas Alison" required />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <h4 className="contact-one__input-title">Email Address</h4>
                        <div className="contact-one__input-box">
                          <div className="contact-one__input-icon">
                            <span className="icon-mail"></span>
                          </div>
                          <input type="email" name="email" placeholder="thomas@domain.com" required />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <h4 className="contact-one__input-title">Phone Number</h4>
                        <div className="contact-one__input-box">
                          <div className="contact-one__input-icon">
                            <span className="icon-phone-call"></span>
                          </div>
                          <input type="text" name="Phone" placeholder="+12 (00) 123 4567 890" required />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <h4 className="contact-one__input-title">Subject</h4>
                        <div className="contact-one__input-box">
                          <div className="contact-one__input-icon">
                            <span className="icon-edit"></span>
                          </div>
                          <input type="text" name="subject" placeholder="Subject" required />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <h4 className="contact-one__input-title">Inquiry about </h4>
                      <div className="contact-one__input-box text-message-box">
                        <div className="contact-one__input-icon">
                          <span className="icon-edit"></span>
                        </div>
                        <textarea name="message" placeholder="Write your message" required></textarea>
                      </div>
                      <div className="contact-one__btn-box">
                        <button type="submit" className="thm-btn">Submit Now
                          <span className="fas fa-arrow-right"></span></button>
                      </div>
                    </div>
                    <div className="result"></div>
                  </form>
                </div>
              </div>
              {/* Contact One Right End */}
            </div>
          </div>
        </section>
        {/* Contact One End */}

        {/* Pricing One Start */}
        <section className="pricing-one">
          <div className="pricing-one__shape-1"></div>
          <div className="pricing-one__shape-2 float-bob-y">
            <img src="/itzone-technology-it-solutions-html5-template/assets/images/shapes/pricing-one-shape-2.png" alt="" />
          </div>
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Our Pricing Plan</span>
              </div>
              <h2 className="section-title__title title-animation">Popular Pricing <span>Package</span>
              </h2>
            </div>
            <div className="row">
              {/* Pricing One Single Start */}
              <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                <div className="pricing-one__single">
                  <div className="pricing-one__price-box">
                    <div className="pricing-one__price-box-shape" style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/shapes/pricing-one-price-box-shape-1.png)" }}></div>
                    <span>Basic Plan</span>
                    <h3 className="pricing-one__price">$35.00</h3>
                    <p className="pricing-one__price-sub-title">Get Popular Plan From Us</p>
                  </div>
                  <div className="pricing-one__points-and-btn">
                    <ul className="pricing-one__price-points list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Multi-Language Content</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Programmable Chatbots</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Digital Analysis</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Social Media Marketing</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Technical Support</p>
                      </li>
                    </ul>
                    <div className="pricing-one__btn-box">
                      <Link to="/contact" className="thm-btn">Choose Plan
                        <span className="fas fa-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pricing One Single End */}
              {/* Pricing One Single Start */}
              <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                <div className="pricing-one__single">
                  <div className="pricing-one__single-shape-1"></div>
                  <div className="pricing-one__price-box">
                    <div className="pricing-one__price-box-shape" style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/shapes/pricing-one-price-box-shape-1.png)" }}></div>
                    <div className="pricing-one__recomanded">
                      <span>Recommended</span>
                    </div>
                    <span>Standard Plan</span>
                    <h3 className="pricing-one__price">$75.00</h3>
                    <p className="pricing-one__price-sub-title">Get Popular Plan From Us</p>
                  </div>
                  <div className="pricing-one__points-and-btn">
                    <ul className="pricing-one__price-points list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Multi-Language Content</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Programmable Chatbots</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Digital Analysis</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Social Media Marketing</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Technical Support</p>
                      </li>
                    </ul>
                    <div className="pricing-one__btn-box">
                      <Link to="/contact" className="thm-btn">Choose Plan
                        <span className="fas fa-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pricing One Single End */}
              {/* Pricing One Single Start */}
              <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                <div className="pricing-one__single">
                  <div className="pricing-one__price-box">
                    <div className="pricing-one__price-box-shape" style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/shapes/pricing-one-price-box-shape-1.png)" }}></div>
                    <span>Premium Plan</span>
                    <h3 className="pricing-one__price">$93.00</h3>
                    <p className="pricing-one__price-sub-title">Get Popular Plan From Us</p>
                  </div>
                  <div className="pricing-one__points-and-btn">
                    <ul className="pricing-one__price-points list-unstyled">
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Multi-Language Content</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Programmable Chatbots</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Digital Analysis</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Social Media Marketing</p>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-check"></span>
                        </div>
                        <p>Technical Support</p>
                      </li>
                    </ul>
                    <div className="pricing-one__btn-box">
                      <Link to="/contact" className="thm-btn">Choose Plan
                        <span className="fas fa-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pricing One Single End */}
            </div>
          </div>
        </section>
        {/* Pricing One End */}

        {/* FAQ One Start */}
        <section className="faq-one">
          <div className="faq-one__shape-2 float-bob-y">
            <img src="/itzone-technology-it-solutions-html5-template/assets/images/shapes/faq-one-shape-2.png" alt="" />
          </div>
          <div className="faq-one__shape-3 float-bob">
            <img src="/itzone-technology-it-solutions-html5-template/assets/images/shapes/faq-one-shape-3.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="faq-one__left">
                  <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                      <span className="section-title__tagline">Frequently Ask Question</span>
                    </div>
                    <h2 className="section-title__title title-animation">Have Questions in <span>Your Mind?</span> Get the Answers Now
                    </h2>
                  </div>
                  <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>How long should a business plan be</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do. Let us be your trusted partner in achieving success.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accrodion active">
                      <div className="accrodion-title">
                        <h4>Do I need a business plan?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do. Let us be your trusted partner in achieving success.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>How to Soft Launch Your Business?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do. Let us be your trusted partner in achieving success.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accrodion">
                      <div className="accrodion-title">
                        <h4>How Can I Find My Solution?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>From personalized solutions to expert execution, we prioritize quality, reliability, and customer satisfaction in everything we do. Let us be your trusted partner in achieving success.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="faq-one__right wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                  <div className="faq-one__img-box">
                    <div className="faq-one__shape-1 float-bob-y">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/shapes/faq-one-shape-1.png" alt="" />
                    </div>
                    <div className="faq-one__experience-box">
                      <div className="faq-one__experience-year">
                        <h2 className="odometer" data-count="55">00</h2>
                      </div>
                      <p className="faq-one__experience-text">Year of <br /> experience</p>
                    </div>
                    <div className="faq-one__img">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/faq-one-img-1.jpg" alt="" />
                    </div>
                    <div className="faq-one__img-2">
                      <img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/faq-one-img-2.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ One End */}

        {/* Blog One Start */}
        <section className="blog-one">
          <div className="blog-one__shape-1"></div>
          <div className="blog-one__shape-2"></div>
          <div className="blog-one__shape-3 float-bob">
            <img src="/itzone-technology-it-solutions-html5-template/assets/images/shapes/blog-one-shape-3.png" alt="" />
          </div>
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Our Blogs</span>
              </div>
              <h2 className="section-title__title title-animation">Latest News & Articles From
                <br /> The <span>Blog Posts</span>
              </h2>
            </div>
            <div className="row">
              {/* Blog One Single Start */}
              <div className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
                <div className="blog-one__single">
                  <div className="blog-one__img">
                    <img src="/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-1-1.jpg" alt="" />
                    <div className="blog-one__tags">
                      <span>Digital</span>
                      <span>Technology</span>
                    </div>
                  </div>
                  <div className="blog-one__content">
                    <div className="blog-one__user">
                      <div className="blog-one__user-img">
                        <img src="/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-one-user-1.jpg" alt="" />
                      </div>
                      <p className="blog-one__user-title">Malaika alise</p>
                    </div>
                    <ul className="blog-one__meta list-unstyled">
                      <li>
                        <Link to="/blog"><span className="far fa-calendar-alt"></span>April 5, 2025</Link>
                      </li>
                      <li>
                        <Link to="/blog"><span className="fal fa-comments"></span>80 Comments</Link>
                      </li>
                    </ul>
                    <h3 className="blog-one__title"><Link to="/blog">Improving Business Growth with New<br /> Technology</Link></h3>
                    <p className="blog-one__text">Winning the Digital business The 2025 Transformation Roadmap. Holisticly leverage existing magnetic. Next-Gen Digital Transformation</p>
                    <div className="blog-one__btn-box">
                      <Link to="/blog" className="thm-btn">Reed More
                        <span className="fas fa-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Blog One Single End */}
              <div className="col-xl-6">
                {/* Blog One Single Two Start */}
                <div className="blog-one__single-two wow fadeInUp" data-wow-delay="200ms">
                  <div className="blog-one__img-two">
                    <img src="/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-1-2.jpg" alt="" />
                    <div className="blog-one__tags-two">
                      <span>Digital</span>
                      <span>Technology</span>
                    </div>
                  </div>
                  <div className="blog-one__content-two">
                    <div className="blog-one__user-two">
                      <div className="blog-one__user-two-img">
                        <img src="/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-one-user-2.jpg" alt="" />
                      </div>
                      <p className="blog-one__user-two-title">John Smith</p>
                    </div>
                    <ul className="blog-one__meta-two list-unstyled">
                      <li>
                        <Link to="/blog"><span className="far fa-calendar-alt"></span>Feb 25, 2025</Link>
                      </li>
                      <li>
                        <Link to="/blog"><span className="fal fa-comments"></span>22 Comments</Link>
                      </li>
                    </ul>
                    <h3 className="blog-one__title-two"><Link to="/blog">Regional Manager & limited management.</Link></h3>
                    <p className="blog-one__text-two">Winning the Digital business The 2025 Transformation Roadmap.</p>
                    <div className="blog-one__btn-box-two">
                      <Link to="/blog" className="thm-btn">Reed More
                        <span className="fas fa-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Blog One Single Two End */}
                {/* Blog One Single Two Start */}
                <div className="blog-one__single-two wow fadeInUp" data-wow-delay="300ms">
                  <div className="blog-one__img-two">
                    <img src="/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-1-3.jpg" alt="" />
                    <div className="blog-one__tags-two">
                      <span>Digital</span>
                      <span>Technology</span>
                    </div>
                  </div>
                  <div className="blog-one__content-two">
                    <div className="blog-one__user-two">
                      <div className="blog-one__user-two-img">
                        <img src="/itzone-technology-it-solutions-html5-template/assets/images/blog/blog-one-user-3.jpg" alt="" />
                      </div>
                      <p className="blog-one__user-two-title">Jerin jara</p>
                    </div>
                    <ul className="blog-one__meta-two list-unstyled">
                      <li>
                        <Link to="/blog"><span className="far fa-calendar-alt"></span>May 19, 2025</Link>
                      </li>
                      <li>
                        <Link to="/blog"><span className="fal fa-comments"></span>15 Comments</Link>
                      </li>
                    </ul>
                    <h3 className="blog-one__title-two"><Link to="/blog">Easy and Most Powerful Server and Platform.</Link></h3>
                    <p className="blog-one__text-two">Winning the Digital business The 2025 Transformation Roadmap.</p>
                    <div className="blog-one__btn-box-two">
                      <Link to="/blog" className="thm-btn">Reed More
                        <span className="fas fa-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Blog One Single Two End */}
              </div>
            </div>
          </div>
        </section>
        {/* Blog One End */}

        <Footer />
      </div>

      <MobileNav />
      <SearchPopup />
      <ScrollToTop />
    </div>
  );
};

export default Home;
