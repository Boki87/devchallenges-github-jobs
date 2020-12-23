import {StyledLocationSearch} from './styles'

const LocationSearch = ({onInput, value}) => {

    const inputHandler = (e) => {
        onInput(e.target.value.trim())
    }

    return (
        <StyledLocationSearch>
            <div className='label'>LOCATION</div>
            <div className='input_container shadow1'>
                <span className="material-icons">
                    public
                </span>
                <input onChange={inputHandler} value={value} type="search" placeholder='City, state, zip or country'/>
            </div>
        </StyledLocationSearch>
    )
}

export default LocationSearch
