import React from 'react'
import { Container, WrapPellen } from './style'
import ImgRight from '../../assets/icons/WhiteRight.svg'

export default function Pellentesque() {
    return (
        <WrapPellen>
            <Container>
                <h2>
                    Pellentesque suscipit fringilla libero eu.
                </h2>
                <button>Get a Demo <img src={ImgRight} alt="right" /></button>
            </Container>
        </WrapPellen>
    )
}
