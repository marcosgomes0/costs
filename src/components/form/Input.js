import styles from './Input.module.css'

function Input({text,type, name, placeholder, handleOnChange, value}){
    return(
        <div className={styles.inputt}>
            <label htmlFor={name}>{text}:</label>
            <input type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={handleOnChange} />
        </div>
    )
}
export default Input                                                        