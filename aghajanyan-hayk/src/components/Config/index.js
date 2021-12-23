import {useState, memo, useEffect} from "react";

const Config = ({handleConfigs}) => {
    const [selectedColor, setSelectedColor] = useState('black')
    const [colorTarget, setColorTarget] = useState('nameColor')

    useEffect(() => {
        handleConfigs({selectedColor, colorTarget})
    }, [selectedColor, colorTarget])

    const handleColorChange = e => {
        setSelectedColor(e.target.value)
    }
    const handleColorTarget = e => {
        setColorTarget(e.target.value)
    }

    return (
        <div className='config-container'>
            <select
                name="selectColor"
                id="selectColor"
                value={selectedColor}
                onChange={handleColorChange}
            >
                <option value="orange">orange</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="black">black</option>
            </select>
            <select
                name="colorTarget"
                id="colorTarget"
                value={colorTarget}
                onChange={handleColorTarget}
            >
                <option value="nameColor">name</option>
                <option value="textColor">text</option>
            </select>
        </div>
    )
}

export default memo(Config)
