import {StyledJobDetails} from './styles'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'




TimeAgo.addLocale(en)


const JobDetails = ({details, loading}) => {

    
    const timeAgo = new TimeAgo('en-US')

    var {company, 
    company_logo, 
    company_url, 
    created_at, 
    description, 
    location, 
    title,
    type,
    url} = details
    
    return (
        <StyledJobDetails>

            {loading &&  
                <div className='loader'>
                    <span className="material-icons spin">
                        cached
                    </span>
                </div>
            }


            <div className='header'>
                <div className='title_container'>
                    <span className='job_title'>{title}</span>
                    {type == 'Full Time' ? <span className='full_time'>Full Time</span> : ''}
                </div>
                {created_at && 
                    <span className='date_posted'>
                        <span className="material-icons">
                            schedule
                        </span>
                        {timeAgo.format(Date.parse(created_at))}
                    </span>
                }
            </div>

            <div className='company_info'>
                {company_logo && company_logo != '' ? 
                
                    <div className='img_container'>
                        <img src={company_logo} alt=""/>
                    </div>
                    : ''
                }
                <div className='info'>
                    <span className='name'>{company}</span>
                    <span className='location'>
                        <span className="material-icons">
                            public
                        </span>
                        <span>{location}</span>                        
                    </span>
                </div>
            </div>

            <div className='details' dangerouslySetInnerHTML={{__html:description}}>

            </div>
        </StyledJobDetails>
    )
}

export default JobDetails
