import React from 'react'
import styled from 'styled-components'

import Projects from './Projects'

const StyledView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    width: 100vw;
    background-color: #fff;
    justify-content: flex-start;
`

const StyledTitle = styled.h2`
    text-align: center;
    font-size: 2.8rem;
    margin: 5vh 0 5vh 0;
    color: ${(props) => props.textColor};
`

const SecondView = () => {
    return(
        <StyledView>
            <StyledTitle textColor={"#171717"}>PROJETOS</StyledTitle>
            <Projects />
        </StyledView>
    )
}

export default SecondView