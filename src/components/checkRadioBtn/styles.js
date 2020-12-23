import styled from 'styled-components'

export const StyledCheckRadioBtn = styled.div`

    height: 40px;
    margin: 5px 5px;    
    display: flex;
    align-items: center;

    input {
        width: 20px;
        height: 20px;
        margin: 0px;
        margin-right: 10px;
        background: red;
    }

    label {
        font-size: 1.1rem;
        font-weight: 400;
        color: var(--text-color);
    }
`