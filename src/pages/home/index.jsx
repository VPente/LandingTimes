
import { Wrapper } from '../components/Wrapper';
import Topic from '../components/topic/Topic';
import Footer from '../components/Footer/footer';
import VideoPlayer from '../components/VideoPlayer/player';
import {Button} from '../components/Button/Button';
import { Header, Main, Title ,TitleTwo,TitleTwoBack, TitleThree, TitleStrong,TopicHeader, BtnWrapper,BtnWrapper2,BtnWrapper3, ImgWrapper,BtnContainer, AboutUs,FirstWrapper, CenteredButtonContainer, SubTitle, Umbrella } from '../../styles/styles';
import { FirstContainer, SecondContainer, AboutSection } from '../../styles/styles';


import { ButtonOne, ButtonTwo, ButtonTrhee } from '../components/Button/style';
//Import Images firmament-logo.svg
import firmamentLogo from "../../assets/firmament-logo.svg"
import facilitacao from '../../assets/Times.png'
import UmbrellaSvg from '../../assets/Umbrella.svg'


export function Home() {
  return (
    <Wrapper>
      <Main>
        
        <Header>
          <img fill = '#652f87 'className ='firmamentImg'src={firmamentLogo} alt="" />
        </Header>
        <FirstContainer>
          
          <FirstWrapper>
              <VideoPlayer></VideoPlayer>
              <BtnWrapper>
                  <Umbrella>
                      <img className ='UmbrellaBG'src={UmbrellaSvg} alt="" />
                  </Umbrella>
                  <Title><TitleStrong>Facilitação de Times para a Inovação</TitleStrong></Title>
                  <CenteredButtonContainer>
                    <Button url="https://api.whatsapp.com/send?phone=++554898442525&text=Olá, gostaria de informações de como a educação corporativa poderá se aplicar na empresa que atuo!" Children = 'Quero Conhecer' component={ButtonOne} ></Button>
                  </CenteredButtonContainer>
              </BtnWrapper>
          </FirstWrapper>
        </FirstContainer>
        <SecondContainer>
          <AboutSection>
              <AboutUs>
                <TitleTwo>Promoção de <TitleTwoBack>ambientes</TitleTwoBack>, para que a <TitleTwoBack>inovação</TitleTwoBack> e os resultados possam fluir. </TitleTwo> 
                <SubTitle>Uma mentoria focada em diagnósticos e ações</SubTitle>  
                <BtnWrapper2>
                  <Button url="https://firmament.com.br/" Children = 'Conheça nossas soluções' component={ButtonTwo} ></Button>
                </BtnWrapper2>  
              </AboutUs>
              <ImgWrapper>
                <img className ='mainImg' src={facilitacao} alt="" />
              </ImgWrapper>
           </AboutSection>
        </SecondContainer>
        
        <TopicHeader>
          <TitleThree>Como contribuímos com a cultura de inovação de nossos clientes.</TitleThree>
        </TopicHeader>
        <Topic/>
        <BtnWrapper3>
          <BtnContainer>
            <Button url="https://firmament.com.br/contact" Children = 'Entrar em Contato' component={ButtonTrhee} ></Button>
          </BtnContainer>
        </BtnWrapper3>
        <div>
          <Footer/>
        </div>
        
      </Main>
    </Wrapper>
  );
}
