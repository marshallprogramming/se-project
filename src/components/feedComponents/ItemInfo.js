import React from 'react'
import styled from 'styled-components'

const ItemInfo = props => {
    const { itemData } = props
    const { title, by, url, text } = itemData
    console.log(itemData)

    const ItemInfoContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `

    const Header3 = styled.h3`
        color: #333;
        font-size: 14px;

    `

    const Text = styled.p`
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
        font-size: 13px;
    `

    const Header5 = styled.h5`
        color: #333;
    `

    const titleSliced = title && title.slice(0, 30)
    const displayTitle = title && titleSliced.length < title.length
        ? titleSliced + '...'
        : titleSliced

    const textSliced = text && text.slice(0, 20)
    const displayText = text && textSliced.length < text.length
        ? textSliced + '...'
        : textSliced


    return (
        <ItemInfoContainer>
            <a href={url}>
                <Header3>{displayTitle}</Header3>
            </a>
            <Text>{displayText}</Text>
            <Header5>By {by}</Header5>
        </ItemInfoContainer>
    )
}

export default ItemInfo