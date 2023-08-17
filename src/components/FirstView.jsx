import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import Subtitle from './Subtitle'
import Networks from './Networks'
import MyImage from './MyImage'

const StyledView = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 80vh;
    width: 100vw;
    background-color: #171717;
`

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 0 0 2rem;
    padding: 20px;
`

const RightSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

function FirstView() {
    return (
        <StyledView>
            <LeftSection>
                <Title />
                <Subtitle />
                <Networks />
            </LeftSection>
            <RightSection>
                <MyImage />
            </RightSection>
        </StyledView>
    )
}

export default FirstView