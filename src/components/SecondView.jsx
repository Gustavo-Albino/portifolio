import React from 'react'
import styled from 'styled-components'

import Title from './Title'

const StyledView = styled.div`
    display: flex;
    height: 95vh;
    width: 100vw;
    background-color: #fff;
`

const StyledTitle = styled(Title)`
    text-align: center;
    color: ${(props) => props.textColor};
`

const SecondView = () => {
    return(
        <StyledView>
            <StyledTitle text={"Projetos"} textColor={"#171717"}/>
        </StyledView>
    )
}

export default SecondView