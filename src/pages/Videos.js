import React from "react";
import Player from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import Footer from "../components/footer/Footer";
import RelatedVideoList from "../components/list/RelatedVideoList";
import Navbar from "../components/navbar/Navbar";

const Videos = () => {
  return (
    <>
      <Navbar />
      <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div class="grid grid-cols-3 gap-2 lg:gap-8">
            <div class="col-span-full w-full space-y-8 lg:col-span-2">
              <Player />
              <VideoDescription />
            </div>
            <RelatedVideoList />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Videos;