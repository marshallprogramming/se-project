import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const TypeButtons = props => {
    const { handleClick, itemTypes, selectedItemType } = props.data
    const Container = styled.div`
        display: flex;
    `

    return (
        <Container>
            { itemTypes.map((type, index) =><Button key={index} data={{ handleClick, type, selectedItemType }} />)}
        </Container>
    )
}

export default TypeButtons