import React from 'react'
import { Button, Container, Left, PixelWrap, Right } from './style'
import PixelIMg from '../../assets/images/rafiki.png'

export default function Pixelgrade() {
    return (
        <PixelWrap>
            <Container>
                <Left>
                    <img src={PixelIMg} alt="pixel" />
                </Left>
                <Right>
                    <h2>The unseen of spending three years at Pixelgrade</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sit amet justo ipsum. Sed accumsan quam vitae est varius
                        fringilla. Pellentesque placerat vestibulum lorem sed porta.
                        Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
                        Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </p>
                    <Button>Learn More</Button>
                </Right>
            </Container>
        </PixelWrap>
    )
}
