import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import {StyledJobCard} from './styles'


TimeAgo.addLocale(en)


const JobCard = ({img, company, position, fulltime, location, datePosted,onClick}) => {
    
    const timeAgo = new TimeAgo('en-US')


    return (
        <StyledJobCard onClick={onClick}>
            <div className='image_container'>
                {img ? <img src={img} className='company_logo'/> : <div className='no_image'>not found</div>}
            </div>
            <div className='info_body'>
                <div className='company_info'>
                   <span className='name'>{company}</span> 
                   <span className='position'>{position}</span> 
                </div>
                
                <div className='body_footer'>
                     <div className='left'>
                         {fulltime &&<div className='full_time_btn'>Full Time</div>}
                     </div>

                    <div className='right'>
                        <div className='icon_span'>
                            <span className="material-icons">
                                public
                            </span>
                            <span>{location}</span>
                        </div>

                        <div className='icon_span' style={{marginLeft:'20px'}}>
                            <span className="material-icons">
                                schedule
                            </span>
                            <span>{timeAgo.format(Date.parse(datePosted))}</span>
                        </div>
                    </div>
                </div>
            </div>
        </StyledJobCard>
    )
}

export default JobCard
