import PropType from "prop-types";
import style from './ContactList.module.css'



const ContactList = ({filterContact, deleteContact}) => {
    return (
        <ul>
            {filterContact.map(({ name, number, id }) => {
                return ( 
                    <li className={style.nameList} key={id}>
                        <p className={style.text}>{name}: {number}</p>
                        <button className={style.button} onClick={()=> deleteContact(id)}>Delete</button>
            </li>)
            })}

        </ul>
    )
}

ContactList.propType = {
    deleteContact: PropType.func.isRequired,
    filterContact: PropType.array.isRequired
}

export default ContactList;