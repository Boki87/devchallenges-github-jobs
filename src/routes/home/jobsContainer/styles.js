import styled from 'styled-components'

export const StyledJobsContainer = styled.div`
    flex-grow: 1;
    
    min-width: 300px;
    /* flex-basis: 300px; */
    min-height: 300px;        
    position: relative;


    .pagination_container {
        display:flex;
        list-style: none;
        justify-content: flex-end;
        li {
            width: 30px;
            height:30px;            
            border-radius: 4px;
            border: 1px solid var(--text-color-light);
            color: var(--text-color-light);
            margin: 0px 3px;
            cursor: pointer;
            a {
                color: inherit;
                width:100%;
                height:100%;
                display:flex;
                justify-content:center;
                align-items:center;
                outline: none;
            }

            a:hover {
                color: inherit;
            }

        }

        li:hover {
            border: 1px solid var(--blue);
            color: var(--blue);
        }

        .active_pagination {
            color: #fff;
            background: var(--blue);
            border: 1px solid var(--blue);
            outline: none;
        }

        .active_pagination:hover {
            color: #fff;
        }
        
    }
`