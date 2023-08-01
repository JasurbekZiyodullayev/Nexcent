import React from 'react'
import { ClientWrap, Container, Content } from './style'
import OurImg from '../../assets/icons/ourIcon.svg'
import OurImg2 from '../../assets/icons/ourUFO.svg'
import OurImg3 from '../../assets/icons/ourOC.svg'
import OurImg4 from '../../assets/icons/ourLogoInpsum.svg'
import OurImg5 from '../../assets/icons/ourAtmechat.svg'
import OurImg6 from '../../assets/icons/ourChain.svg'
export default function OurClient() {
  return (
    <ClientWrap>
        <Container>
            <Content>
                <h2>Our Clients</h2>
                <p>We have been working with some Fortune 500+ clients</p>
            </Content>
            <Content>
                <img src={OurImg} alt="ourclient" />
                <img src={OurImg2} alt="ourclient" />
                <img src={OurImg3} alt="ourclient" />
                <img src={OurImg4} alt="ourclient" />
                <img src={OurImg5} alt="ourclient" />
                <img src={OurImg6} alt="ourclient" />
                <img src={OurImg3} alt="ourclient" />
            </Content>
        </Container>
    </ClientWrap>
  )
}
