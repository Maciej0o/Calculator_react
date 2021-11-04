import '../components.css';
import { useState } from 'react';
import {Keyboard} from '../keyboard/Keyboard';
import {Screen} from '../screen/Screen';

// eval('5+5')
// eval('++++')
// eval('5 + 5 +')

/*
Nie mozemy wpisac zadnego znaku jesli mamy pusty wyswietlacz. (z wyjatkiem -)
Nie mozemy wpisac 2 znakow specjalnych obok siebie.
Nie mozemy kliknac = jesli na koncu mamy znak specjalny.

Cofanie znaku --- OK
Blokada wpisania 2x znaku - lub -* itp. --- OK
Dla 666+. przed kropke dodajemy 0 --- OK
Buttons.map
Pobawic CSS
*/

const checkIsValidKey = (displayText, clickedKey) => {
    const specialChar = ['+', '/', '*', '%'];
    const isClickedSpecialChar = specialChar.includes(clickedKey);
    // [] -> 0
    // [1] -> -1
    const lastChar = displayText[displayText.length - 1]
    if(displayText === "" && isClickedSpecialChar){
        return false;
    } else if (specialChar.includes(lastChar) && isClickedSpecialChar) {
        return false;
    } else if (specialChar.includes(lastChar) && clickedKey === '='){
        return false;
    } else if (lastChar === '-' && clickedKey === '-'){
        return false;
    } else if (lastChar === '-' && isClickedSpecialChar) {
        return false;
    }
    return true;
}

const addZeroBeforeDot = (displayText) => {
    const numberChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    if(numberChar.includes(displayText[displayText.length - 1])){
        console.log(typeof displayText[displayText.length - 1])
        // return displayText.push('0.');
        return (displayText += '.');
    };
    return (displayText += '0.');
}

export const Calculator =  () => {

    const [displayText, setDisplayText] = useState("");
    const [result, setResult] = useState("");

    console.log('oper', displayText)


    const handleClick = (e) => {
        const currentKey = e.target.name;

        if(!checkIsValidKey(displayText, currentKey)){
            console.log('return')
            return;
        }

        switch(currentKey){
            case '=':
                setDisplayText(eval(displayText).toString())
                break;
            case 'C':
                setDisplayText("");
                break;
            case 'back':
                setDisplayText(displayText.slice(0, -1))
                break;
            case '.':
                setDisplayText(
                    addZeroBeforeDot(displayText)
                )
                break;
            default:
                setDisplayText(displayText.concat(currentKey));
        }
    }

    return (
        <div className="calculator">
            <Screen displayText={displayText}/>
            <Keyboard onClick={handleClick}/>
        </div>
    )
}