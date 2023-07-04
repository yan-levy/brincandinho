"use client";
import React from "react";

function Button() {
  return (
    <button
      className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
      onClick={() => {
        alert("Why did u click me?!");
      }}
    >
      butãozin
    </button>
  );
}

export default Button;
