import {useEffect, useState} from 'react'
import {StyledSearchHeader} from './styles'
import {useAppContext} from '../../../state'

import BackgroundImg from '../../../assets/backgroundImg.png'

const SearchHeader = () => {

    const {descriptionQuery} = useAppContext()

    const [query, setQuery] = useState('')

    const inputHandler = (e) => {                    
            let q = e.target.value.trim().split(' ').join(',')        
            setQuery(q)        
    }


    useEffect(() => {        
        let timer = setTimeout(() => {
            descriptionQuery(query)
        }, 700)
        
        return () => clearTimeout(timer)
    }, [query])

    return (
        <StyledSearchHeader bg={BackgroundImg}>
            
            <div className='search_container'>
                <span className="material-icons">
                    work_outline
                </span>

                <input onInput={inputHandler} type="search" placeholder='Title, companies, expertise or benefits'/>

                <div className='button_container'>
                    <button>Search</button>
                </div>
            </div>

        </StyledSearchHeader>
    )
}

export default SearchHeader
