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
import { teamMembers } from "@/data/teamData";

const Team = () => {
  return (
    <div className="custom-cursor">
      <CustomCursor />
      <Preloader />
      <ChatPopup />
      
      <div className="page-wrapper">
        <Header />

        <PageHeader title="Team Members" breadcrumb="Team Members" />

        {/* Team Page Start */}
        <section className="team-page">
          <div className="container">
            <div className="row">
              {teamMembers.map((member) => (
                <div key={member.id} className="col-xl-3 col-lg-6 col-md-6">
                  <div className="team-two__single">
                    <div className="team-two__img-box">
                      <div className="team-two__img">
                        <img src={member.image} alt="" />
                      </div>
                    </div>
                    <div className="team-two__content-inner">
                      <div className="team-two__content">
                        <h3 className="team-two__title"><Link to={`/team/${member.slug}`}>{member.name}</Link></h3>
                        <p className="team-two__sub-title">{member.position}</p>
                      </div>
                      <div className="team-two__arrow-and-social">
                        <div className="team-two__arrow">
                          <span className="icon-share"></span>
                        </div>
                        <ul className="team-two__social list-unstyled">
                          <li>
                            <a href={member.social.facebook}><span className="icon-facebook-app-symbol"></span></a>
                          </li>
                          <li>
                            <a href={member.social.twitter}><span className="icon-twitter-1"></span></a>
                          </li>
                          <li>
                            <a href={member.social.pinterest}><span className="icon-pinterest"></span></a>
                          </li>
                          <li>
                            <a href={member.social.linkedin}><span className="icon-linkedin"></span></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Team Page End */}

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

export default Team;
