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
import { projects } from "@/data/projectsData";

const Projects = () => {
  return (
    <div className="custom-cursor">
      <CustomCursor />
      <Preloader />
      <ChatPopup />
      
      <div className="page-wrapper">
        <Header />

        <PageHeader title="projects" breadcrumb="projects" />

        {/* Project Page Start */}
        <section className="project-page">
          <div className="container">
            <div className="row">
              {projects.map((project, index) => (
                <div key={project.id} className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay={`${(index + 1) * 100}ms`}>
                  <div className="project-two__single">
                    <div className="project-two__img-box">
                      <div className="project-two__img">
                        <img src={project.image} alt="" />
                        <div className="project-two__arrow">
                          <a href={project.image} className="img-popup"><span className="fas fa-arrow-right"></span></a>
                        </div>
                      </div>
                      <div className="project-two__content">
                        <h3 className="project-two__title"><Link to={`/projects/${project.slug}`}>{project.title}</Link>
                        </h3>
                        <p className="project-two__sub-title">{project.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Project Page End */}

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

export default Projects;
