import React from 'react';
import { BsShuffle, BsSkipEndFill, BsSkipStartFill } from "react-icons/bs";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import { AudioContainer, Audio, AudioWrap, AudioInfo, Commands, SectionPlay } from './styles';
import { IconContext } from "react-icons";

function AudioFrame({ audio, onClick }) {

    //const bgUrl = `https://img.youtube.com/vi/${audio.imgSrc}/maxresdefault.jpg`;
    //const bgUrl = `${process.env.PUBLIC_URL}/images/${audio.imgPath}`;
    const bgUrl = audio.coverBg;

    console.log(bgUrl);
    
    async function handlePlay(e) {
        e.preventDefault();
        await onClick('play');
    }
    async function handlePause(e) {
        e.preventDefault();
        await onClick('pause'); 
    }
    async function handleNext(e) {
        e.preventDefault();
        await onClick('next');
    }
    async function handlePrevious(e) {
        e.preventDefault();
        await onClick('previous');
    }
    async function handleShuffle(e) {
        e.preventDefault();
        await onClick('shuffle');
    }
    
    return (
        
        <AudioContainer>

            <AudioInfo backgroundImage={bgUrl} >
                <span className="left" id="npAction">{audio.titulo} {audio.id} {audio.categoriaId}</span>
                <span className="right" id="npTitle"></span>
                <SectionPlay>
                    <IconContext.Provider value={{ className: "icon" , size: 52 }}>
                        <FaRegPlayCircle
                            id="icoPlay"
                            onClick={handlePlay} />
                        <FaRegPauseCircle
                            id="icoPause"
                            onClick={handlePause} 
                            style={{ display: 'none' }} />
                    </IconContext.Provider>
                </SectionPlay>

                <Commands>
                    <IconContext.Provider value={{ className: "icon" , size: 32 }}>
                        <BsShuffle
                            onClick={handleShuffle} />
                        <br /><br />
                        <BsSkipStartFill 
                            onClick={handlePrevious} />
                        <br /><br />
                        <BsSkipEndFill
                            onClick={handleNext} />
                    </IconContext.Provider>
                </Commands>

            </AudioInfo>
            <AudioWrap>
                
                <Audio id="audioPlayer" >Your browser does not support HTML5 Audio!
                    {/* source id ="sourceSong" type="audio/mp3" /> */}
                </Audio>
                              
            </AudioWrap>
            
        </AudioContainer>
        
    );
    
}

export default AudioFrame;
