import styled, {createGlobalStyle} from 
 'styled-components'
 

 const GlobalStyle = createGlobalStyle`
 *{
     box-sizing: border-box;
     margin: 0;
     padding: 0;
     font-family: 'Source Sans Pro ', sans-serif;
 }
 `;



export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;
//background-size: cover;
//background: url(https://images.unsplash.com/photo-1458707926943-2226cddba8d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
background-size: cover;
@media screen and ( max-widht: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}
`;


export const Button = styled.button`
 border-radius: 4px;
 background: ${({primary}) => (primary ? 'grey' : 'black')};
 white-space: nowrap;
 padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
 color: #fff;
 font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
 outline: none;
 border: none;
 cursor: pointer;
 
 &:hover {
     transition: all 0.3s ease-out;
     background: black;
     background: ${({primary}) => (primary ? '#B5A5C8' : '#C4FCEF')};
 }

 @media screen and (max-width: 960px) {
     width: 100%;
 }
 `;

export default GlobalStyle;