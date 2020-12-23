import {useState, useEffect} from 'react'
import CheckRadioBtn from '../../../components/checkRadioBtn'
import LocationSearch from './locationSearch'

import {useAppContext} from '../../../state'

import {StyledSidebar} from './styles'

const Sidebar = () => {    

    const {locationQuery, setFullTime} = useAppContext()

    const [selectedCity, setSelectedCity] = useState('')
    const [isFullTime, setIsFullTime] = useState(false)

    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        setFullTime(isFullTime)
    }, [isFullTime])


    useEffect(() => {
        var query = selectedCity != '' ? selectedCity : searchQuery        
        let timer = setTimeout(() => {
            locationQuery(query)
        }, 700)
        
        return () => clearTimeout(timer)
    }, [selectedCity, searchQuery])

    const cities =[
        {
            checked: false,
            name: 'London'
        },
        {
            checked: false,
            name: 'Amsterdam'
        },
        {
            checked: false,
            name: 'New York'
        },
        {
            checked: false,
            name: 'Berlin'
        },
    ]

    const radioChangeHandler = (val) => {        
        setSelectedCity(val)        
        setSearchQuery('')
    }

    const checkBoxHandler = (val) => {        
        setIsFullTime(!val)
        
    }


    const searchHandler = (val) => {
        setSelectedCity('')
        setSearchQuery(val)
    }

    return (
        <StyledSidebar>
            <CheckRadioBtn 
                type='checkbox' 
                label='Full Time' 
                name='full_time'
                key='full_time_checkbox'
                checked={isFullTime}
                onClick={checkBoxHandler}
            />

            <LocationSearch onInput={searchHandler} value={searchQuery}/>

            <div>
                {cities.map(city => 
                    <CheckRadioBtn 
                        onClick={radioChangeHandler} 
                        type='radio' 
                        checked={city.checked} 
                        selected={selectedCity} 
                        label={city.name} 
                        name='city' 
                        key={city.name}
                    />
                )}                    
            </div>
        </StyledSidebar>
    )
}

export default Sidebar
