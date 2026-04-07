function Cards({ data }) {
  return (
    <article className="group bg-main-bg-700 flex flex-col w-full overflow-hidden rounded-2xl border border-white/5 hover:border-primary-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 cursor-pointer">
      <figure className="relative h-56 w-full overflow-hidden">
        <img
          src={data.img}
          alt={data.title}
          className="absolute inset-0 h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
        {/* Note: if bg-linear-to-t isn't working in your Tailwind version, change it to bg-gradient-to-t */}
        <div className="absolute inset-0 bg-linear-to-t from-main-bg-700 via-transparent to-transparent opacity-80" />
      </figure>

      <div className="flex flex-1 flex-col p-6 space-y-4">
        <header className="space-y-3">
          {data.label && (
            <div className="bg-primary-500/10 border border-primary-500/20 text-primary-500 flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider">
              <span
                className="h-1.5 w-1.5 rounded-full bg-primary-500"
                aria-hidden="true"
              />
              {data.label}
            </div>
          )}

          <a href={data.link} className="block">
            <h4 className="text-2xl font-bold leading-snug text-main-text group-hover:text-primary-400 transition-colors duration-300">
              {data.title}
            </h4>
          </a>
        </header>

        {/* Description is now always visible since the toggle is gone */}
        <p className="text-sm leading-tight text-main-text/70 line-clamp-5 flex-1">
          {data.description}
        </p>

      </div>
    </article>
  );
}

export default Cards;
