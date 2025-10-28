import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { services } from "@/data/servicesData";

const ServiceDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{service.title} || Itzone || IT Solutions Template</title>
        <meta name="description" content={service.description} />
      </Helmet>

      {/* Service Details content will be rendered by the HTML template */}
      <div dangerouslySetInnerHTML={{ 
        __html: `
          <iframe 
            src="/itzone-technology-it-solutions-html5-template/${service.slug}.html" 
            style="width: 100%; height: 100vh; border: none; display: block;"
            title="${service.title}"
          ></iframe>
        `
      }} />
    </>
  );
};

export default ServiceDetails;
