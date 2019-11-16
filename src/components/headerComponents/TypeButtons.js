import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const Container = styled.div`
    display: flex;
`

const TypeButtons = props => {
    const { handleClick, itemTypes, selectedItemType } = props.data
    return (
        <Container>
            { itemTypes.map((type, index) =><Button key={index} data={{ handleClick, type, selectedItemType }} />)}
        </Container>
    )
}

export default TypeButtons