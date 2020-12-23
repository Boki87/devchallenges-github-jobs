import {StyledCheckRadioBtn} from './styles'

const CheckRadioBtn = ({type = 'checkbox', checked = false, label, name = '', selected, onClick}) => {

    const changeHandler = () => {
        onClick(type == 'radio' ? label : checked)
    }
    
    return (
        <StyledCheckRadioBtn>
            <input 
                type={type} 
                name={name} 
                id={`customCheck${type}-${label}`}  
                value={type == 'radio' ? label : checked} 
                checked={type == 'radio' ? selected == label : checked} 
                onChange={changeHandler}/>

            <label htmlFor={`customCheck${type}-${label}`}>{label}</label>
        </StyledCheckRadioBtn>
    )
}

export default CheckRadioBtn
