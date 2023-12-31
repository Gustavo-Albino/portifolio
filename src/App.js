import React from 'react'
import styled from 'styled-components'

import FirstView from './components/FirstView'
import SecondView from './components/SecondView'
import ThirdView from './components/ThirdView'

const AppContainer = styled.div`
    width: 100vw;
    background-color: white;
`

const App = () => {
    return (
        <AppContainer>
            <FirstView />
            <SecondView />
            <ThirdView />
        </AppContainer>
    )
}

export default App
