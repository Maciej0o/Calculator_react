import '../components.css';

export const Button =  (props) => {

    

    return (
        <button className={props.className} onClick={props.onClick}>
            {props.name}
        </button>
    )
}