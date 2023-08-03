import { styled } from "styled-components";


const WrapFooter = styled.div`
width: 100%;
padding: 64px 0;
background: var(--neutral-black);
`;
const Container = styled.div`
width: 74%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width: 780px) {
    width: 90%;
}
@media (max-width: 500px) {
    flex-direction: column-reverse;
    gap: 24px;
}
`;
const Left = styled.div`
@media (max-width: 500px) {
    align-items: center;
    width: 100%;
    gap: 24px;
}
display: flex;
flex-direction: column;
gap: 40px;
align-items: flex-start;
.textWrap{
    display: flex;
    flex-direction: column;
    gap: 8px;
    p{
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        color: var(--neutral-silver);
    }
}
.socialWrap{
    display: flex;
    gap: 16px;
}
`;
const Rigth = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
@media (min-width: 500px) and (max-width: 1180px) {
    flex-direction: column;
    width: 50%;
}
@media (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: center;
}
gap: 30px;
.company{
    @media (min-width: 500px) and (max-width: 1180px) {
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: center;
     width: 100%;
     h3{
        text-align: center;
        width: 100%;
     }
    }
    @media (max-width: 500px) {
    align-items: center;
}
    width: 160px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    h3{
        color: var(--neutral-white);
        margin-bottom: 12px;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px;
        @media (max-width: 920px) {
            font-size: 18px;
            line-height: 24px;
        }
    }
    a{
        text-decoration: none;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        color: var(--neutral-silver);
        @media (max-width: 920px) {
            font-size: 12px;
            line-height: 16px;
        }
    }
}
.support{
    @media (min-width: 500px) and (max-width: 1180px) {
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: center;
     width: 100%;
     h3{
        text-align: center;
        width: 100%;
     }
    }
    @media (max-width: 500px) {
    align-items: center;
}
    width: 160px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    h3{
        color: var(--neutral-white);
        margin-bottom: 12px;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px;
        @media (max-width: 920px) {
            font-size: 18px;
            line-height: 24px;
        }
    }
    a{
        text-decoration: none;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        color: var(--neutral-silver);
        @media (max-width: 920px) {
            font-size: 12px;
            line-height: 16px;
        }
    }
}
.stay{
    @media (min-width: 500px) and  (max-width: 1180px) {
        display: flex;
        flex-direction: column;
     justify-content: center;
     align-items: center;
     width: 100%;
     h3{
        text-align: center;
        width: 100%;
     }
    }
    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
    align-items: center;
}
    h3{
        color: var(--neutral-white);
        margin-bottom: 24px;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px;
        @media (max-width: 920px) {
        font-size: 18px;
        line-height: 24px;
    }
    }
    .inputWrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 255px;
        height: 40px;
        border-radius: 8px;
        padding: 0 12px;
        background: #515B60;
        @media (max-width: 780px) {
             width: 100%;
        }
        input{
            background-color: #515B60;
            border: 0;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; 
            color: var(--text-gray-300);
            &::placeholder{
                color: var(--text-gray-300);
            }
            &:focus{
                outline: none;
            }
        }
        img{
            cursor: pointer;
        }
    }
}
`;


export {WrapFooter, Container, Left, Rigth}