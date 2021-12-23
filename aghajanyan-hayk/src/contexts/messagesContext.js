import {useEffect, useState, createContext, useContext} from 'react'
import axios from "axios";

const MessagesContext = createContext(null)

const MessagesProvider = ({children}) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        axios.get('/db.json')
            .then(res => setMessages(res.data.messages))
    },[])

    return (
        <MessagesContext.Provider value={{messages}}>
            {children}
        </MessagesContext.Provider>
    )
}

export const useMessagesData = () => useContext(MessagesContext)

export default MessagesProvider
