import { styled } from "styled-components";

const HelpingWrap = styled.div`
width: 100%;
background-color: var(--neutral-silver);
padding: 64px 0;
margin: 48px 0;
`;
const Container = styled.div`
width: 76%;
margin: 0 auto;
display: flex;
justify-content: space-between;
@media (max-width: 780px) {
    width: 90%;
}
@media (max-width: 1130px) {
     flex-wrap: wrap;
     justify-content: center;
}


`;
const Card = styled.div`
width: 540px;
height: 160px;
display: flex;
@media (max-width: 525px) {
            width: 100%;
            height: 100%;
        }
flex-direction: column;
&:first-child{
    @media (max-width: 1130px) {
     align-items: center;
     text-align: center;
    }
    justify-content: center;
    gap: 8px;
    h2{
        font-size: 36px;
        font-weight: 600;
        font-style: normal;
        line-height: 44px;
        color: var(--neutral-grey);
        width: 408px;
        span{
            color: var(--brand-primary);
        }
    }
    p{
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        line-height: 24px;
        color: var(--text-gray-900);
    }
    @media (max-width: 920px) {
        h2{
            font-size: 30px;
            line-height: 38px;
            width: 345px;
        }
        p{
            font-size: 14px;
            line-height: 20px;
        }
    }

    @media (max-width: 380px) {
        h2{
            width: fit-content;
        }
    }
}

&:last-child{
    gap: 40px;
    @media (max-width: 435px) {
                gap: 24px;
                align-items: center;
            }
    .contentWrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 435px) {
            flex-direction: column;
            gap: 24px;
            margin-top: 24px;
            justify-content: center;
            align-items: flex-start;
            width: fit-content;
        }
        .content{
            
            display: flex;
            gap: 16px;
            .textWrap{
                @media (max-width: 1221px) {
                    width: 170px;
                }
                @media (min-width: 1130px) and (max-width: 1192px) {
                    width: 150px;
                }
                @media (max-width: 525px) {
                    width: 130px;
                }
                @media (max-width: 435px) {
                     width: fit-content;
                   }
                width: 191px;
               h3{
                font-size: 28px;
                font-style: normal;
                font-weight: 700;
                line-height: 36px;
                color: var(--neutral-d-grey);
                @media (max-width: 920px) {
                    font-size: 24px;
                    line-height: 30px;
               }
               } 
               p{
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
                color: var(--neutral-grey);
                @media (max-width: 920px) {
                    font-size: 14px;
                    line-height: 20px;
               }
               }
            }
        }
    }
}
`;

export { HelpingWrap, Container, Card }