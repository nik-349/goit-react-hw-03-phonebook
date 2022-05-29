import PropType from "prop-types";
import style from './Filter.module.css'


const Filter = ({filterChangeInput}) => {
    return (
        <label >
            {/* Search my contacts */}
            <input className={style.input__info} type="text" placeholder="Search" onChange={filterChangeInput} />
            
        </label>
                
    )
}

Filter.propType = {
    filterChangeInput: PropType.func.isRequired,
}

export default Filter;
