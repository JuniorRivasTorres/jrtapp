import styled from 'styled-components';
import { GiStrawberry } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';


export const Nav = styled.nav`
    overflow: visible;
    opacity: 0.8;
    margin-right: 8px;
    margin-left: 8px;
    background-color: #fff;
    z-index: 99;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-family: Roboto Slab;
    position: sticky;
    border-color: #fff;
   
    top: 0;
    z-index: 999;

`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 65px;

${Container}
`;

export const NavLogo = styled(Link)`

    color: black;  
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 3rem;
    font-weight: 1rem;
    font-family: unset;
    display: flex;
    align-items: center;
`;

export const NavIcon = styled(GiStrawberry)`
margin-right: 0.5rem;
background-color: black;
`;

export const MobileIcon = styled.div`
display: none;


@media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
 
}
`;
//bar menu icon avec transition hamburger 
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    background: #fff;
 @media screen and (max-width: 960px) {
     display: flex;
     flex-direction: column;
     width: 100%;
     height: 90vh;
     position: absolute;
     top: 80px;
     left: ${({click})  => (click ? 0 : '-100%')};
     //opacity: 2;
     transition: all 0.5s ease;
     background-color: #fff; 
     font-family: Roboto Slab;
 }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent ;
    
   
&:hover {
    border-bottom: 6px solid black;
    
}

@media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
        border:none;
    }
}
`
// nav bar produits service home 

export const NavLinks = styled(Link)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-family: Roboto Slab;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: black;
            transition: all 0.3s ease;
        }
    }
`;

export const NavItemBtn = styled.li`
@media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 120px;
 
}
`
export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
 
`;
