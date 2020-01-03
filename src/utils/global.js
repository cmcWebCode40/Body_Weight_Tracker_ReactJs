import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle` 
     *,
     *::before,
     *::after {
          margin: 0;
          padding: 0;
          box-sizing : inherit;
          --webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing : grayscale;
          boxsizing: border-box;
     } 


     html  {
          font-size : 62.5%;
          --color-primary: ${ props => props.theme.colors.primary};
          --color-bodyColor: ${ props => props.theme.colors.bodyColor};
          --color-bodyDark: ${ props => props.theme.colors.bodyDark};
          --color-bodyLight: ${ props => props.theme.colors.bodyLight};
          --color-text: ${ props => props.theme.colors.textColor};
          --color-white: ${ props => props.theme.colors.whiteColor};
          --color-shadowColor: ${ props => props.theme.colors.shadowColor};

          @media ${ props => props.theme.mediaQueries.smallest} {
               font-size : 60%;
          }

          @media ${ props => props.theme.mediaQueries.small} {
               font-size : 55%; 
          }
     }

     body {
          font-family: sans-serif;
          font-weight: 400;
          line-height :  1.6;
     }

     a, input, textarea, button {
          outline: none;
          text-decoration : none;
          font-family: inherit;
     }

     ::-webkit-scrollbar {
          width:6px;
          border-radius: 15px;
     }

     ::-webkit-scrollbar-track {
          background-color:${ props => props.theme.colors.bodyDark} ;
     }

     ::-webkit-scrollbar-thumb {
          background-color:${ props => props.theme.colors.primary};
     }

     ::-webkit-scrollbar-thumb:hover {
          background-color:${ props => props.theme.colors.primary};
     }


`