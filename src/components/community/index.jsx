import { Card, CardContent, CommunityWrap, Container, TextContent, ImgWrap } from "./style";
import Img from "../../assets/icons/membership.svg"
import Img2 from "../../assets/icons/building.svg"
import Img3 from "../../assets/icons/hands.svg"

export default function Community() {
    return (
        <CommunityWrap>
            <Container>
                <TextContent>
                    <h2>
                        Manage your entire community in a single system
                    </h2>
                    <p>Who is Nextcent suitable for?</p>
                </TextContent>
                <CardContent>
                    <Card>
                        <div>
                            <ImgWrap src={ Img } alt="ss" />
                            <h3>Membership Organisations</h3>
                        </div>
                        <p>Our membership management software provides full automation of membership renewals and payments</p>
                    </Card>
                    <Card>
                        <div>
                            <ImgWrap src={Img2} alt="member" />
                            <h3>National Associations</h3>
                        </div>
                        <p>Our membership management software provides full automation of membership renewals and payments</p>
                    </Card>
                    <Card>
                        <div>
                            <ImgWrap src={Img3} alt="member" />
                            <h3>Clubs And Groups</h3>
                        </div>
                        <p>Our membership management software provides full automation of membership renewals and payments</p>
                    </Card>
                </CardContent>
            </Container>
        </CommunityWrap>
    )
}

