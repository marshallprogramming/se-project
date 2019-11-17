import React from 'react'
import styled from 'styled-components'

import ItemsContainer from './ItemsContainer'
import LoadingAnimation from '../headerComponents/LoadingAnimation'

const FeedContainer = styled.div`
    max-width: 100vw;
    display: flex;
    flex-wrap: wrap;
    padding: 80px 10px 100px;
`

const Feed = props => {
    const { items, isLoading, selectedItemType } = props.data
    return (
        <FeedContainer>
           {isLoading
            ? <LoadingAnimation />
            : <ItemsContainer data={{ items, selectedItemType }} />
            }
        </FeedContainer>
    )
}

export default Feed