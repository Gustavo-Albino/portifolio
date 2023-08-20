import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
    font-size: 50px;
    color: ${(props) => props.textColor};
`

const Title = ({text, textColor}) => {
    return (
        <StyledTitle textColor={textColor}>{text}</StyledTitle>
    )
}

export default Title