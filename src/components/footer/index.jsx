import React from 'react'
import { Container, Left, Rigth, WrapFooter } from './style';
import LogoFooter from '../../assets/icons/FooterLogo.svg';
import FooterSocial from '../../assets/icons/Insta.svg';
import FooterSocial2 from '../../assets/icons/social-network.svg';
import FooterSocial3 from '../../assets/icons/tiwitter.svg';
import FooterSocial4 from '../../assets/icons/youtube.svg';
import  FooterSend from '../../assets/icons/send.svg';

export default function Footer() {
    return (
        <WrapFooter>
            <Container>
                <Left>
                    <div className="logoWrap">
                        <img src={LogoFooter} alt="logo" />
                    </div>
                    <div className="textWrap">
                        <p>Copyright © 2020 Nexcent ltd.</p>
                        <p>All rights reserved</p>
                    </div>
                    <div className="socialWrap">
                        <img src={FooterSocial} alt="Insta" />
                        <img src={FooterSocial2} alt="Insta" />
                        <img src={FooterSocial3} alt="Insta" />
                        <img src={FooterSocial4} alt="Insta" />
                    </div>
                </Left>
                <Rigth>
                    <div className="company">
                        <h3>Company</h3>
                        <a href="#">About us</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact us</a>
                        <a href="#">Pricing</a>
                        <a href="#">Testimonials</a>
                    </div>
                    <div className="support">
                        <h3>Support</h3>
                        <a href="#">Help center</a>
                        <a href="#">Terms of service</a>
                        <a href="#">Legal</a>
                        <a href="#">Privcy policy</a>
                        <a href="#">Status</a>
                    </div>
                    <div className="stay">
                        <h3>Stay up to date</h3>
                        <div className='inputWrap'>
                            <input type="email" placeholder='Your email address' />
                            <img src={FooterSend} alt='send'/>
                        </div>
                    </div>
                </Rigth>
            </Container>
        </WrapFooter>
    )
}
