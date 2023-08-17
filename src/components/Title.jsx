import React from 'react'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
`
const StyledTitle = styled.h1`
    font-size: 50px;
    animation-name: ${animation};
    color: #fff;
`

function Title() {
    return (
        <StyledTitle>Gustavo Albino</StyledTitle>
    )
}

export default Title