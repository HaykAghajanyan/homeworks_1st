import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import Messages from "./components/Messages";
import Config from "./components/Config";
import {useCallback, useState} from "react";

const App = () => {
    const [configs, setConfigs] = useState({})

    const handleConfigs = useCallback((configObj) => {
        setConfigs(configObj)
    },[])

    return (
        <div className='container'>
            <Header/>
            <Routes>
                <Route path='/' element={<Messages configs={configs}/>}/>
                <Route path='/config' element={<Config handleConfigs={handleConfigs}/>}/>
            </Routes>
        </div>
    )
}


export default App;


// const App2 = () => {
//     const [circles] = useState([
//         {
//             id: FIRST_CIRCLE,
//             color: RED
//         },
//         {
//             id: SECOND_CIRCLE,
//             color: BLUE
//         },
//         {
//             id: THIRD_CIRCLE,
//             color: PURPLE
//         },
//         {
//             id: FOURTH_CIRCLE,
//             color: BROWN
//         },
//         {
//             id: FIFTH_CIRCLE,
//             color: GREEN
//         },
//     ])
//     const [chosenCircle, setChosenCircle] = useState(null)
//     const [isHeaderShown, setIsHeaderShown] = useState(true)
//     const [number, setNumber] = useState(1)
//     const [user] = useState({
//         name: 'Hayk',
//         age: 27
//     })
//
//     useEffect(() => {
//         console.log('did mount')
//     }, [])
//
//     useEffect(() => {
//         console.log('did update')
//     },[chosenCircle, isHeaderShown])
//
//     const headerToggle = (a) => {
//         // this.setState({isHeaderShown: !this.state.isHeaderShown})
//         setIsHeaderShown((prev) => !prev)
//     }
//
//     const clickHandler = e => {
//         // this.setState({chosenCircle: e.target.id})
//         setChosenCircle(e.target.id)
//     }
//
//     const add = () => {
//         setNumber((prev) => prev + 1)
//         setNumber((prev) => prev + 1)
//         setNumber((prev) => prev + 1)
//         setNumber((prev) => prev + 1)
//         setNumber((prev) => prev + 1)
//     }
//
//     return (
//         <>
//             {
//                 isHeaderShown && <Header
//                     user={user}
//                     color={chosenCircle && circles[chosenCircle - 1].color}
//                 />
//             }
//             <button onClick={add}>++</button>
//             <button onClick={(e) => headerToggle(e)}>{isHeaderShown ? 'Hide' : 'Show'} header</button>
//             <div className='container'>
//                 {
//                     circles.map(item => {
//                         return (
//                             <div
//                                 key={item.id}
//                                 id={item.id}
//                                 className='circle'
//                                 style={{backgroundColor: chosenCircle === item.id ? ORANGE : item.color}}
//                                 onClick={clickHandler}
//                             >
//                                 {item.id}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
//
// const App1 = () => {
//     const [circles] = useState([
//         {
//             id: FIRST_CIRCLE,
//             color: RED
//         },
//         {
//             id: SECOND_CIRCLE,
//             color: BLUE
//         },
//         {
//             id: THIRD_CIRCLE,
//             color: PURPLE
//         },
//         {
//             id: FOURTH_CIRCLE,
//             color: BROWN
//         },
//         {
//             id: FIFTH_CIRCLE,
//             color: GREEN
//         },
//     ])
//     const [chosenCircle, setChosenCircle] = useState(null)
//     const [isHeaderShown, setIsHeaderShown] = useState(true)
//     const [user] = useState({
//         name: 'Hayk',
//         age: 27
//     })
//
//     useEffect(() => {
//         console.log('header toggled')
//     }, [isHeaderShown])
//
//     const clickHandler = (e) => {
//         // this.setState({chosenCircle: e.target.id})
//         setChosenCircle(e.target.id)
//     }
//
//     const headerToggle = () => {
//         // this.setState({isHeaderShown: !this.state.isHeaderShown})
//         setIsHeaderShown((prev) => !prev)
//     }
//
//     return (
//         <>
//             {
//                 isHeaderShown && <Header
//                     user={user}
//                     color={chosenCircle && circles[chosenCircle - 1].color}
//                 />
//             }
//             <button onClick={headerToggle}>{isHeaderShown ? 'Hide' : 'Show'} header</button>
//             <div className='container'>
//                 {
//                     circles.map(item => {
//                         return (
//                             <div
//                                 key={item.id}
//                                 id={item.id}
//                                 className='circle'
//                                 style={{backgroundColor: chosenCircle === item.id ? ORANGE : item.color}}
//                                 onClick={clickHandler}
//                             >
//                                 {item.id}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
