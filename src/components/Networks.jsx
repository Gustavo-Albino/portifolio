import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    margin-top: 6vh;

    li {
        padding: 0 2.5rem 0 0;
    }

    ion-icon {
        color: white;
    }

    .icon1:hover {color: #1da1f2; transform: scale(1.1); transition: .3s;}
    .icon2:hover {color: #c32aa3; transform: scale(1.1); transition: .3s;}
    .icon3:hover {color: #25d366; transform: scale(1.1); transition: .3s;}
    .icon4:hover {color: #765ce9; transform: scale(1.1); transition: .3s;}
`

function NetWorks() {
    return (
        <StyledList>
            <li><a href="https://github.com/Gustavo-Albino"><ion-icon class="icon1" size="large" name="logo-github"></ion-icon></a></li>
            <li><a href="https://www.linkedin.com/in/gustavotalbino/"><ion-icon class="icon2" size="large" name="logo-linkedin"></ion-icon></a></li>
            <li><a href="https://www.instagram.com/gustavotalbino/"><ion-icon class="icon3" size="large" name="logo-instagram"></ion-icon></a></li>
            <li><a href="https://mail.google.com/mail/u/0/#inbox?compose=FZxzwjpdjvHBpBdXmptcNhNBcrbVvzFxNZKXKCPVdDMHLbxSPCNPKxjrFxHSDfZvPVfDhKxdszhfZWvkxcPHvLgdhvDlGpksrLgjvxsdKKBNFMnTCpwFGHRjQCsPPQFGKwbKjBmxFLMHXrwtGSLMMZWVLzZMxtbTRNKbq"><ion-icon class="icon4" size="large" name="mail-outline"></ion-icon></a></li>
        </StyledList>
    )
}

export default NetWorks
