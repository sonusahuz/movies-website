import React from "react";
import { category } from "../../constants/constants";
export const Category = ({ newscategory, setCategory }) => {
  return (
    <div className="flex items-center justify-center py-2">
      {category.map((item) => (
        <button
          onClick={() => setCategory(item.name)}
          value={newscategory}
          className="text-xs bg-black text-white px-2 py-1 rounded-full mx-1"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
