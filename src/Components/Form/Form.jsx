import React from "react";
import './Form.css' ;
const Form = ()=> {
    const [country,setCountry]=useState('');
    const [city,setStreet]=useState('');
    const [subject,setSubject]=useState('');

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }


    return (
        <div className={"form"}>
            <input className={"input"} 
                type="text" 
                placeholder={"Страна"}
                value={country}
                onChange={onChangeCountry}/>

            <input className={"input"} 
                type="text" 
                placeholder={"Улица"}
                value={street}
                onChange={onChangeStreet}/>

            <select value={subject} onChange={onChangeSubject} className={"select"}>
                <option value={'physical'}>Физ. Лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    )
}

export default Form;