import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import JobSidebar from './sidebar'
import JobDetails from './details'

import {StyledJob} from './styles'

const Job = () => {
    let { id } = useParams();
    
    const [jobDetails, setJobDetails] = useState({})
    const [loading, setLoading] = useState(false)

    async function fetchJobDetails() {
        const req = await fetch(`https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions/${id}.json`)
        const res = await req.json()
        setJobDetails(res)        
    }

    useEffect(() => {
        fetchJobDetails()
    }, [id])


    return (
        <StyledJob>
                
                <JobSidebar how_to_apply={jobDetails.how_to_apply}/>
                
                
                <JobDetails details={jobDetails} loading={loading}/>
        </StyledJob>
    )
}

export default Job
