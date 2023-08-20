import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
    width: 400px;
    text-align: center;
    justify-content: center;
    margin: 0 0 0 4rem;
`

const MyImage = () => {
    const imagePath = process.env.PUBLIC_URL + '/img/meg.png'

    return (
        <StyledImg src={imagePath} alt="Minha Imagem" />
    )
}

export default MyImage
