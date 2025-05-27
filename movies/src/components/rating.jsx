import { useState } from "react";

function Star({ count = 5, color = "orange", rating, setRating }) {
  const [tempRating, setTemp] = useState(0);
  return (
    <div className="flex gap-3 items-center justify-center">
      <div className="flex gap-1 items-center" onMouseLeave={() => setTemp(0)}>
        {Array.from({ length: count }, (_, i) => (
          <span
            key={i}
            className={`fa fa-star text-2xl ${
              tempRating
                ? tempRating > i
                  ? `checked text-${color}-500`
                  : "text-white"
                : rating > i
                ? `checked text-${color}-500`
                : "text-white"
            }`}
            onClick={() => setRating(i + 1)}
            onMouseEnter={() => setTemp(i + 1)}
          ></span>
        ))}
      </div>
      <div className={`text-${color}-500 text-3xl`}>
        {tempRating ? tempRating : rating}
      </div>
    </div>
  );
}
export default Star;
