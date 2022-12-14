import React, { useEffect } from "react";
import Tag from "./Tag";
import { useSelector, useDispatch } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";
import { resetFilter } from "../../features/filter/filterSlice";

const Tags = () => {
  const { tags } = useSelector((state) => state.tags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return tags?.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto relative">
        {tags.map((tag) => (
          <Tag tag={tag} key={tag.id} />
        ))}
      </div>
      <div
        className="bg-blue-600 text-white px-2 lg:px-4 py-1 rounded cursor-pointer w-24 lg:w-32 text-center absolute right-0 2xl:right-28 mt-4 mr-2"
        onClick={() => dispatch(resetFilter())}
      >
        Reset Filter
      </div>
    </section>
  ) : null;
};

export default Tags;
