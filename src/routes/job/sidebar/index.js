import {useState} from 'react'
import {Link} from 'react-router-dom'

import {StyledJobSidebar} from './styles.js'

const JobSidebar = ({how_to_apply}) => {
    

    return (
        <StyledJobSidebar>
            <div className='back_to_search_container'>
                <Link to='/'>
                    <span className="material-icons">
                        keyboard_backspace
                    </span>
                    <span className='back_text'>
                        Back to search
                    </span>
                </Link>
            </div>

            <div className='body'>
                <h4>HOW TO APPLY</h4>

                <div dangerouslySetInnerHTML={{__html:how_to_apply}}></div>

            </div>
        </StyledJobSidebar>
    )
}

export default JobSidebar


