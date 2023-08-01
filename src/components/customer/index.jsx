import React, { useState } from 'react'
import { Container, Left, Right, WrapCustomer } from './style';
import ImgCus from '../../assets/images/headPhone.png'
import ImgIcon from '../../assets/icons/cusicon.svg'
import ImgIcon2 from '../../assets/icons/ourUFO.svg'
import ImgIcon3 from '../../assets/icons/ourOC.svg'
import ImgIcon4 from '../../assets/icons/ourLogoInpsum.svg'
import ImgIcon5 from '../../assets/icons/ourAtmechat.svg'
import ImgIcon6 from '../../assets/icons/ourChain.svg'
import ImgIcon7 from '../../assets/icons/Right.svg'
import ImgIcon8 from '../../assets/icons/WhiteRight.svg'

export default function Customer() {
    const [hovir, setHovir] = useState(true)
    return (
        <WrapCustomer>
            <Container>
                <Left>
                    <img src={ImgCus} alt="tesla" />
                </Left>
                <Right>
                    <p>
                        Maecenas dignissim justo eget nulla rutrum molestie.
                        Maecenas lobortis sem dui, vel rutrum risus tincidunt
                        ullamcorper. Proin eu enim metus. Vivamus sed libero ornare,
                        tristique quam in, gravida enim. Nullam ut molestie arcu, at
                        hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit.
                        Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales.
                        Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
                        Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                        eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>
                    <h4>Tim Smith</h4>
                    <p>British Dragon Boat Racing Association</p>
                    <div className='iconsWrap'>
                        <div className='icons'>
                            <img src={ImgIcon} alt="icon" />
                            <img src={ImgIcon2} alt="icon" />
                            <img src={ImgIcon3} alt="icon" />
                            <img src={ImgIcon4} alt="icon" />
                            <img src={ImgIcon5} alt="icon" />
                            <img src={ImgIcon6} alt="icon" />
                        </div>
                        <button
                            onMouseEnter={() => { setHovir(false) }}
                            onMouseLeave={() => setHovir(true)}
                        >Meet all customers <img src={hovir ? ImgIcon7 : ImgIcon8} alt="right" /></button>
                    </div>
                </Right>
            </Container>
        </WrapCustomer>
    )
}
