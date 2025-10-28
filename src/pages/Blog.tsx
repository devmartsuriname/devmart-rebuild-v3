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
import { blogPosts } from "@/data/blogData";

const Blog = () => {
  return (
    <div className="custom-cursor">
      <CustomCursor />
      <Preloader />
      <ChatPopup />
      
      <div className="page-wrapper">
        <Header />

        <PageHeader title="Blog" breadcrumb="Blog" />

        {/* Blog Page Start */}
        <section className="blog-page">
          <div className="container">
            <div className="row">
              {blogPosts.map((post, index) => (
                <div key={post.id} className={`col-xl-4 col-lg-6 col-md-6 wow ${index % 3 === 0 ? 'fadeInLeft' : index % 3 === 1 ? 'fadeInUp' : 'fadeInRight'}`} data-wow-delay={`${(index % 3 + 1) * 100}ms`}>
                  <div className="blog-one__single">
                    <div className="blog-one__img">
                      <img src={post.image} alt="" />
                      <div className="blog-one__tags">
                        {post.tags.map((tag, i) => (
                          <span key={i}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="blog-one__content">
                      <div className="blog-one__user">
                        <div className="blog-one__user-img">
                          <img src={post.author.image} alt="" />
                        </div>
                        <p className="blog-one__user-title">{post.author.name}</p>
                      </div>
                      <ul className="blog-one__meta list-unstyled">
                        <li>
                          <Link to={`/blog/${post.slug}`}><span className="far fa-calendar-alt"></span>{post.date}</Link>
                        </li>
                        <li>
                          <Link to={`/blog/${post.slug}`}><span className="fal fa-comments"></span>{post.comments} Comments</Link>
                        </li>
                      </ul>
                      <h3 className="blog-one__title"><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
                      <div className="blog-one__btn-box">
                        <Link to={`/blog/${post.slug}`} className="thm-btn">Reed More
                          <span className="fas fa-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Blog Page End */}

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

export default Blog;
