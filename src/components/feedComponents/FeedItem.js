import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
    max-width: 140px;
    margin-left: 20px;
`

const Feed = props => {
    const { itemData } = props
    const { data } = itemData
    const { title, by, score, url } = data
    return (
        <Item>
            <h3>{title}</h3>
            <h5>By {by}</h5>
        </Item>
    )
}

export default Feed