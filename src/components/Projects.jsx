import React from 'react'
import styled from 'styled-components'

import ProjectItem from './ProjectItem'

const StyledProject = styled.ul`
    list-style: none;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
`

const Projects = () => {
    return (
        <StyledProject>
            <ProjectItem
                imgLink={process.env.PUBLIC_URL + '/img/blog.png'}
                projectLink="https://culturatrap.com"
                text="Blog Cultura Trap"
            >
                Blog desenvolvido em WordPress utilizando plug-ins como Astra,
                Elementor e WP Forms.
            </ProjectItem>
            <ProjectItem
                imgLink={process.env.PUBLIC_URL + '/img/consulta-cep.png'}
                projectLink="https://github.com/Gustavo-Albino/Consultor-de-CEP"
                text="Consultor de CEP"
            >jflkçasjdfklça</ProjectItem>
            <ProjectItem
                imgLink={process.env.PUBLIC_URL + '/img/summary.png'}
                projectLink="https://github.com/Gustavo-Albino/results-summary-component"
                text="Summary Project"
            >flçaskdjfçalskdj</ProjectItem>
        </StyledProject>
    )
}

export default Projects