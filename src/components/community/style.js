import { styled } from "styled-components";

const CommunityWrap = styled.div`
width: 100%;
height: 100%;
background-color: var(--default-white);
display: flex;
justify-content: center;
margin-bottom: 42px;
`;

const Container = styled.div`
width: 76%;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
@media (max-width: 780px) {
    width: 90%;
}
`;

const TextContent = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
width: 542px;
@media (max-width: 610px) {
            width: 100%;
        }
h2{
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    font-style: normal;
    text-align: center;
    color: var(--neutral-d-grey);
    @media (max-width: 920px) {
        font-size: 30px;
        line-height: 38px;
}
}
p{
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    line-height: 24px;
    color: var(--neutral-grey);
    text-align: center;
    @media (max-width: 920px) {
        font-size: 14px;
        line-height: 20px;
}
}
`;

const CardContent = styled.div`
@media (max-width: 1200px) {
    justify-content: center;
    gap: 24px;
}
width: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-between;
`;
const Card = styled.div`
width: 299px;
max-height: 280px;
border-radius: 8px;
padding: 24px 32px;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
text-align: center;
background: var(--neutral-white, #FFF);
box-shadow: 0px 2px 4px 0px rgba(171, 190, 209, 0.20);

div{
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    h3{
        font-size: 28px;
        font-weight: 700;
        font-style: normal;
        line-height: 36px;
        @media (max-width: 920px) {
        font-size: 24px;
        line-height: 30px;
}
        color: var(--neutral-d-grey);
    }
}
p{
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    font-style: normal;
    text-align: center;
    color: var(--neutral-grey);
}
`;

const ImgWrap = styled.img`
`;



export {CommunityWrap, Container, TextContent, CardContent, Card, ImgWrap}