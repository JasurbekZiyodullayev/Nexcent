import { styled } from "styled-components";

const HeaderWrap = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color: var(--neutral-silver);
.slide{
    display: flex;
    align-items: center;
}
.carousel-status{
    display: none;
}
.carousel
{
    .control-dots{
        .dot{
            box-shadow: none;
            background-color: var(--brand-primary);
        }
    } 
} 

`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 96px 0;
width: 100%;
max-width: 1152px;
`
const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
&:first-child{
    flex-direction: column;
    width: 657px;
    align-items: flex-start;
    gap: 32px;
    h1{
        font-size: 64px;
        font-style: normal;
        font-weight: 600;
        line-height: 76px;
        text-align: left;
        span{
            color: var(--brand-primary);
        }
    }
    p{
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        color: var(--neutral-grey);
    }
}
`;
const Button = styled.button`
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
color: var(--default-white);
background-color: var(--brand-primary);
padding: 14px 32px;
border-radius: 4px;
border: 0;
outline: none;
cursor: pointer;
`;

export { HeaderWrap, Container, Content, Button }