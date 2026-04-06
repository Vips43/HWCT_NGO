import { useState } from "react";

function Cards({ data }) {
  const [toggle, setToggle] = useState(true);
  const [amt, setAmt] = useState(null);

  const handleClick = (e) => {
    const container = e.target.closest(".radio");

    if (container) {
      const label = container.querySelector("label");
      const input = container.querySelector("input");
      const amount = label.dataset.price;
      setAmt(amount);
    }
  };

  return (
    <article className="group bg-main-bg-700 flex flex-col w-full overflow-hidden rounded-2xl border border-white/5 hover:border-primary-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 cursor-pointer">
      <figure className="relative h-56 w-full overflow-hidden">
        <img
          src={data.img}
          alt={data.title}
          className="absolute inset-0 h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
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

        {toggle && (
          <p className="text-sm leading-relaxed text-main-text/70 line-clamp-5 flex-1">
            {data.description}
          </p>
        )}

        {data.causes && (
          <div className="">
            <button
              type="button"
              onClick={() => setToggle(!toggle)}
              className="text-sm font-semibold text-primary-500 hover:text-primary-400 transition-colors flex items-center gap-2 outline-none"
            >
              {toggle ? "Choose a specific cause" : "View Description"}
              <span
                className={`transform transition-transform ${toggle ? "rotate-0" : "rotate-180"}`}
              >
                ↓
              </span>
            </button>

            <div
              className={`${toggle ? "hidden" : "grid"} text-main-text/80 text-xs`}
              onChange={handleClick}
            >
              {data.causes.map((cause) => (
                <div
                  key={cause.id}
                  className="mt-3 radio flex items-center gap-2"
                >
                  <input
                    type="radio"
                    name={data.label}
                    value={100}
                    id={cause.id}
                    className="peer w-4 h-4 accent-primary-500 cursor-pointer"
                  /> 
                  <label
                    htmlFor={cause.id}
                    data-price={cause.amt}
                    className="cursor-pointer transition-colors duration-200 peer-checked:text-primary-400 peer-checked:font-semibold"
                  >
                    {cause.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.btnlabel && (
          <footer className="pt-4 border-t border-white/10 mt-auto">
            <a
              href={data.donation || data.link}
              className="flex items-center justify-center w-full rounded-xl bg-primary-500 py-3 text-sm font-bold text-main-bg-900 transition-all duration-300 hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/20 active:scale-95"
            >
              {data.btnlabel} {amt && " - " + amt }
            </a>
          </footer>
        )}
      </div>
    </article>
  );
}

export default Cards;
