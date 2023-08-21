import React from 'react'
import styled from 'styled-components'

import CardMessage from './CardMessage'

const StyledItem = styled.li`
    overflow: hidden;
    color: #171717;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #333;
    border-radius: 1.5rem;
    transition: ease-in-out;
    transition-duration: 150ms; 

    &:hover {
        background-color: #444;

        img {
            transition: ease-in-out;
            transition-duration: 150ms;
            transform: scale(1.05);
        }
    }
`

const StyledImage = styled.img`
    width: 25rem;
    padding: 1rem;
    border-radius: 1.5rem;
`

const StyledLink = styled.a`
    color: #fff;
    text-decoration: none;
    padding: 1rem 1rem 0rem 1rem;

    &:hover {
        color: #765ce9;
    }
`

const StyledProjectItem = styled.a`
    text-decoration: none;
`

const ProjectItem = (props) => {
    const { imgLink, projectLink, text } = props
    const message = props.children
    return (
        <StyledProjectItem href={projectLink} target="_blank">
            <StyledItem>
                <StyledLink href={projectLink} target="_blank">{text}</StyledLink>
                <StyledImage src={imgLink} alt="Imagem do Projeto"/>
                <CardMessage>{message}</CardMessage>
            </StyledItem>
        </StyledProjectItem>
    )
}

export default ProjectItem
