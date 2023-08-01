import { Card, Container, HelpingWrap } from "./style";
import ImgHelp from '../../assets/icons/members2.svg'
import ImgHelp2 from '../../assets/icons/hands2.svg'
import ImgHelp3 from '../../assets/icons/handlePress.svg'
import ImgHelp4 from '../../assets/icons/payload.svg'


export default function Helping() {
  return (
    <HelpingWrap>
      <Container>
        <Card>
          <h2>
            Helping a local <span>business reinvent itself</span>
          </h2>
          <p>We reached here with our hard work and dedication</p>
        </Card>
        <Card>
          <div className="contentWrap">
            <div className="content">
              <img src={ImgHelp} alt="member" />
              <div className="textWrap">
                <h3>2,245,341</h3>
                <p>Members</p>
              </div>
            </div>
            <div className="content">
              <img src={ImgHelp2} alt="member" />
              <div className="textWrap">
                <h3>46,328</h3>
                <p>Clubs</p>
              </div>
            </div>
          </div>
          <div className="contentWrap">
            <div className="content">
              <img src={ImgHelp3} alt="member" />
              <div className="textWrap">
                <h3>828,867</h3>
                <p>Event Bookings</p>
              </div>
            </div>
            <div className="content">
              <img src={ImgHelp4} alt="member" />
              <div className="textWrap">
                <h3>1,926,436</h3>
                <p>Payments</p>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </HelpingWrap>
  )
}
