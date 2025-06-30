"use client";
import React, { useState, useRef } from "react";

export default function DescriptionCard({ description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gradient-to-br flex flex-col from-white/10 to-white/5 mt-10 p-4 rounded-xl max-w-2xl">
      <span className="text-lg font-semibold">Description</span>

      <div
        className={
          "mt-4 overflow-hidden transition-all duration-300 ease-linear " +
          (isExpanded ? "max-h-[1000px]" : "max-h-24")
        }
      >
        <p className={"text-sm " + (!isExpanded ? "line-clamp-4" : "")}>
          {description}
        </p>
      </div>

      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="mt-3 ml-auto cursor-pointer text-blue-400 hover:underline text-sm"
      >
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
}
