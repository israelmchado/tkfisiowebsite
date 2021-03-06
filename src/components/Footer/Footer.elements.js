import styled from "styled-components"
import { Link } from "react-router-dom"


export const FooterContainer  = styled.div`
    background-color: #FFF;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 820px) {
        padding-top: 32px
    }
`

export const FooterSubscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom:24px;
    padding: 24px;
    color: #a90c14
`

export const FooterSubHeading = styled.p`
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande," "Lucida Sans", Arial, sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
`
export const FooterSubTextLinkFacebook = styled(Link)`
    margin-bottom: 24px;
    font-size: 20px;
    color: #a90c14;
    text-decoration: none;

    &:hover {
        color: #1877f2
    }
`
export const FooterSubTextLinkInstagram = styled(Link)`
    margin-bottom: 24px;
    font-size: 20px;
    color: #a90c14;
    text-decoration: none;

    &:hover {
        color: #8a3ab9
    }
`
export const FooterSubTextLinkWhatsapp = styled(Link)`
    margin-bottom: 24px;
    font-size: 20px;
    color: #a90c14;
    text-decoration: none;

    &:hover {
       color: #4FCE5D
    }
`

export const WebsiteRights = styled.small`
    color: #a90c14;
    margin-bottom: 16px;

    @media screen and (max-width: 420px) {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        width: 100%;
    }
`

export const WebsiteDev = styled.small`
    color: #000;
    margin-bottom: 10px;
`