import styled from 'styled-components';

export const AudioContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 70%;
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: 35px;
  @media (max-width: 800px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 20px;
  }
`;

export const SectionPlay = styled.div`
  width: 30%;
  margin: 0;
  position: absolute;
  top: 80%;
  left: 5%;
  @media (max-width: 800px) {
    top: 70%;
  }
`;

export const Commands = styled.div`
  width: 4%;
  margin-left: 95%;
  position: absolute;
  top: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  @media (max-width: 700px) {
    width: 10%;
    margin-left: 90%;
  }
`;

/*
  @media (max-width: 800px) {
    display: none;
  }
*/

export const AudioInfo = styled.div`
  height: 50vh;
  position: relative;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  @media (max-width: 800px) {
    height: auto;
    min-height: 30vh;
  }
`;

export const AudioWrap = styled.div`
  position: relative;
  height: 5px;
`;

export const Audio = styled.audio`
  width: 100%;
`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
