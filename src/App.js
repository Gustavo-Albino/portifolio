import React from 'react'
import styled from 'styled-components'

import FirstView from './components/FirstView'

const AppContainer = styled.div`
    width: 100vw;
    background-color: white;
`

const App = () => {
    return (
        <AppContainer>
            <FirstView />
        </AppContainer>
    )
}

export default App
