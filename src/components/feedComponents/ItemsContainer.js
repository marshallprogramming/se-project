import React from 'react'
import styled from 'styled-components'

import FeedItem from './FeedItem'

const ItemsWrapper = styled.div`
    max-width: 100vw;
    display: flex;
    flex-wrap: wrap;
    padding: 80px 10px 100px;
`

const NoItemsMessage = styled.h3`
    font-wright: bold;
`

const ItemsContainer = props => {
    const { items, selectedItemType } = props.data
    console.log(items)
    console.log(selectedItemType)
    const filteredItems = items.filter(item => item.data && item.data.type === selectedItemType)
    return (
        <ItemsWrapper>
            {filteredItems.length
                ? filteredItems.map((item, index) => <FeedItem key={index} itemData={item} />)
                : <NoItemsMessage>No items of this type.</NoItemsMessage>}
        </ItemsWrapper>
    )
}

export default ItemsContainer