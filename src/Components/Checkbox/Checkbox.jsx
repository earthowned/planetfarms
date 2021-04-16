import {useEffect, useState} from 'react'
import "./checkbox.css";

const Checkbox = ({termsError, setTermsError, terms, setTerms}) => {
    const [active, setActive] = useState(false);

    function changeCheckbox () {
        setActive(!active)
    }

    useEffect(() => {
        if(active) setTermsError(false)
        if(active) {
            setTerms(true) 
        } else {
            setTerms(false)
        }
    }, [changeCheckbox])

    return (
        <div className={active ? "outer-box active" : "outer-box"} onClick={() => changeCheckbox()}>
            {active && <img src="/img/tick.svg" alt="checkbox-for-terms"/>}
        </div>
    )
}

export default Checkbox
