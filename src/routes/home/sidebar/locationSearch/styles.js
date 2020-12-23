import styled from 'styled-components'

export const StyledLocationSearch = styled.div`

    width: 100%;
    min-height: 100px;

    .label {
        font-size: 1.1rem;
        color: var(--text-color-light);
        margin: 20px 0px;
    }

    .input_container {
        width: 100%;
        height: 45px;
        display: flex;
        align-items: center;
        background: #fff;
        border-radius: 4px;

        .material-icons {
            margin: 0px 10px;
            color: var(--text-color-light);
        }

        input {
            flex: 1;
            border: none;
            height: 100%;
            outline: none;
            color: var(--text-color);
            font-size: 1rem;
            padding-right: 10px;
        }

        input::placeholder {
            color: var(--text-color-light);
        }
    }
`