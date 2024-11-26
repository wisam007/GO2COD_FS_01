import React from "react";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import { FaEdit, FaRecycle } from "react-icons/fa";
import { MdDelete, MdEditSquare } from "react-icons/md";

const MyBlogsPage = () => {
  return (
    <div>
      <Heading title={"Manage your blogs"} />
      <div className="bg-white shadow rounded-lg p-4 mt-4 flex-col  sm:flex-row  items-center justify-start sm:items-center">
        <h4 className="text-2xl font-bold">Blog Post #3 : The chemical</h4>
        <p className="pr-8 text-left font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
          dignissimos totam molestias vel maiores consequuntur, facere harum
          adipisci asperiores? Libero.
          <Link className="text-brand-500 font-semibold"> Read More</Link>
        </p>
        <div className="flex justify-end items-center space-x-4 text-2xl mx-7">
          <MdEditSquare className="text-green-900" />
          Edit
          <MdDelete className="text-red-600" />
          Delete
        </div>
      </div>
    </div>
  );
};

export default MyBlogsPage;
