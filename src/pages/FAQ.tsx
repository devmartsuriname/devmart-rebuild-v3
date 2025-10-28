import { Helmet } from "react-helmet";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ || Itzone || IT Solutions Template</title>
        <meta name="description" content="Frequently asked questions about our IT solutions and services" />
      </Helmet>

      {/* FAQ content will be rendered by the HTML template */}
      <div dangerouslySetInnerHTML={{ 
        __html: `
          <iframe 
            src="/itzone-technology-it-solutions-html5-template/faq.html" 
            style="width: 100%; height: 100vh; border: none; display: block;"
            title="FAQ"
          ></iframe>
        `
      }} />
    </>
  );
};

export default FAQ;
