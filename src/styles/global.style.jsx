import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
}
.UmbrellaBG{
  width:100%;
  height:100%;

}
.footerImg{
    width:20%;
    @media(max-width: 900px){
        width:40%;
    }
}


`
