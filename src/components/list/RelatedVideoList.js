import React, { useEffect } from "react";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../ui/Loading";

const RelatedVideoList = ({ currentVideoId, tags }) => {
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);

  // decide what to render
  let content;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && relatedVideos?.length === 0)
    content = <div className="col-span-12">No Related Videos Found!</div>;

  if (!isLoading && !isError && relatedVideos?.length > 0)
    content = relatedVideos.map((relatedVideo) => (
      <RelatedVideoListItem relatedVideo={relatedVideo} key={relatedVideo.id} />
    ));

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideoList;
