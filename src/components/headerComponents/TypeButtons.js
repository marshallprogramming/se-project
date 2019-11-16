import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const Container = styled.div`
    display: flex;
`

const TypeButtons = props => {
    const { handleClick, itemTypes } = props.data
    return (
        <Container>
            { itemTypes.map((type, index) =><Button key={index} data={{ handleClick, type }} />)}
        </Container>
    )
}

export default TypeButtons