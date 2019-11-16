import React from 'react'
import styled from 'styled-components'


const FeedContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: row;
`

const Feed = props => {
    const { items } = props
    return (
        <FeedContainer>
            <FeedItems items={items} />
        </FeedContainer>
    )
}

export default Feed