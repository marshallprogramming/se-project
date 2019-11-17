import React from 'react'
import styled from 'styled-components'

import TypeButtons from './TypeButtons'
import Toggle from './Toggle'

const Buttons = props => {
    const { handleClick, itemTypes, toggleListingType, selectedListing, selectedItemType } = props.data
    const ButtonsContainer = styled.div`
        display: flex;
        justify-content: space-between;
    `
    return (
        <ButtonsContainer>
            <TypeButtons data={{ handleClick, itemTypes, selectedItemType }} />
            <Toggle data={{ toggleListingType, selectedListing }} />
        </ButtonsContainer>
    )
}

export default Buttons