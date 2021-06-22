import styled from 'styled-components';
import { mobile } from "../../../Styles/generic/Breakpoints";

export const Container = styled.div`
    background-color: var(--si-green-01);
    color: var(--si-green-02);
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 60px;
    text-align: center;

    @media ${mobile.tablet} {
        padding-bottom: 10px;
    }
`;

export const Link = styled.a`
    text-decoration: none;

    &:hover {
        .if-circle,.if-square {
            background-color: var(--si-green-03);
            transition: .1s;
        }
        p {
            color: var(--si-green-03);
            transition: .1s;
        }
    }
`;