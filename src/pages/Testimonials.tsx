import { Helmet } from "react-helmet";

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials || Itzone || IT Solutions Template</title>
        <meta name="description" content="What our clients say about our IT solutions and services" />
      </Helmet>

      {/* Testimonials content will be rendered by the HTML template */}
      <div dangerouslySetInnerHTML={{ 
        __html: `
          <iframe 
            src="/itzone-technology-it-solutions-html5-template/testimonials.html" 
            style="width: 100%; height: 100vh; border: none; display: block;"
            title="Testimonials"
          ></iframe>
        `
      }} />
    </>
  );
};

export default Testimonials;
