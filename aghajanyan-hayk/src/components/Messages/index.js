import {useMessagesData} from "../../contexts/messagesContext";
import {useEffect, useState, memo} from "react";

const Messages = ({configs}) => {
    const [inputValue, setInputValue] = useState('')
    const [selectValue, setSelectValue] = useState('name')
    const [filteredMessages, setFilteredMessages] = useState([])

    const {messages} = useMessagesData()

    useEffect(() => {
        const filteredData = messages
            .filter(item => item[selectValue].includes(inputValue))
            .map(item => {
                item[configs.colorTarget] = configs.selectedColor
                return item
            })
        setFilteredMessages(filteredData)
    }, [inputValue, selectValue, configs])


    const handleSelect = e => {
        setSelectValue(e.target.value)
    }

    const handleMessageInput = e => {
        setInputValue(e.target.value)
    }

    return (
        <>
            <div className='message-search'>
                <input
                    className='message-input'
                    value={inputValue}
                    onChange={handleMessageInput}
                    type="text"
                />
                <select
                    value={selectValue}
                    onChange={handleSelect}
                    name="messageFilter"
                    id="messageFilter"
                >
                    <option value="name">byName</option>
                    <option value="text">byText</option>
                </select>
            </div>
            <div className='message-container'>
                {
                    filteredMessages.map(item => (
                        <div key={item.id} className='message-item'>
                            <p style={{color: item.nameColor}}>{item.name}</p>
                            <p>{item.date}</p>
                            <p style={{color: item.textColor}}>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </>

    )
}

export default memo(Messages)
