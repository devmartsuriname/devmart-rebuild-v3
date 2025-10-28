import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { blogPosts } from "@/data/blogData";

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} || Itzone || IT Solutions Template</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Blog Details content will be rendered by the HTML template */}
      <div dangerouslySetInnerHTML={{ 
        __html: `
          <iframe 
            src="/itzone-technology-it-solutions-html5-template/blog-details.html" 
            style="width: 100%; height: 100vh; border: none; display: block;"
            title="${post.title}"
          ></iframe>
        `
      }} />
    </>
  );
};

export default BlogDetails;
