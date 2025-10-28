import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { teamMembers } from "@/data/teamData";

const TeamDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = teamMembers.find(m => m.slug === slug);

  if (!member) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{member.name} || Itzone || IT Solutions Template</title>
        <meta name="description" content={`${member.name} - ${member.position}`} />
      </Helmet>

      {/* Team Details content will be rendered by the HTML template */}
      <div dangerouslySetInnerHTML={{ 
        __html: `
          <iframe 
            src="/itzone-technology-it-solutions-html5-template/team-details.html" 
            style="width: 100%; height: 100vh; border: none; display: block;"
            title="${member.name}"
          ></iframe>
        `
      }} />
    </>
  );
};

export default TeamDetails;
