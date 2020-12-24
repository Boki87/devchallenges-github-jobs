import styled from 'styled-components'

export const StyledSearchHeader = styled.div`

    height: 135px;
    width: 100%;
    margin: 10px 0px;
    margin-bottom: 50px;
    border-radius: 8px;
    background: url(${({bg}) => bg}) 50% 50% / cover no-repeat;
    display:flex;
    justify-content: center;
    align-items: center;

    .search_container {
        width: 70%;
        max-width: 800px;
        min-width: 200px;
        margin: 0px 10px;
        height: 55px;
        background: #fff;
        border-radius: 4px;
        display:flex;
        overflow: hidden;
        .material-icons {
            width: 40px;
            height:100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--text-color-light);
        }

        input {
            flex: 1;
            height:100%;
            border: none;
            outline: none;
            font-size: 1.2rem;
            padding-left: 10px;
            color: var(--text-color);
        }

        input::placeholder {
            color: var(--text-color-light);
        }

        .button_container {
            width: 120px;
            height: 100%;
            padding: 3px;
            display: flex;
            justify-content: center;
            align-items: center;

            button {
                width:100%;
                height:100%;
                border:none;
                background: var(--blue);
                color: #fff;
                font-size: 1rem;
                outline: none;
                border-radius: 4px;
                cursor: pointer;
            }
        }        
    }

`