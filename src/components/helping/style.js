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
`;
const Card = styled.div`
width: 540px;
height: 160px;
display: flex;
flex-direction: column;
&:first-child{
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
}

&:last-child{
    gap: 40px;
    .contentWrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .content{
            display: flex;
            gap: 16px;
            img{
                fill: red;
            }
            .textWrap{
                width: 191px;
               h3{
                font-size: 28px;
                font-style: normal;
                font-weight: 700;
                line-height: 36px;
                color: var(--neutral-d-grey);
               } 
               p{
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
                color: var(--neutral-grey);
               }
            }
        }
    }
}
`;

export { HelpingWrap, Container, Card }