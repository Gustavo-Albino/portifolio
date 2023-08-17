import React from 'react'
import styled from 'styled-components'

import FirstView from './components/FirstView'

const AppContainer = styled.div`
    height: 200vh;
    width: 100vw;
    background-color: #765CE9;
`

function App() {
    return (
        <AppContainer>
            <FirstView />
        </AppContainer>
    )
}

export default App
