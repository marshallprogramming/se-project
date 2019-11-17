import React from 'react'
import styled from 'styled-components'

const UpvoteButton = props => {
    const { score } = props.itemData

    const UpvoteButton = styled.div`
        height: 10px;
        width: 10px;
        color: #333;
        display: flex;
        flex-direction: column;
        padding-left: 10px;
    `

    const ButtonSpan = styled.span`
        font-size: 20px;
        position: relative;
        top: 5px;
    `
    const ScoreSpan = styled.span`
        align-self: center;
        padding-left: 4px;
    `

    return (
        <UpvoteButton>
           {score && <ButtonSpan>&#9652;</ButtonSpan>}
           <ScoreSpan>{score}</ScoreSpan>
        </UpvoteButton>
    )
}

export default UpvoteButton