import styled from 'styled-components'

import SearchHeader from './searchHeader'
import Sidebar from './sidebar'
import JobsContainer from './jobsContainer'

import {StyledHome} from './styles'


const StyledContentWrapper = styled.div`    
    display:flex;
    flex-wrap: wrap;    
`


const Home = () => {
    return (
        <StyledHome>
            <SearchHeader />
            <StyledContentWrapper>
                <Sidebar />
                <JobsContainer />
            </StyledContentWrapper>                
        </StyledHome>
    )
}

export default Home
