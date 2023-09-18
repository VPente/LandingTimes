import styled from "styled-components";
import BGGolden from '../assets/BGGolden.png'
export const Header = styled.header`
    padding:1rem;
    align-items: start;
    display: flex;
    box-shadow:1px;
    border-bottom: 1px solid #652F87;
    
    .firmamentImg{
    margin-left:0.3rem;
}
`

export const Main = styled.section`
    display: block;
    flex-direction: column;
    max-width: 2800px;
    min-width:300px;
    @media (min-width:2800px) {
    margin: 0 auto;

    
}
    /* background-color: rgb(255, 255, 255); */
` 


export const Title = styled.div`
    color: ${({theme}) => theme.colors.primary};
    //margin:5rem 30rem 5rem 35rem;
    /* width:100%; */
    
    margin-bottom: 5rem;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-items:center;
    
    
@media (min-width:1024px) {
    margin-inline-start:5rem;

    
}
    @media(max-width: 900px){
        font-size:1.5rem!important;
        text-wrap: nowrap;
        margin-top: 1rem;
        margin-bottom: 2rem; 
        
      }
      
    `
export const TitleStrong = styled.strong`
font-size: 85px;
font-style: normal;
font-weight: 900;
line-height: normal;

@media(max-width: 1600px){
    font-size: 60px!important;
}
@media(max-width: 1024px){
    font-size: 45px!important;

        }
@media(max-width: 900px){
    font-size:2rem!important;
    text-wrap: wrap;
    margin-top: 1rem;
    margin-bottom: 2rem; 
    
}
`   
export const TitleTwo = styled.h1`
    color: ${({theme}) => theme.colors.primary};

    font-size: 45px;
    font-style: normal;
    line-height: normal;
    margin-top:2rem;
    width:90%;
    
    @media(max-width: 1600px){
        font-size: 30px!important;
    }
    @media(max-width: 1024px){
        font-size: 25px!important;
    }

    @media(max-width: 900px){
        font-size: 20px!important;
        text-align: justify;
        margin-bottom:2rem;
        

      }


`

export const TitleTwoBack = styled.span`
    color: ${({theme}) => theme.colors.primary};
    font-family: 'Patrick Hand SC', cursive;
    text-transform: uppercase;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background-color: rgb(232, 182, 58, 0.8);
    background-image: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");




    /* background: rgb(232, 182, 58, 0.4);
    background-size:10px 10px; */
    @media(max-width: 1600px){
        font-size: 30px!important;
    }
    @media(max-width: 1024px){
        font-size: 25px!important;
    }

    @media(max-width: 900px){
        font-size: 20px!important;
        text-align: justify;

        }
    `

export const TitleThree = styled.h1`
    color: ${({theme}) => theme.colors.primary};
    font-size: 54px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top:2rem;
    
    @media(max-width: 1600px){
        font-size: 33px!important;
    }

    @media(max-width: 1024px){
        font-size: 25px!important;
    }
    @media(max-width: 900px){
        font-size: 18px!important;
        

    }
    

`

export const SubTitle = styled.h2`
    color: ${({theme}) => theme.colors.primary};
    font-family: 'Patrick Hand SC', cursive;

    font-size:40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 1;
    margin-top:3rem;
    @media(max-width: 1600px){
        margin-top:1rem!important;
    font-size:25px;
    }
    @media(max-width: 900px){
        font-size:20px;
        margin-top:3rem!important;


        }
`


export const FirstWrapper = styled.div`
    display:flex;
    margin-left:8rem;
    margin-top: 2.5rem;
    @media(max-width: 900px){
         margin: 20px 0 0px;
         display:flex;
         flex-direction:column;
         justify-content:center;
         align-items:center;
      }

    

`
export const FirstContainer = styled.section`
    margin-bottom:25px;
    margin-right:10px;
    align-items: center;
    display:flex;
    
    background-image:url(${BGGolden});
    
    background-position: left;
    background-repeat: no-repeat;
    background-size: 52% 100%;   /*55.65%*/

    @media(min-width: 2559px){
        background-size: 61% 100%;   
    }
    @media(max-width: 1600px){
            background-size: 64% 100%;    
        }
    @media(max-width: 1440px){
            background-size: 57% 100%;  

        }
    @media(max-width: 900px){
    background-size:  100% 16rem;
    background-position:top;  

        margin-right:0px;

       display:flex;
       flex-direction:column;
       justify-content:center;
       align-items:center;
      }
      @media(max-width: 340px){
        background-size:  100% 14rem;
        
      }
   
`
export const SecondContainer = styled.section`
    padding:0 10rem 2rem 10rem;
    @media(max-width: 1600px){
    padding:0 0rem 0rem 0rem;
        

            
    }

    @media(max-width: 900px){
        padding:0 0.5rem 1rem 0.5rem;
        display:flex;
        
}
    .mainImg{
        width:750px;
        @media(max-width: 1600px){
            width: 450px!important;
            margin-right:4rem;
    }
        @media(max-width: 1024px){
            width: 350px!important;
        }
        @media(max-width: 900px){
            width:310px!important;
            margin:0 auto;
            
        }
    }
    

    
`
export const ThirdContainer = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    margin-top:2rem;
    margin-left:6rem;
@media(max-width: 900px){
        align-items:center;
    margin-left:0px;

}   
`

export const FourthContainer = styled.section`
    display:flex;
    width:100%;
    padding:0 10rem 10rem 10rem;

    border: 1px solid #FFF;


`

export const TopicHeader = styled.section`
    display:flex;
    justify-content:center;
    margin-left:8%;
    margin-right:10%;
    margin-top:2rem;
    align-items:center;

    @media(max-width: 900px){
        
        
    

}
     
`
export const CenteredButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px; 
`;
export const BtnWrapper = styled.div`
display:flex;
justify-content: flex-start;
flex-direction: column;
margin-right:10rem;
position:relative;

@media(max-width: 1600px){
    margin-right:1rem;
    margin-left:2rem;
        
    }
@media(max-width: 900px){
    justify-content:center;
    margin-right:0px;
    margin-left:0px;
    text-align: center;
}
`
export const Umbrella = styled.span`
    width:350px;
    height:350px;
    right:-170px;
    top:50px;
    position:absolute;
    z-index:-1;
    @media(max-width: 1600px){
        width:220px;
        height:260px;
        right:-25px;
        top:55px;
    }
    @media(max-width: 900px){
        width:50px;
        height:50px;
        top:10px;
        right:7px;
    }
    

`

export const BtnWrapper2 = styled.div`
display:flex;
justify-content:flex-start;
position:absolute;


bottom:1px;
@media(max-width: 900px){
    justify-content:flex-end;
    margin-top:1rem;
    position:static;
    margin-top: -4.3rem; 
    margin-right:2.5rem;
    }
    @media(max-width: 340px){
    margin-top: -6rem; 
    margin-right:2.5rem;
    }


      
`
export const BtnWrapper3 = styled.section`
    display:flex;
    justify-content:flex-end;

    padding-bottom:20rem;
    align-items:flex-end;
    position:relative;

    @media(max-width: 1600px){
        margin-bottom:12rem;
        margin-right:10%;
        padding-bottom:5rem;
        }   
    @media(max-width: 1440px){
        margin-bottom:12rem;
        margin-right:15%;
        padding-bottom:5rem;
        } 
    @media(max-width: 900px){
    justify-content:center;
    margin-right:0;
    margin-bottom:1rem;
    

        
     }

`
export const BtnContainer = styled.div`
    position:absolute;
    top:50px;
    right:11%;
    @media(max-width: 1600px){
        top:50px;
        right:0%;
        }   
    @media(max-width: 900px){
        position:static;
        margin-top:2rem;
     }

    `

export const ImgWrapper = styled.div`
    display:flex;
    justify-content:center;
    
    @media(max-width: 900px){
        display:flex;
        margin:0 auto;
        align-items:center;
     }
      
`
export const AboutSection = styled.div`
    display:flex;
    justify-content:space-arround;
    margin-top:7rem;
    @media(max-width: 1600px){
        margin-top:4rem;
        }
    
    @media(max-width: 900px){
    display:flex;
    margin-top:3rem;
    justify-content:center;
    flex-direction:column-reverse;
    margin:0 auto;
    align-items:center;
      }
     
    
`
export const AboutUs = styled.div`
align-items:start;
position: relative;
margin-top:1rem;

@media(max-width: 1600px){
    padding-bottom:10rem;
    margin-left:8rem;

        }
@media(max-width: 900px){
    margin-left:1px;
    padding-bottom:3rem;

    
      }

`

export const Text = styled.p`
width:70%;
margin-top:1rem;
color: ${({theme}) => theme.colors.secondary};
margin-left:5rem;
`