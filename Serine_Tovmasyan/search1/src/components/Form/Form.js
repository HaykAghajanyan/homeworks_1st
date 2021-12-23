import React, {useState} from 'react';
import './Form.css'

function Form({searchTitle}) {
    const [value, setValue] = useState('');

    const handleChange = (e)=>{
        searchTitle(e.target.value);
        setValue(e.target.value);
    }
    return (
        <section>
            <form onSubmit={e=> e.preventDefault()}>
                <input value={value} type="text" onChange={(e) => handleChange(e)} placeholder='Search Item' />
            </form>
        </section>
    )
}

export default Form