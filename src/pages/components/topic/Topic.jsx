import React from 'react';
import {Topics, TextTopic, TopicTitle} from './style.jsx';
import {ThirdContainer} from "../../../styles/styles.jsx"
import iconLamp from '../../../assets/iconLamp.svg'
import iconArrow from '../../../assets/iconArrow.svg'
import iconPuzzle from '../../../assets/iconPuzzle.svg'
import iconMap from '../../../assets/iconMap.svg'



function Topic (){
    return(
      <ThirdContainer>
        <Topics>
            <span className='ImgWrapper'>
              <img className='ImgTopic' src={iconLamp} alt="" />
            </span>
            <div>
              <TopicTitle>Times para inovação:</TopicTitle>
            </div>
            <div className='textDiv'>
              <TextTopic>Somos certificados internacionalmente para esta missão.</TextTopic>
            </div>
          </Topics>
          <Topics>
            <span className='ImgWrapper'>
              <img className='ImgTopic' src={iconArrow} alt="" />
            </span>
            <div>
              <TopicTitle>Intraempreendedorismo:</TopicTitle>
            </div>
            <div className='textDiv'>
              <TextTopic>A Mentalidade Inovadora para Resultados.</TextTopic>
            </div>
          </Topics>
          <Topics>
            <span className='ImgWrapper'>
              <img  className='ImgTopic' src={iconPuzzle} alt="" />
            </span>
            <div>
              <TopicTitle>Comunicação:</TopicTitle>
            </div>
            <div className='textDiv'>
              <TextTopic>Experimentar, aprender, compartilhar e inovar.</TextTopic>
            </div>
          </Topics>
          <Topics>
            <span className='ImgWrapper'>
              <img className='ImgTopic' src={iconMap} alt="" />
            </span>
            <div>
              <TopicTitle>Promoção de ambientes:</TopicTitle>
            </div>
            <div className='textDiv'>
              <TextTopic>Para que a inovação e resultados possam fluir na cultura da empresa.</TextTopic>
            </div>
          </Topics>
        </ThirdContainer>
    )
}
export default Topic








