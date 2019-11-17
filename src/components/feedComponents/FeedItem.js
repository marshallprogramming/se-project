import React from 'react'
import styled from 'styled-components'

const Feed = props => {
    const { itemData } = props
    const { data } = itemData
    const { title, by, score, url } = data

    const Item = styled.div`
        width: 140px;
        margin-left: 20px;
    `

    return (
        <Item>
            <a href={url}>
                <h3>{title}</h3>
            </a>
            <h5>By {by}</h5>
        </Item>
    )
}

export default Feed