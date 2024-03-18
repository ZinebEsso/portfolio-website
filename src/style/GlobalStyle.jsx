import { createGlobalStyle } from "styled-components"


 const GlobalStyle = createGlobalStyle`
    *{
        margin : 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: lighter;
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        overflow-x: hidden;
        font-family: 'Open Sans', sans-serif;
        background: #040C18;
        color: rgb(148 163 184);
        font-family: "Manrope", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    }
    img{
        object-fit: cover;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
        position: relative;
        color:rgb(226 232 240);
        opacity: .5;
        font-weight: 800;
        font-size: 15px;
        letter-spacing: 1px;
        &:hover{
            opacity: 1;
        }
    }
    button{
        cursor: pointer;
    }
    p{
        font-size: 18px;
        /* opacity: .7; */
        font-weight: 300;
        letter-spacing: 1px;
    }
    h1,h2,h3{
        color:rgb(226 232 240);
    }
`

export default GlobalStyle