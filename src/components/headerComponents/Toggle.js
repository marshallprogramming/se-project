import React from 'react'
import styled from 'styled-components'

const Button = styled.button`

`

const Toggle = props => {
    const { toggleListingType, selectedListing } = props.data
    return (
        <div>
            <button onClick={ toggleListingType } >
                <span style={{  fontWeight: selectedListing === 'top' && 'bold' }}>Top</span>
                <span> / </span>
                <span style={{  fontWeight: selectedListing === 'recent' && 'bold' }}>Recent</span>
            </button>
        </div>
    )
}

export default Toggle