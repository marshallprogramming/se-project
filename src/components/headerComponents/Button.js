import React from 'react'
import styled from 'styled-components'


const Button = props => {
    const { handleClick, type, selectedItemType } = props.data
    const Button = styled.button`
        background: transparent;
        border: 1px solid #f7f7f7;
        border-radius: 2px;
        height: 28px;
        width: 100px;
        margin-right: 10px;
        color: #f7f7f7;
        font-size: 16px;
        cursor: pointer;
    `

    return (
        <div>
            <Button onClick={ handleClick } value={ type } style={{  fontWeight: type === selectedItemType && 'bold' }}>
                {type}
            </Button>
        </div>
    )
}

export default Button