import styled from 'styled-components'

export const StyledJobSidebar = styled.div`
    flex: 1;
    min-width: 300px;
    /* max-width: 300px; */
    min-height:100px;    
    margin-right: 20px;
    margin-bottom: 10px;

    .back_to_search_container {

        a {
            text-decoration: none;
            color: var(--blue);
            font-size: 1.1.rem;
            font-weight: 400;
            height: 40px;
            display:flex;
            align-items:center;
            color: pointer;
            .material-icons {
                margin-right: 10px;    
            }
        }
    }

    .body {
        h4 {
            color: var(--text-color-light);
        }

        p {
            color: var(--text-color);
            font-size: 0.9rem;
            line-height: 1.3rem;
            font-weight: 500;
            a {
                text-decoration: none;
                color: var(--blue);
            }
        }
    }
`