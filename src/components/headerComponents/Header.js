import React from 'react'
import styled from 'styled-components'

import Buttons from './Buttons'
import HeaderLogo from './HeaderLogo'

const HeaderContainer = styled.div`
    width: calc(100% - 10px);
    padding: 10px 5px;
    background-color: #333;
`

const Header = props => {
    const { handleClick, itemTypes, toggleListingType, selectedListing } = props.data
    return (
        <HeaderContainer>
            <HeaderLogo />
            <Buttons data={{ handleClick, itemTypes, toggleListingType, selectedListing }} />
        </HeaderContainer>
    )
}

export default Header