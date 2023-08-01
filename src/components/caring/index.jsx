import React, { useState } from 'react'
import { Card, CardWrap, Container, TextWrap, WrapCaring } from './style';
import ImgCard from '../../assets/images/human1.png';
import ImgCard2 from '../../assets/images/laptop.png';
import ImgCard3 from '../../assets/images/leptop2.png';
import ImgRight from '../../assets/icons/Right.svg';
import ImgRight2 from '../../assets/icons/WhiteRight.svg';

export default function Caring() {
    const [hovir, setHovir] = useState(0);
    return (
        <WrapCaring>
            <Container>
                <TextWrap>
                    <h2>Caring is the new marketing</h2>
                    <p>
                        The Nexcent blog is the best place to read about the latest
                        membership insights, trends and more. See who's joining the community,
                        read about how our community are increasing their membership income and lot's more.
                    </p>
                </TextWrap>
                <CardWrap>
                    <Card>
                        <img src={ImgCard} alt="human" />
                        <div className="contentWrap">
                            <p>
                                Creating Streamlined Safeguarding Processes with OneRen
                            </p>
                            <button
                                onMouseEnter={() => { setHovir(1) }}
                                onMouseLeave={() => setHovir(0)}>Readmore 
                                <img src={hovir === 1 ? ImgRight2 : ImgRight} alt="right" />
                            </button>
                        </div>
                    </Card>
                    <Card>
                        <img src={ImgCard2} alt="human" />
                        <div className="contentWrap">
                            <p>
                                Creating Streamlined Safeguarding Processes with OneRen
                            </p>
                            <button
                                onMouseEnter={() => { setHovir(2) }}
                                onMouseLeave={() => setHovir(0)}>Readmore 
                                <img src={hovir === 2 ? ImgRight2 : ImgRight} alt="right" />
                            </button>
                        </div>
                    </Card>
                    <Card>
                        <img src={ImgCard3} alt="human" />
                        <div className="contentWrap">
                            <p>
                                Creating Streamlined Safeguarding Processes with OneRen
                            </p>
                            <button
                                onMouseEnter={() => { setHovir(3) }}
                                onMouseLeave={() => setHovir(0)}>Readmore 
                                <img src={hovir === 3 ? ImgRight2 : ImgRight} alt="right" />
                            </button>
                        </div>
                    </Card>
                </CardWrap>
            </Container>
        </WrapCaring>
    )
}
