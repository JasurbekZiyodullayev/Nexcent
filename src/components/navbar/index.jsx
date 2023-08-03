import React, { useState } from 'react'
import { Container, NavbarWrap, Content, Logo, Link, H3, Button, ResponsMenu } from './style'
import LogoImg from '../../assets/icons/logo.svg'

export default function Navbar() {
    const [active, setActive] = useState(true)
    const [hide, setHide] = useState(false);
    return (
        <NavbarWrap>
            <Container>
                <Content>
                    <Logo src={LogoImg} />
                    <H3>Nexcent</H3>
                </Content>
                <Content>
                    <Link href='#'>Home</Link>
                    <Link href='#'>Service</Link>
                    <Link href='#'>Feature</Link>
                    <Link href='#'>Product</Link>
                    <Link href='#'>Testimonial</Link>
                    <Link href='#'>FAQ</Link>
                </Content>
                <Content>
                    <Button className={active ? " " : "active"} onClick={() => setActive(false)}>Login</Button>
                    <Button onClick={() => { setActive(true) }} className={active ? "active" : ""} >Sign up</Button>
                </Content>
                <div onClick={() => {setHide(!hide)}} className="burger click">
                    <div className='click'></div>
                    <div className='click'></div>
                    <div className='click'></div>
                </div>
            </Container>
            <ResponsMenu style={{transform:`scale(${hide ? '1' : '0'})`}}>
                    <Link href='#'>Home</Link>
                    <Link href='#'>Service</Link>
                    <Link href='#'>Feature</Link>
                    <Link href='#'>Product</Link>
                    <Link href='#'>Testimonial</Link>
                    <Link href='#'>FAQ</Link>
                </ResponsMenu>
        </NavbarWrap>
    )
}
