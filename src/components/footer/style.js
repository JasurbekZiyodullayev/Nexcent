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
`;
const Left = styled.div`
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
gap: 30px;
.company{
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
    }
    a{
        text-decoration: none;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        color: var(--neutral-silver)
    }
}
.support{
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
    }
    a{
        text-decoration: none;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        color: var(--neutral-silver)
    }
}
.stay{
    h3{
        color: var(--neutral-white);
        margin-bottom: 24px;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px;
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