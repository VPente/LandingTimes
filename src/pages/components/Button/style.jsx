import styled from "styled-components";
export const ButtonOne = styled.button`
    width:31.2rem;

    padding: 30px;
    font-weight: 700;
    background-color: #652f87;
    
    color: #ffffff;
    border-radius: 8px;
    margin: 12px 0 0px;

    cursor: pointer;
    transition: filter 0.2s;

    font-size: 28px;

    align-items:center;
    display:flex;
    justify-content:center;

    border:none;
    outline: 0;


&:hover{
    filter: brightness(0.9);
}


    @media(max-width: 1600px){
        font-size: 18px;
        padding: 18px;
        width: 70%;


    }
    @media(max-width: 900px){
        font-size: 16px;
        padding: 10px;
        width: 60%;
        margin: 0px 0 0px;
        

      }
    @media(max-width: 1024px){
        font-size: 14px;
        padding: 12px;
        width: 17rem;
    }
    @media(max-width: 900px){
        font-size: 14px;
        padding: 12px;
        width: 20rem;
      }

`



export const ButtonTwo = styled.button`
   width: 30rem;
    padding: 30px;
    font-weight: 700;
    /* background-color: #E8B63A; */
    background-color: #652f87;

    

    color: #ffffff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: filter 0.2s;

    font-size: 28px;

    align-items:flex-end;
    display:flex;
    justify-content:center;

    outline: 0;
    
&:hover{
    filter: brightness(0.9);
}

@media(max-width: 1600px){
        font-size: 18px;
        padding: 15px;
        width: 20rem;
        

        


    }
@media(max-width: 1024px){
        font-size: 14px;
        padding: 12px;
        width: 15rem;
    }

    @media(max-width: 900px){
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 13px;
        padding: 5px;
        width: 12rem;
      }

`

export const ButtonTrhee = styled.button` 
    padding: 30px;
    font-weight: 700;
    width:31.2rem;
    
    
    background-color: #652f87;
    color: #ffffff;

    border-radius: 5px;
    margin: 12px 0 0px;

    cursor: pointer;
    transition: filter 0.2s;
    outline:0;
    font-size: 28px;
    border:none;
    &:hover{
        filter: brightness(0.9);
    }


    @media(max-width: 1600px){
        font-size: 18px;
        padding: 20px;
        width: 22rem;


    }
    @media(max-width: 1024px){
        font-size: 18px;
        padding: 12px;
        width: 15rem;

    }
    @media(max-width: 900px){
        font-size: 16px;
        padding: 12px;
        width: 15rem;

      }

`
