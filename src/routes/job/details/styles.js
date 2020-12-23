import styled from 'styled-components'

export const StyledJobDetails = styled.div`

    flex: 5;
    min-width: 300px;
    min-height:100px;

   
    .header {

        .date_posted {            
            color: var(--text-color-light);
            font-size: 0.8rem;
            display:flex;
            align-items:center;
            .material-icons {
                margin-right: 7px;
            }
        }

        .title_container {
            display:flex;
            align-items:center;
            flex-wrap: wrap;
            .job_title {
                min-width: 300px;
                font-size: 2rem;
                color: var(--text-color);
                font-weight: 700;
                margin-right: 20px;
            }
            .full_time {
                min-width: 80px;
                height: 30px;
                border: 1px solid var(--text-color);
                border-radius: 4px;
                display: flex;
                justify-content: center;
                align-items:center;
                font-size: 0.9rem;
                color: var(--text-color);
                font-weight: 700;
            }   
        }
    }

    .company_info {
        display:flex;
        height: 60px;
        margin-top: 20px;
        .img_container {
            width: 60px;
            height: 100%;
            margin-right: 10px;
            img {
                width:100%;
                height: 100%;
                object-fit: contain;
            }            
        }

        .info {
                display: flex;
                flex-direction: column;                
                height: 100%;
                .name {
                    font-size: 0.9rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                    color: var(--text-color);
                }
                .location {
                    .material-icons {
                        margin-right: 10px;
                    }

                    display: flex;
                    color: var(--text-color-light);
                    font-size: 0.9rem;
                    align-items: center;
                }
            }

    }

    .details {
        color: var(--text-color);
        font-size: 1rem;
        p {
            line-height: 1.4rem;
        }

        a {
            color: var(--blue);
        }
    }

    .loader {
        width:100%;
        height:100%;
        position: absolute;
        top:0; left:0;
        z-index: 10;
        background: rgba(255,255,255,0.8);
        display: flex;
        justify-content: center;
        align-items:center;

        .spin {
            -webkit-animation: spin 2s linear infinite; /* Safari */
            animation: spin 2s linear infinite;
            font-size: 3rem;
            color: var(--text-color);
        }


        @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(-360deg); }
        }

        @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(-360deg); }
        }
    }


    
`