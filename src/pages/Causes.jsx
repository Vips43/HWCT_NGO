import CausesCard from "../components/CausesCard";
import { causes } from "../data/data";
import CausesCard1 from "../components/CausesCard1";

function Causes() {
  return (
    <section className="bg-main-bg-700 py-12">
      <header className="px-10">
        <div className="text-main-text space-y-4 max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="h-1 w-10 bg-primary-500 rounded-full"></div>
            <h2 className="text-primary-500 font-bold uppercase tracking-widest text-sm">
              Choose Your Cause & Change a Life
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Causes
          </h3>
          <p className="text-main-text/70 text-lg leading-relaxed pt-2">
            From nutrition to digital learning — each initiative creates lasting
            impact in rural and tribal communities across India.
          </p>
        </div>
      </header>

      {/* <div className="my-5 px-5 md:px-10 grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-2">
        {causes.map((c) => (
          <CausesCard key={c.category} cause={c} causes={causes} />
        ))}
      </div>

      <p className="text-2xl font-bold text-white text-center">Version 2</p>
      <div className="my-5 px-5 md:px-10 grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-2">
        {causes.map((c) => (
          <CausesCard1 key={c.category} cause={c} causes={causes} />
        ))}
      </div>
    </section>
  );
}

export default Causes;
