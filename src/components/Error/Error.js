import classes from '../Input/InputText.module.css'


const Error= (props) => {
    return <div className={classes.error}> {props.errorMsg}</div>
}

export default Error;