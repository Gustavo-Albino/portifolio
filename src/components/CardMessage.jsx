import React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.div`
    color: #fff;
    margin: 0 0 1rem 0;
`;

const CardMessage = (props) => {
    return (
        <StyledMessage>{props.children}</StyledMessage>
    )   
}

export default CardMessage;
