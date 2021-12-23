import { memo} from "react";
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header className='header'>
            <NavLink className='navLink' to='/'>Messages</NavLink>
            <NavLink className='navLink' to='/config'>Config</NavLink>
        </header>
    )
}

export default memo(Header)
































// const Header2 = ({color, user}) => {
//     useEffect(() => {
//         document.addEventListener('click', clickListener)
//         return () => {
//             document.removeEventListener('click', clickListener)
//         }
//     },[])
//
//     const clickListener = e => {
//         console.log('Have I clicked on the header ? ', e.target.localName === 'header')
//     }
//
//     return (
//         // <header className='header' style={{backgroundColor: color}}>
//         //     Header {user.name}
//         // </header>
//         <header className='header' style={{backgroundColor: color}}>
//             <div>
//                 Header {user.name}
//             </div>
//         </header>
//     )
// }
//
// const Header1 = ({color, user}) => {
//     useEffect(() => {
//         document.addEventListener('click', clickListener)
//         return () => {
//             document.removeEventListener('click', clickListener)
//         }
//     }, [])
//
//     const clickListener = (e) => {
//         console.log('Have I clicked on the header ? ', e.target.localName === 'header')
//     }
//
//     return (
//         <header className='header' style={{backgroundColor: color}}>
//             Header {user.name}
//         </header>
//     )
// }

