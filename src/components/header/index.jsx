
import { Container, HeaderWrap, Content, Button } from "./style"
import HeaderImg from '../../assets/images/header-img.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Header() {
    return (
        <HeaderWrap>
            <Carousel className="carousel"
                autoPlay={true}
                showArrows={false}
                infiniteLoop={true}
                interval={5000}
                transitionTime={700}
                emulateTouch={true}
            >
                <Container>
                    <Content>
                        <h1>Lessons and insights <span>from 8 years</span></h1>
                        <p>Where to grow your business as a photographer: site or social media?</p>
                        <Button>Register</Button>
                    </Content>
                    <Content>
                        <img src={HeaderImg} alt="Header" />
                    </Content>
                </Container>
                <Container>
                    <Content>
                        <h1>Lessons and insights <span>from 8 years</span></h1>
                        <p>Where to grow your business as a photographer: site or social media?</p>
                        <Button>Register</Button>
                    </Content>
                    <Content>
                        <img src={HeaderImg} alt="Header" />
                    </Content>
                </Container>
                <Container>
                    <Content>
                        <h1>Lessons and insights <span>from 8 years</span></h1>
                        <p>Where to grow your business as a photographer: site or social media?</p>
                        <Button>Register</Button>
                    </Content>
                    <Content>
                        <img src={HeaderImg} alt="Header" />
                    </Content>
                </Container>
            </Carousel>
        </HeaderWrap>
    )
}
