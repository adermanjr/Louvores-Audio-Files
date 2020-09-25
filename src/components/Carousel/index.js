/* eslint-disable react/prop-types */
import React from 'react';
import { VideoCardGroupContainer, Title, SliderItem } from './styles'; //, ExtraLink
import VideoCard from './components/VideoCard';
import Slider from './components/Slider';
import { MdPlaylistPlay } from "react-icons/md";

function Carousel({ ignoreFirstVideo, category, onClick }) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  //const categoryExtraLink = category.link_extra;
  const { videos } = category;

  async function handleClickCarousel(videoId) {
    await onClick(videoId, category.id, true);
  }

  async function handleClickList() {
    await onClick("0", category.id, false);
  }

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }} onClick={handleClickList} >
            {`${categoryTitle}      `}
            <MdPlaylistPlay size="28" />
          </Title>
           
              
          {/*categoryExtraLink
            && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
            )*/}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                audioItem={video}
                categoryColor={categoryColor}
                onClick={handleClickCarousel}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
