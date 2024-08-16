"use client";

import React from "react";

import { companies, quotes } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Thoughts = () => {
  return (
    <section id="thoughts" className="py-20">
      <h1 className="heading">
        Some of the
        <span className="text-purple"> motivational quotes</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            direction="right"
            speed="slow"
            myItems={quotes}
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thoughts;