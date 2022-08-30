import React, { useState } from "react";
import Like from "../../assets/svgImages/Like";
import Unlike from "../../assets/svgImages/Unlike";
import { useDispatch } from "react-redux";
import { updateOverallUnLike } from "../../features/video/videoSlice";

const LikeUnlike = ({ likes, unlikes, id }) => {
  const dispatch = useDispatch();
  const [allLikes, setallLikes] = useState(likes);
  const [allUnlikes, setallUnlikes] = useState(unlikes);

  const handleIncreaseLike = () => {
    setallLikes((prevState) => prevState + 1);

    const numberOfLikes = parseFloat(likes) + 1;
    dispatch(updateOverallUnLike({ id, numberOfLikes }));
  };

  const handleIncreaseUnlike = () => {
    setallUnlikes((prevState) => prevState + 1);

    const numberOfUnlikes = parseFloat(unlikes) + 1;
    dispatch(updateOverallUnLike({ id, numberOfUnlikes }));
  };

  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0" onClick={handleIncreaseLike}>
          <Like />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {allLikes}
        </div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0" onClick={handleIncreaseUnlike}>
          <Unlike />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {allUnlikes}
        </div>
      </div>
    </div>
  );
};

export default LikeUnlike;
