import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.css';
import ReactPlayer from 'react-player'
import FacilitaTimes from '../../../assets/FacilitaTimes.mp4'
const VideoWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right:2rem;
  width:100%;
  height:100%;
  @media(max-width: 1600px){
    margin-right:0rem;
    margin-top:1.2rem;

    }
      @media(max-width: 1024px){
    margin-top:1.8rem;

      }
      @media(max-width: 900px){
      margin:0 auto;
      margin-top:1.5rem;  
      margin-bottom:2rem;  

        }
      @media(max-width: 768px){
        /* margin-top:5rem; */
      }
      @media(max-width: 425px){
        margin-left:0rem;
       justify-content: center;
       
    }
    .react-player{
      border-radius: 1.5rem;
      overflow: hidden;
      @media(max-width: 2560px){
      width:90vh!important;
        }
        @media(max-width: 1600px){
      width:79vh!important;
        }
      @media(max-width: 1440px){
      width:100vh!important;
        }
      @media(max-width: 1366px){
      width:80vh!important;
        }
      @media(max-width: 1024px){
      width:50vh!important;
        }
      @media(max-width: 900px){
      width:40vh!important;
        }
}
`;

const VideoContainer = styled.div`

  
 
  
  display:flex;
  justify-content:center;
  align-items:center;
  
  @media(max-width: 900px){
    
       
    }
  
`;

const VideoPlayer = () => {
  return (
        <VideoWrapper>  
          <VideoContainer> 
            <ReactPlayer 
            className ='react-player' 
            url={FacilitaTimes} 
            width= '100%'
            // playing
            height='100%'
            controls 
            ></ReactPlayer>
           </VideoContainer>
      </VideoWrapper>
  );
};

export default VideoPlayer;