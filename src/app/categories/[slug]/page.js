import { slug } from "github-slugger";
import { allBlogs } from "../../../../.contentlayer/generated";
import Categories from "../../../components/Blog/Categories";
import BlogLayoutThree from "../../../components/Blog/BlogLayoutThree";



const CategoryPage = ({params}) => {

    /* We want to filter all the tags as per params.slug */
    const allCategories = ["all"];

    /* for each tag, sluggify the tag 
       if category is not in allCategories -> add it
       if params.slug === all, then return true for all tags
    */
    const blogs = allBlogs.filter((blog) => {
        return blog.tags.some(tag => {
            const slugifiedTag = slug(tag);
            if(!allCategories.includes(slugifiedTag)){
                allCategories.push(slugifiedTag)
            }
            if(params.slug === "all"){
                return true
            }
            return slugifiedTag === params.slug
        })
    })

    return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
        <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
            <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
                #{params.slug}
            </h1>
            <span className="mt-2 inline-block">
                Discover more categories and expand your knowledge!
            </span>
        </div>
        <Categories categories={allCategories} currentSlug={params.slug} /> 

        <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
            {blogs.map((blog, index) => (
            <article key={index} className="col-span-1 row-span-1 relative">
                <BlogLayoutThree blog={blog} />
            </article>
            ))}
        </div>
    </article>)
}

export default CategoryPage