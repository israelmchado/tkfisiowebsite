import React from 'react'
import {  FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa";
import { FcLike } from "react-icons/fc" 
import {
    FooterContainer, 
    FooterSubscription,
    FooterSubHeading,
    FooterSubTextLinkFacebook,
    FooterSubTextLinkInstagram,
    FooterSubTextLinkWhatsapp,
    WebsiteRights,
    WebsiteDev
} from "./Footer.elements"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Acesse nossas redes sociais abaixo 
                </FooterSubHeading>
                <FooterSubTextLinkFacebook to={{ pathname: "https://www.facebook.com/tkfisioesaude" }} target="_blank" rel="noopener noreferrer">
                   <FaFacebook /> Facebook
                </FooterSubTextLinkFacebook>
                <FooterSubTextLinkInstagram to={{ pathname: "https://www.instagram.com/tkfisioesaude/" }} target="_blank" rel="noopener noreferrer">
                   <FaInstagram /> Instagram
                </FooterSubTextLinkInstagram>
                    <FooterSubTextLinkWhatsapp to={{ pathname: "https://wa.me/48984589075" }} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp  /> Whatsapp
                    </FooterSubTextLinkWhatsapp>
            </FooterSubscription>
            <WebsiteRights>TK FISIOTERAPIA INTELIGENTE E SAÚDE © 2021 - Todos os direitos reservados</WebsiteRights>
            <WebsiteDev>Desenvolvido com <FcLike /> por Israel Machado</WebsiteDev>
        </FooterContainer>
    )
}

export default Footer
