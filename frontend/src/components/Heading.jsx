import React from "react";

const Heading = ({ title }) => {
  return (
    <section className="bg-brand-500 rounded-md mb-5 shadow px-4 py-4">
      <h1 className="text-2xl font-bold tracking-tight text-white">{title}</h1>
    </section>
  );
};

export default Heading;
