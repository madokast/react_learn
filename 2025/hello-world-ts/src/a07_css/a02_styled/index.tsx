import {HTMLAttributes} from 'react';
import styled from 'styled-components';

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
    width?: number;
}

const Content = styled.div<ContentProps>`
    background-color: lightblue;
    float: left;
    width: ${props => props.width || 50}%;
`;

export default function A02Styled() {
    const width = 30;
    return <Content width={width}>Styled Component</Content>;
}

