import styled from 'styled-components'

export const StyledJobCard = styled.div`

    width: 100%;
    height: 115px;    
    display:flex;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 4px var(--box-shadow);
    padding: 10px;
    margin: 20px 0px;
    cursor: pointer;

    .image_container {
        min-width: 105px;
        max-width: 105px;
        height: 100%;        

        .company_logo {
            width:100%;
            height: 100%;
            object-fit: contain;
        }

        .no_image {
            width:100%;
            height: 100%;
            background: #F2F2F2;
            color: #BDBDBD;
            font-size: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }
    }

    .info_body {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-left: 15px;
        overflow: hidden;
        .company_info {
            flex: 2;
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            color: var(--text-color);
            .name {
                font-size: 0.8rem;
            }

            .position {
                font-size: 1.3rem;
                font-weight: 400;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

        }
        
        .body_footer {
            height:70px;
            display:flex;
            align-items: center;
            flex-wrap: wrap;

            .full_time {
                border: 1px solid var(--text-color);
                color: var(--text-color);
                display:flex;
                justify-content: center;
                align-items:center;
                font-weight: 700;
                font-size: 0.8rem;
                height: 30px;
                padding: 0px 5px;
                border-radius: 4px;
                width: 70px;
                margin-right: 20px;
            }
            .left {
                flex:1;                                
            }
            .right {     
                height:30px;           
                display:flex;
                align-items:center;
                /* justify-content: flex-end; */
                min-width: 100px;                

                .icon_span {
                    .material-icons {
                        margin-right: 7px;
                    }
                    font-size: 0.8rem;
                    display:flex;
                    align-items:center;
                    justify-content: center;                    
                    color: var(--text-color-light);
                }
            }

        }
    }
`