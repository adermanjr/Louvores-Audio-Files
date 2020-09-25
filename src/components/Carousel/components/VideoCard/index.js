/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import { VideoCardContainer } from './styles';

function VideoCard({ audioItem, categoryColor, onClick }) {
  //const image = `https://img.youtube.com/vi/${imgSrc}/hqdefault.jpg`;
  const image = `${process.env.PUBLIC_URL}/medias/${audioItem.imgPath}`;
  //const image = audioItem.coverBg;
  
  async function handleClickCard(e) {
    e.preventDefault();
    console.log(audioItem.id, audioItem.titulo)
    await onClick(audioItem.id);
  }

  return (
    <VideoCardContainer
      url={image}
      style={{ borderColor: categoryColor || 'red' }}
      title={audioItem.titulo}
      onClick={handleClickCard}
    />
  );
}

export default VideoCard;
