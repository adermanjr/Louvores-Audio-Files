/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import db from '../../data/db.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';

/*
    package.json:
      * vercel -> roda scprit build
      * heroku -> roda scprit server
*/
function Home() {

  const [index, setIndex] = useState(1);
  const [mediaBanner, setMediaBanner] = useState(db.categorias[0].videos[index]);
  const [searchItem, setSearchItem] = useState('');
  const [mediasOrdByName, setMediasOrdByName] = useState([]);
  const listaMedia = db.categorias[0];
  const [isPlayList, setIsPlayList] = useState(true);

    
  async function handleChangeBanner(videoId, categId, isPlayList) {
    setIsPlayList(isPlayList);
    const mediaAudio = db.categorias[categId].videos.filter(item => item.id === videoId);
    setMediaBanner(mediaAudio[0]);
  }

  async function handleChangeSearch(infoEvent) {
      const { target } = infoEvent;
      mediasOrdByName.forEach((video) =>{
        if (video.titulo === target.value) {
          handleChangeBanner(video.id, video.categoriaId, false);
        }
      })
      setSearchItem(target.value);
  }

  function getNextIndex(){
    
    if (index === listaMedia.videos.length -1)
      return 0;
    else 
      return index+1;
  }

  function getPrevIndex(){
    if (index === 0)
      return listaMedia.videos.length -1;
    else 
      return index-1;
  }

  async function handleChangeAudio(action) {
    console.log(action, 'handleChangeAudio');
    switch (action) {
      case 'previous':
        setIndex(getPrevIndex());
        setMediaBanner(listaMedia.videos[index]);
        break;
      case 'next':
        setIndex(getNextIndex());
        setMediaBanner(listaMedia.videos[index]);
        break;
      case 'shuffle':
          break;
      default:
        console.log(`Sorry, we are out of ${action}.`);
    }
  }

  useEffect(() => {
    let list = db.categorias[0].videos;
    /*
     list.sort((a, b) => {
      if (a.titulo < b.titulo) { return -1; }
      if (a.titulo > b.titulo) { return 1; }
      return 0;
    });
    */
    setMediasOrdByName(list.sort((a, b) => {
      if (a.titulo < b.titulo) { return -1; }
      if (a.titulo > b.titulo) { return 1; }
      return 0;
    }));

    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('previoustrack', handleChangeAudio('previous'));
      navigator.mediaSession.setActionHandler('nexttrack', handleChangeAudio('next'));
    }

  }, []);

  return (
    <PageDefault paddingAll={0}>
      <Menu />
      <>
        <BannerMain
          media={mediaBanner}
          onClick={handleChangeAudio}
          isPlayList={isPlayList}
        />
        
        <FormField
          label="Índice"
          type="text"
          name="searchId"
          value={searchItem}
          onChange={handleChangeSearch}
          suggestions={mediasOrdByName}
        />
        {/* ignoreFirstVideo */}
        
        <Carousel
          category={listaMedia}
          onClick={handleChangeBanner}
        />


        {/*
        <Carousel
          category={db.categorias[1]}
          onClick={handleChangeBanner}
        />

        <Carousel
          category={db.categorias[0]}
          onClick={handleChangeBanner}
        />
        */}
      </>

      
    </PageDefault>
  );
}

export default Home;
