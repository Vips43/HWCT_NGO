import { blogs } from "../data/data";

function Blogs() {
  return (
    <section id="blogs" className="w-full mx-auto py-16 px-6 md:px-12 lg:px-16 overflow-hidden bg-linear-to-r from-main-bg-700 to-primary-700">
      <div className="flex items-center justify-between mb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-1 w-10 bg-primary-500 rounded-full"></div>
            <h3 className="text-primary-500 font-bold uppercase tracking-widest text-sm">
              Updates & Stories
            </h3>
            
          </div>
          <h2 className="text-4xl font-bold text-main-text">Latest Blogs</h2>
        </div>

        <button className="hidden md:block text-primary-500 font-semibold hover:text-primary-400 hover:underline transition-all">
          View All Stories &rarr;
        </button>
      </div>

      <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hidden">
        {blogs.map((blog, index) => (
          <article
            key={index}
            className="w-[85vw] md:w-80 lg:w-96 shrink-0 snap-start group bg-main-bg-700 rounded-2xl  hover:border-primary-500/30 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 cursor-pointer"
          >
            <figure className="relative h-48 md:h-56 w-full overflow-hidden bg-main-bg-900">
              <img
                src={blog.img}
                alt={blog.title}
                className="absolute inset-0 h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-main-bg-700 to-transparent opacity-90" />
            </figure>

            <div className="p-6 flex flex-col flex-1 space-y-4">
              <h4 className="font-bold text-xl text-main-text leading-snug group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">
                {blog.title}
              </h4>

              <p className="text-main-text/70 text-sm leading-relaxed line-clamp-3 flex-1">
                {blog.description}
              </p>

              <a
                href={blog.link}
                className="pt-4 border-t border-white/5 flex items-center justify-between text-sm font-bold text-primary-500 group-hover:text-primary-400 transition-colors mt-auto"
              >
                <span>Read Article</span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
