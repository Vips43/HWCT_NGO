import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { projects } from "../data/data";

function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(projects);
  }, []);

  return (
    <>
      <section
        id="projects"
        className="bg-main-bg-600 w-full py-16 px-6 md:px-12 lg:px-16"
      >
        <div className="mx-auto space-y-12">
          <div className="text-main-text space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="h-1 w-10 bg-primary-500 rounded-full"></div>
              <h2 className="text-primary-500 font-bold uppercase tracking-widest text-sm">
                Our Featured Projects
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
              Discover Our Impact & Causes
            </h3>
            <p className="text-main-text/70 text-lg leading-relaxed pt-2">
              From nutrition to digital learning — each initiative creates
              lasting impact in rural and tribal communities across India.
            </p>
          </div>

          <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 lg:gap-8">
            {data?.map((d, index) => (
              <li key={d.id || index} className="flex h-full">
                <Cards data={d} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Projects;
