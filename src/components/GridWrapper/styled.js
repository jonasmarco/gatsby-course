import styled from 'styled-components'

export const GridWrapper = styled.section`
    body#grid & {
        background-color: var(--borders);
        border-bottom: 1px solid var(--borders);
        display: grid;
        grid-area: card;
        grid-gap: 1px;
        grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    }
`