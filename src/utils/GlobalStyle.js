import {createGlobalStyle} from 'styled-components'

export const Style = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;700&display=swap');

    :root {
        --text-color: ${({theme}) => theme.textColor};
        --text-color-light: ${({theme}) => theme.textColorLight};
        --body-bg-color: ${({theme}) => theme.bodyBgColor};
        --card-bg-color: ${({theme}) => theme.cardBgColor};
        --box-shadow: ${({theme}) => theme.boxShadow};
        --blue: #1E86FF;
    }

    #root {
        width: 100%;
        height: 100%;
        /* display: flex;
        justify-content: center; */
        
    }

    * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        width: 100%;
        height: 100vh;
        margin: 0; padding: 0;
        background: var(--body-bg-color);
    }

    .shadow1 {
        box-shadow: 0px 2px 4px var(--box-shadow);
    }

`