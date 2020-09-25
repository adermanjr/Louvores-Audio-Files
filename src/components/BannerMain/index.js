/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { BannerMainContainer, ContentAreaContainer } from './styles';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


export default function BannerMain({ media, onClick, isPlayList }) {
  console.log(media, isPlayList, 'entrou bannerMain');
  const audioSrc = `${process.env.PUBLIC_URL}/medias/${media.src}`;
  const image = `${process.env.PUBLIC_URL}/medias/${media.imgPath}`;

  async function handleNext(e) {
    e.preventDefault();
    await onClick('next');
}
  async function handlePrevious(e) {
      e.preventDefault();
      await onClick('previous');
  }
  /*
  async function handleShuffle(e) {
      e.preventDefault();
      await onClick('shuffle');
  }
  */
  return (
    <BannerMainContainer backgroundImage={image}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {media.titulo}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            <span dangerouslySetInnerHTML={{__html: media.titulo }} />
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
        <AudioPlayer
          showSkipControls={!isPlayList}
          showJumpControls={isPlayList}
          customVolumeControls={[]}
          customAdditionalControls={[]}
          src={audioSrc}
          onPlay={e => console.log("onPlay")}
          onClickPrevious={handlePrevious}
          onClickNext={handleNext}
          onEnded={!isPlayList && handleNext}
          // other props here
        />
        </ContentAreaContainer.Item>
      </ContentAreaContainer>

    </BannerMainContainer>

  );

}
