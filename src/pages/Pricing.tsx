import { Helmet } from "react-helmet";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing || Itzone || IT Solutions Template</title>
        <meta name="description" content="Our competitive pricing plans for IT solutions" />
      </Helmet>

      {/* Pricing content will be rendered by the HTML template */}
      <div dangerouslySetInnerHTML={{ 
        __html: `
          <iframe 
            src="/itzone-technology-it-solutions-html5-template/pricing.html" 
            style="width: 100%; height: 100vh; border: none; display: block;"
            title="Pricing"
          ></iframe>
        `
      }} />
    </>
  );
};

export default Pricing;
