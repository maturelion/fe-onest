import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CityListUl = styled.ul`
    padding: 0px;
`

export const CityListli = styled.li`
    list-style: none;
`

export const CityListlink = styled(Link)`
    color: black;
    text-decoration: underline;

    &:hover {
        color: black;
        text-decoration: none;
    }
`