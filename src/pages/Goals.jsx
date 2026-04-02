import React from "react";
import { goals } from "../data/data";

function Goals() {
  return (
    <>
      <section className="py-10">
          <h3 className="text-center text-3xl font-semibold">Sustainable Development Goals</h3>
        <div className="p-5 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5 transition-all">
          {goals.map(goal=>(
            <div className="text-goal-icons aspect-square bg-main-bg-50 hover:text-white hover:bg-goal-icons transition-all delay-100 duration-500 rounded-lg grid place-items-center">
              <div className="h-20 aspect-square rounded-full grid place-items-center bg-primary">
              <goal.icon size={32} strokeWidth={2} />
              </div>
              <strong className="max-w-24 text-center">{goal.label}</strong>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Goals;
