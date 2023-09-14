import styled from "styled-components";

export const TopicHeader = styled.section`
    display:flex;
    justify-content:space-between;
    margin-left:10%;
    margin-right:10%;
    margin-top:10rem;

    @media(max-width: 900px){
    align-items:center;
    

        
      }
    
`
export const  Topics = styled.div`
    margin-left:8rem;
    display:flex;
    align-items:center;
    margin-top:1rem;
    @media(max-width: 1440px){
      margin-top:2rem;
        margin-left:2.5rem;
        }
    @media(max-width: 1024px){
        margin-left:1rem;
      }
    @media(max-width: 900px){
        margin-left:0px;
        width:20rem;
        height:230px;
        border-radius:20px;
        align-items:center;
        flex-direction:column;   
        box-shadow: rgba(255, 196, 0, 0.4) 0px 0px 0px 2px, rgba(255, 187, 0, 0.65) 0px 4px 6px -1px, rgba(255, 166, 0, 0.08) 0px 1px 0px inset; 
        margin-top:1.5rem;
      }
    .ImgWrapper{
        display:flex;
        justify-content:center;
        align-items:center;
        background-color: rgb(232, 182, 58, 0.9);
        border-radius: 50%;
        width:90px;
        height:90px;
        @media(max-width: 1600px){
            width:80px;
            height:80px;
        }
        @media(max-width: 900px){
            width:70px;
            height:70px;
            margin-top:1rem;
        }

    }
    .ImgTopic{
        width:75px;
        height:75px;
        display:flex;
        justify-content:center;
        align-items:center;

        @media(max-width: 900px){
            width:55px;
            height:55px;
        }

    }
`
export const TopicTitle = styled.h2`
    display:flex;
    justify-content:center;
    color: ${({theme}) => theme.colors.primary};

    margin:1rem 0 1rem 1rem;
    font-size:2rem;
    font-weight:700;
    background-color: rgb(232, 182, 58, 0.4);
    width: fit-content;
    margin-top:2rem;

    @media(max-width: 1600px){
            font-size:1.5rem!important;
            white-space: nowrap;
        }

    @media(max-width: 1024px){
        font-size:1.3rem!important;

      }
      @media(max-width: 900px){
        margin-top:1rem;
        font-size:18px!important;
        display:flex;
        align-items:center;
      }
           


`
export const TextTopic = styled.p`
    color: ${({theme}) => theme.colors.primary};
    text-align:center;
    margin-left:1rem;
    margin-top:1rem;
    font-size:2rem;
    font-weight:400;

    @media(max-width: 1600px){
        font-size:1.2rem!important;
        white-space: nowrap;
        
    }
    @media(max-width: 1024px){
        font-size:1rem!important;
    }
    @media(max-width: 900px){
        font-size:12px!important;
        text-wrap: wrap;
        text-align:center;
        
    }
    .textDiv{
        display:flex;
        justify-content:center;
        align-items:center;
    }

`