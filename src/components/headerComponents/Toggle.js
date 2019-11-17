import React from 'react'
import styled from 'styled-components'

const Toggle = props => {
    const { toggleListingType, selectedListing } = props.data

    const Button = styled.button`
        background: transparent;
        border: 1px solid #f7f7f7;
        border-radius: 2px;
        height: 42px;
        width: 128px;
        cursor: pointer;
    `

    const Span = styled.span`
        color: #f7f7f7;
        font-size: 18px;
    `

    return (
        <div>
            <Button onClick={ toggleListingType } >
                <Span style={{  fontWeight: selectedListing === 'top' && 'bold' }}>Top</Span>
                <Span> / </Span>
                <Span style={{  fontWeight: selectedListing === 'recent' && 'bold' }}>Recent</Span>
            </Button>
        </div>
    )
}

export default Toggle