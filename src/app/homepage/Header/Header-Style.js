import styled from "styled-components";

export const NavLinks = styled.ul`
    @media (max-width: 991px) {
        transform: ${props => props.linkslide}; 
        transition: transform 0.5s;
    }
`;

export const NavButton = styled.button`
    @media (max-width: 991px) {
        transform: ${props => props.buttonslide};
        transition: transform 0.5s; 
    }
`;
