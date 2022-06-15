import BreadcrumbsBlogs from "./breadcrumbs";
import Blog from "./BlogPage";
const BlogPage=() =>{
  return (
    <section className="container mt-0">
      <BreadcrumbsBlogs />
      <Blog/>
    </section>
  );
}

export default BlogPage;
