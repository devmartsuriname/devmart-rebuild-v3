import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import ChatPopup from "@/components/common/ChatPopup";
import SearchPopup from "@/components/common/SearchPopup";
import ScrollToTop from "@/components/common/ScrollToTop";
import Preloader from "@/components/common/Preloader";
import CustomCursor from "@/components/common/CustomCursor";
import PageHeader from "@/components/common/PageHeader";

const Contact = () => {
  return (
    <div className="custom-cursor">
      <CustomCursor />
      <Preloader />
      <ChatPopup />
      
      <div className="page-wrapper">
        <Header />

        <PageHeader title="Contact" breadcrumb="Contact" />

        {/* Contact Info Start */}
        <section className="contact-info">
          <div className="container">
            <div className="row">
              {/* Contact Two Single Start */}
              <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                <div className="contact-info__single">
                  <div className="contact-info__icon">
                    <span className="icon-call"></span>
                  </div>
                  <p>Contact Us</p>
                  <h3><a href="tel:558270575405">+55 827 057 5405</a></h3>
                </div>
              </div>
              {/* Contact Two Single End */}
              {/* Contact Two Single Start */}
              <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                <div className="contact-info__single">
                  <div className="contact-info__icon">
                    <span className="icon-email"></span>
                  </div>
                  <p>Email Us</p>
                  <h3><a href="mailto:example@gamil.com">example@gamil.com</a></h3>
                </div>
              </div>
              {/* Contact Two Single End */}
              {/* Contact Two Single Start */}
              <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                <div className="contact-info__single">
                  <div className="contact-info__icon">
                    <span className="icon-pin"></span>
                  </div>
                  <p>Our Office Location</p>
                  <h3>12 Green Road 05 New Yark</h3>
                </div>
              </div>
              {/* Contact Two Single End */}
            </div>
          </div>
        </section>
        {/* Contact Info End */}

        {/* Contact Page Start */}
        <section className="contact-page">
          <div className="container">
            <div className="contact-page__inner">
              <div className="contact-page__bg-shape"
                style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/shapes/contact-page-bg-shape.png)" }}></div>
              <div className="row">
                <div className="col-xl-6">
                  <div className="contact-page__left">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                      className="google-map__one" allowFullScreen></iframe>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="contact-page__right">
                    <h3 className="contact-page__form-title">Get A Free Quote</h3>
                    <form id="contact-form" className="contact-form-validated contact-page__form"
                      action="assets/inc/sendemail.php" method="POST">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="contact-page__input-box">
                            <input type="text" name="name" placeholder="Your name" required />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="contact-page__input-box">
                            <input type="email" name="email" placeholder="Your Email" required />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="contact-page__input-box">
                            <input type="text" placeholder="Mobile" name="phone" required />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="contact-page__input-box">
                            <input type="text" placeholder="Subject" name="subject" required />
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="contact-page__input-box text-message-box">
                            <textarea name="message" placeholder="Messege" required></textarea>
                          </div>
                          <div className="contact-page__btn-box">
                            <button type="submit" className="thm-btn contact-page__btn"
                              data-loading-text="Please wait...">Send A Message
                              <span className="fas fa-arrow-right"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="result"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Page End */}

        {/* Newsletter Two Start */}
        <section className="newsletter-two">
          <div className="container">
            <div className="newsletter-two__inner">
              <div className="newsletter-two__shape-1"
                style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/shapes/newsletter-two-shape-1.png)" }}></div>
              <div className="newsletter-two__img-1">
                <img src="/itzone-technology-it-solutions-html5-template/assets/images/resources/newsletter-two-img-1.png" alt="" />
              </div>
              <div className="newsletter-two__left">
                <h2 className="newsletter-two__title">Subcribe to Our Newsletter</h2>
                <p className="newsletter-two__text">Get the latest SEO tips and software insights straight to your
                  inbox.</p>
              </div>
              <div className="newsletter-two__right">
                <form className="contact-form-validated newsletter-two__form" action="assets/inc/sendemail.php"
                  method="post">
                  <div className="newsletter-two__input">
                    <input type="email" placeholder="Enter email address" name="email" required />
                  </div>
                  <button type="submit" className="thm-btn">Subscribe Now
                    <span className="fas fa-arrow-right"></span>
                  </button>
                </form>
                <div className="result"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Newsletter Two End */}

        <Footer />
      </div>

      <MobileNav />
      <SearchPopup />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
