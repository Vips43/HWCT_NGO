import { goals } from "../data/data";

function Goals() {
  return (
    <>
      <section id="goals" className="py-10">
        <header className="text-center space-y-4 mb-12">
          <div
            className="flex items-center justify-center gap-3"
            aria-hidden="true"
          >
            <div className="h-1 w-10 bg-primary-500 rounded-full hidden md:block"></div>
            <span className="text-primary-500 font-bold uppercase tracking-widest text-sm">
              Our Commitment
            </span>
            <div className="h-1 w-10 bg-primary-500 rounded-full hidden md:block"></div>
          </div>

          <h2
            id="goals-heading"
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Sustainable Development Goals
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Aligning our mission with global standards to create a better and
            more sustainable future for all.
          </p>
        </header>

        <ul className="p-5 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5 transition-all">
          {goals.map((goal, i) => {
            const IconComp = goal.icon;
            return (
              <li
                key={i}
                className="text-goal-icons aspect-square bg-main-bg-50 hover:text-white hover:bg-goal-icons transition-all delay-100 duration-500 rounded-lg grid place-items-center"
              >
                <figure className="space-y-2">
                  <div className="h-20 mx-auto aspect-square rounded-full grid place-items-center bg-primary">
                    <IconComp size={32} strokeWidth={2} />
                  </div>
                  <figcaption className="max-w-24 text-center">
                    {goal.label}
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default Goals;
