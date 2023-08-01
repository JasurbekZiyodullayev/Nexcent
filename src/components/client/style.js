import { styled } from "styled-components";

const ClientWrap = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin: 40px 0;
background-color: var(--default-white);
`
const Container = styled.div`
width: 76%;
margin: 0 auto;
display: flex;
align-items: center;
flex-direction: column;
`;
const Content = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
h2{
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    font-style: normal;
    text-align: center;
    color: var(--neutral-d-grey);
}
p{
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    line-height: 24px;
    color: var(--neutral-grey);
    text-align: center;
}

&:last-child{
    width: 100%;
    height: 98px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
`

export {ClientWrap, Container, Content}