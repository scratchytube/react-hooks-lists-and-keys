import React from 'react'

const ColorItem = ({color}) => {
    return <li style = {{color: color}}> {color}
        </li>
}

export default ColorItem