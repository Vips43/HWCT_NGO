// 1. Import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// 2. Import Swiper styles (CRITICAL: It will look broken without these)
import "swiper/css";
import "swiper/css/pagination";

function Cards({ data }) {
  return (
    <article className="group bg-main-bg-700 flex flex-col w-full overflow-hidden rounded-2xl border border-white/5 hover:border-primary-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 cursor-pointer">
      <figure className="relative h-56 w-full overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          {data.img.map((im, i) => (
            <SwiperSlide key={i}>
              <img
                src={im}
                alt={`${data.title} - ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute inset-0 bg-linear-to-t from-main-bg-700 via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
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

        <p className="text-sm leading-tight text-main-text/70 line-clamp-5 flex-1">
          {data.description}
        </p>

      </div>
    </article>
  );
}

export default Cards;
