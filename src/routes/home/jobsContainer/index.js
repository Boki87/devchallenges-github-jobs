import {useEffect, useState} from 'react'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate'
import { useHistory } from "react-router-dom";

import JobCard from '../../../components/jobCard'
import {useAppContext} from '../../../state'

import {StyledJobsContainer} from './styles'


const StyledLoader = styled.div`

    width:100%;
    height:100%;
    position: absolute;
    top:0; left:0;
    z-index: 10;
    background: rgba(255,255,255,0.6);
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
`


const JobsContainer = () => {
    const history = useHistory();
    const {jobs, numOfJobsPerPage, page, numOfPages, loadingData, setPage} = useAppContext()
    
    const [jobsPerPage, setJobsPerPage] = useState([])

    useEffect(() => {
        
        let j = jobs.slice(page * numOfJobsPerPage, page * numOfJobsPerPage + numOfJobsPerPage)
        
        setJobsPerPage(j)

    }, [page, numOfJobsPerPage, jobs])


    const openJobPosting = (id) => {        
        history.push(`/job/${id}`)
    }

    const paginationClickHandler = ({selected}) => {        
        setPage(selected)
    }

    return (
        <StyledJobsContainer>

            {loadingData &&  
                <StyledLoader>
                    <span className="material-icons spin">
                        cached
                    </span>
                </StyledLoader>
            }


            {jobsPerPage.map(job => 
                <JobCard 
                    onClick={() => openJobPosting(job.id)}
                    img={job.company_logo} 
                    company={job.company} 
                    position={job.title} 
                    fulltime={job.type == 'Full Time'}
                    location={job.location} 
                    datePosted={job.created_at}
                    key={job.id}
                />
            )}
            
            <div>
                <ReactPaginate                     
                    onPageChange={paginationClickHandler}
                    previousLabel={<span className="material-icons">navigate_before</span>}
                    nextLabel={<span className="material-icons">keyboard_arrow_right</span>}
                    containerClassName="pagination_container"
                    activeClassName={'active_pagination'}
                    pageCount={numOfPages}       
                    forcePage={page}             
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                />
            </div>

        </StyledJobsContainer>
    )
}

export default JobsContainer
