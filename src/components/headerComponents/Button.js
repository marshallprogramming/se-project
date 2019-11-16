import React from 'react'

const Button = props => {
    const { handleClick, type, selectedItemType } = props.data
    return (
        <div>
            <button onClick={ handleClick } value={ type } style={{  fontWeight: type === selectedItemType && 'bold' }}>
                {type}
            </button>
        </div>
    )
}

export default Button