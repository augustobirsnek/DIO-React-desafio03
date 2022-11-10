import styled, { css } from 'styled-components';

export const PictureUser = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #FFFFFF;
    
    ${({variant}) => variant !== "header" && css`
        width: 32px;
        height: 32px;
        border-radius: 22px;
        border: 3px solid #FFFFFF;
        margin-right: 12px;
    `}
`