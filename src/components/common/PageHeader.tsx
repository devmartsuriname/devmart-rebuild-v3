import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
}

const PageHeader = ({ title, breadcrumb }: PageHeaderProps) => {
  return (
    <section className="page-header">
      <div className="page-header__bg" style={{ backgroundImage: "url(/itzone-technology-it-solutions-html5-template/assets/images/backgrounds/page-header-bg.jpg)" }}>
      </div>
      <div className="container">
        <div className="page-header__inner">
          <h3>{title}</h3>
          <div className="thm-breadcrumb__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><span className="icon-arrow-angle-pointing-to-right"></span></li>
              <li>{breadcrumb}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
