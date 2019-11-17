import React from 'react'
import styled from 'styled-components'

import FeedItem from './FeedItem'

const ItemsContainer = props => {
    const { items, selectedItemType } = props.data
    const filteredItems = items.filter(item => item.data && item.data.type === selectedItemType && item.data.by).slice(0, 100)

    const ItemsWrapper = styled.div`
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        padding: 80px 0 100px;
        justify-content: flex-start;
    `

    const NoItemsMessage = styled.h3`
        font-wright: bold;
    `

    return (
        <ItemsWrapper>
            {filteredItems.length
                ? filteredItems.map((item, index) => <FeedItem key={index} itemData={item} />)
                : <NoItemsMessage>No items of this type.</NoItemsMessage>}
        </ItemsWrapper>
    )
}

export default ItemsContainer