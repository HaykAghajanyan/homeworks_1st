import React, {useState} from 'react';
import './Form.css'

function Form({searchTitle}) {
    const [value, setValue] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault()
        setValue('');
        searchTitle(value);
    }
    return (
        <section>
            <form onSubmit={e=> handleSubmit(e)}>
                <input type="text" onChange={(e) => setValue(e.target.value)} value={value} placeholder='Search Item' />
                <button type='submit'>Search</button>
            </form>
        </section>
    )
}

export default Form