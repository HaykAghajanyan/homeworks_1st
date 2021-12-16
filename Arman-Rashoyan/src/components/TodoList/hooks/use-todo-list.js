import React, {useEffect, useState} from "react";
import getTodoList from "../services/todoList"

const useTodoList = () => {
    const [list, setList] = useState()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getTodoList().then((data)=> {
            setList(data)
        })
        setLoading(false)  // Hayk => ավելի ճիշտ կլիներ finally-ի մեջ անեիր սա
    }, [])

    return {list,loading}
}

export default useTodoList
