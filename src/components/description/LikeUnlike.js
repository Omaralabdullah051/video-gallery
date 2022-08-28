import React from "react";
import Like from "../../assets/svgImages/Like";
import Unlike from "../../assets/svgImages/Unlike";

const LikeUnlike = () => {
  return (
    <div class="flex gap-10 w-48">
      <div class="flex gap-1">
        <div class="shrink-0">
          {/* <img class="w-5 block" src="./assets/like.svg" alt="Like" /> */}
          <Like />
        </div>
        <div class="text-sm leading-[1.7142857] text-slate-600">100K</div>
      </div>
      <div class="flex gap-1">
        <div class="shrink-0">
          {/* <img class="w-5 block" src="./assets/unlike.svg" alt="Unlike" /> */}
          <Unlike />
        </div>
        <div class="text-sm leading-[1.7142857] text-slate-600">100K</div>
      </div>
    </div>
  );
};

export default LikeUnlike;
