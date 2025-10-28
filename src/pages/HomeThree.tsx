import { Helmet } from "react-helmet";

const HomeThree = () => {
  return (
    <>
      <Helmet>
        <title>Home Three || Itzone || IT Solutions Template</title>
        <meta name="description" content="Itzone IT Solutions - Home Three" />
      </Helmet>

      {/* Home Three content will be rendered by the HTML template */}
      <div dangerouslySetInnerHTML={{ 
        __html: `
          <iframe 
            src="/itzone-technology-it-solutions-html5-template/index3.html" 
            style="width: 100%; height: 100vh; border: none; display: block;"
            title="Home Three"
          ></iframe>
        `
      }} />
    </>
  );
};

export default HomeThree;
