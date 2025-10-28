import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { projects } from "@/data/projectsData";

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{project.title} || Itzone || IT Solutions Template</title>
        <meta name="description" content={`${project.title} - ${project.category}`} />
      </Helmet>

      {/* Project Details content will be rendered by the HTML template */}
      <div dangerouslySetInnerHTML={{ 
        __html: `
          <iframe 
            src="/itzone-technology-it-solutions-html5-template/project-details.html" 
            style="width: 100%; height: 100vh; border: none; display: block;"
            title="${project.title}"
          ></iframe>
        `
      }} />
    </>
  );
};

export default ProjectDetails;
