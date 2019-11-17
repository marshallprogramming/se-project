import React from 'react'
import styled from 'styled-components'

import UpvoteButton from './UpvoteButton'
import ItemInfo from './ItemInfo'

const FeedItem = props => {
    const { itemData } = props
    const { data } = itemData

    const Item = styled.div`
        display: grid;
        grid-template-columns: 2fr 5fr;
        width: 140px;
        height: 180px;
        border: 1px solid #333;
        border-radius: 2px;
        margin: 5px;
    `


    return (
        <Item>
            <UpvoteButton itemData={data} />
            <ItemInfo itemData={data} />
        </Item>
    )
}

export default FeedItem