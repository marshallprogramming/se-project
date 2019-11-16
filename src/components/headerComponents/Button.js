import React from 'react'

const Button = props => {
    const { handleClick, type } = props.data
    return (
        <div>
            <button onClick={ handleClick } value={ type }>
                {type}
            </button>
        </div>
    )
}

export default Button