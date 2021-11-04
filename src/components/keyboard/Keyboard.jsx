import '../components.css';
import {Button} from '../button/Button';

export const Keyboard = (props) => {
    const buttons = [
        {name: 'C', className: 'button'},
        {name: 'back', className: 'button'},
        {name: '%', className: 'button'},
        {name: '/', className: 'button'},
        {name: '7', className: 'button'},
        {name: '8', className: 'button'},
        {name: '9', className: 'button'},
        {name: '*', className: 'button'},
        {name: '4', className: 'button'},
        {name: '5', className: 'button'},
        {name: '6', className: 'button'},
        {name: '-', className: 'button'},
        {name: '1', className: 'button'},
        {name: '2', className: 'button'},
        {name: '3', className: 'button'},
        {name: '+', className: 'button'},
        {name: '0', className: 'button'},
        {name: '.', className: 'button'},
        {name: '=', className: 'button btn-long'},
    ]
         const listButtons = buttons.map((el, i) => (
            <Button key = {i} name={el.name} className={el.className} onClick={props.onClick} />
            ))


    // {buttons.map}
    return (
        <div className='keyboard'>
            {listButtons}
            
                  {/* <button onClick={props.onClick} className='button' name='C'>C</button>
            <button onClick={props.onClick} className='button' name='back'>back</button>
            <button onClick={props.onClick} className='button' name='%'>%</button>
            <button onClick={props.onClick} className='button' name='/'>/</button>
            <button onClick={props.onClick} className='button' name='7'>7</button>
            <button onClick={props.onClick} className='button' name='8'>8</button>
            <button onClick={props.onClick} className='button' name='9'>9</button>
            <button onClick={props.onClick} className='button' name='*'>*</button>
            <button onClick={props.onClick} className='button' name='4'>4</button>
            <button onClick={props.onClick} className='button' name='5'>5</button>
            <button onClick={props.onClick} className='button' name='6'>6</button>
            <button onClick={props.onClick} className='button' name='-'>-</button>
            <button onClick={props.onClick} className='button' name='1'>1</button>
            <button onClick={props.onClick} className='button' name='2'>2</button>
            <button onClick={props.onClick} className='button' name='3'>3</button>
            <button onClick={props.onClick} className='button' name='+'>+</button>
            <button onClick={props.onClick} className='button' name='0'>0</button>
            <button onClick={props.onClick} className='button'name='.'>.</button>
            <button onClick={props.onClick}  className='button btn-long' name='='>=</button> */}

          

        </div>
    )
}