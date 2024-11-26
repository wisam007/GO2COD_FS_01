import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import axios from "axios";
const BlogCard = ({ blog }) => {
  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date; // Difference in milliseconds
    const oneMinute = 60 * 1000;
    const oneHour = 60 * oneMinute;
    const oneDay = 24 * oneHour;

    // Time difference formatting
    if (diff < oneMinute) {
      const seconds = Math.floor(diff / 1000);
      return seconds <= 1 ? "Just now" : `${seconds} seconds ago`;
    } else if (diff < oneHour) {
      const minutes = Math.floor(diff / oneMinute);
      return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    } else if (diff < oneDay) {
      const hours = Math.floor(diff / oneHour);
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else if (diff < 2 * oneDay) {
      return "Yesterday";
    } else if (diff < 3 * oneDay) {
      return `${Math.floor(diff / oneDay)} days ago`;
    }

    // Long-term formatting (e.g., specific date)
    const isToday = date.toDateString() === now.toDateString();
    if (isToday) {
      return "Today";
    }

    const isYesterday =
      new Date(now - oneDay).toDateString() === date.toDateString();
    if (isYesterday) {
      return "Yesterday";
    }

    // Custom Date Formatting (e.g., "Nov 12, 2024, 03:45 PM")
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);

    const formattedTime = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);

    return `${formattedDate}, ${formattedTime}`;
  }
  return (
    <div className="bg-white shadow rounded-lg p-4 mt-4 flex  sm:flex-row justify-between items-start sm:items-center">
      <div className="flex justify-center items-center sm:flex-row sm:space-x-4">
        <div className="mx-auto flex flex-col w-32 items-center py-4 rounded-2xl bg-slate-100">
          <p className="text-xs mb-4 text-gray-600">Created by</p>
          <div className=" text-2xl bg-slate-300 rounded-full w-10 h-10 flex items-center justify-center text-slate-500">
            {" "}
            <FaUser />
          </div>
          <p className="font-semibold ">{blog.user.userName}</p>
        </div>

        <div className="space-y-1 w-[85%]">
          <h4 className="text-2xl font-bold">{blog.title}</h4>
          <div class="border-t border-gray-300 my-4"></div>

          <p className="pr-8 text-left font-light">{blog.body}</p>
          <Link>
            <h1 className="font-semibold text-blue-600 hover:text-blue-400">
              Read More
            </h1>
          </Link>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800"> Created at: </span>
            {formatDate(blog.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
