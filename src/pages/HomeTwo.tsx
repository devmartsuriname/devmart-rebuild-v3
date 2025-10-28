import { Helmet } from "react-helmet";

const HomeTwo = () => {
  return (
    <>
      <Helmet>
        <title>Home Two || Itzone || IT Solutions Template</title>
        <meta name="description" content="Itzone IT Solutions - Home Two" />
      </Helmet>

      {/* Home Two content will be rendered by the HTML template */}
      <div dangerouslySetInnerHTML={{ 
        __html: `
          <iframe 
            src="/itzone-technology-it-solutions-html5-template/index2.html" 
            style="width: 100%; height: 100vh; border: none; display: block;"
            title="Home Two"
          ></iframe>
        `
      }} />
    </>
  );
};

export default HomeTwo;
