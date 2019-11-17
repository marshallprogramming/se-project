import React from 'react'
import styled, { css } from 'styled-components'

import ItemsContainer from './ItemsContainer'
import LoadingAnimation from './LoadingAnimation'

const Feed = props => {
    const { items, isLoading, selectedItemType } = props.data

    const FeedContainer = styled.div`
        max-width: 100vw;
        display: flex;
        flex-wrap: wrap;
        padding: 30px 10px 70px;

        ${isLoading && css`
            justify-content: center;
            align-items: center;
            height: calc(100vh - 130px);
        `}
    `

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