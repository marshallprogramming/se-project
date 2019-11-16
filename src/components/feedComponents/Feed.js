import React from 'react'
import styled from 'styled-components'

import FeedItem from './FeedItem'

const FeedContainer = styled.div`
    max-width: 100vw;
    display: flex;
    flex-wrap: wrap;
    padding: 80px 10px 100px;
`

const Feed = props => {
    const { items } = props
    return (
        <FeedContainer>
            {items.map((item, index) => <FeedItem key={index} itemData={item} />)}
        </FeedContainer>
    )
}

export default Feed