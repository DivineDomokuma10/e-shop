import { BLOG_POSTS_DATA } from "@/lib/constants";
import BlogCard from "../blog-cards";
import SectionHeaders from "../section-headers";

const Blog = () => {
  return (
    <section className="w-full flex flex-col space-y-20 px-5 py-10 md:px-36">
      <SectionHeaders subTitle="Blog Posts" title="Blogs and Events" />

      <div className="w-full flex flex-col space-y-5 items-center md:items-start md:space-y-0 md:justify-between md:flex-row">
        {BLOG_POSTS_DATA.map((blogPost, i) => (
          <BlogCard key={`${blogPost.title}-${i}`} {...blogPost} />
        ))}
      </div>
    </section>
  );
};

export default Blog;

// w-full flex flex-col items-center
