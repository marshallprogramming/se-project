import React from 'react'
import styled from 'styled-components'

import Buttons from './Buttons'
import HeaderLogo from './HeaderLogo'

const Header = props => {
    const { handleClick, itemTypes, toggleListingType, selectedListing, selectedItemType } = props.data
    const HeaderContainer = styled.div`
        width: calc(100% - 10px);
        padding: 10px 5px;
        background-color: #333;
        position: fixed;
        top: 0;
        z-index: 10;
    `

    return (
        <HeaderContainer>
            <HeaderLogo />
            <Buttons data={{ handleClick, itemTypes, toggleListingType, selectedListing, selectedItemType }} />
        </HeaderContainer>
    )
}

export default Header