import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin }
from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, SocialIcon } from './Footer.elements';


const Footer = () => {
    return (
        <FooterContainer>   
            <FooterSubscription>
                <FooterSubHeading>
                    join ou exclusive membership to receive the latest news ans trends
                </FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                        <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/'>sign-up'</FooterLink>
                            <FooterLink to='/'>Testimonials'</FooterLink>
                            <FooterLink to='/'>Careers'</FooterLink>
                            <FooterLink to='/'>Investors'</FooterLink>
                            <FooterLink to='/'>Terms of Service'</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/'>sign-up'</FooterLink>
                            <FooterLink to='/'>Testimonials'</FooterLink>
                            <FooterLink to='/'>Careers'</FooterLink>
                            <FooterLink to='/'>Investors'</FooterLink>
                            <FooterLink to='/'>Terms of Service'</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper> 
                        <FooterLinksItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='/'>sign-up'</FooterLink>
                            <FooterLink to='/'>Testimonials'</FooterLink>
                            <FooterLink to='/'>Careers'</FooterLink>
                            <FooterLink to='/'>Investors'</FooterLink>
                            <FooterLink to='/'>Terms of Service'</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/'>sign-up'</FooterLink>
                            <FooterLink to='/'>Testimonials'</FooterLink>
                            <FooterLink to='/'>Careers'</FooterLink>
                            <FooterLink to='/'>Investors'</FooterLink>
                            <FooterLink to='/'>Terms of Service'</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                             <SocialLogo to="/">
                                <SocialIcon/>
                                    ULTRA
                            </SocialLogo>   
                        <WebsiteRights>ULTRA @ 2020</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank" aria-Label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-Label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>   
                            <SocialIconLink href={'/https://www.youtube.com/watch?v=IG99I9iY-bI'
                             } target="_blank" aria-Label="Youtube" rel="noopener
                             noreferrer">
                                <FaYoutube/>
                            </SocialIconLink>   
                            <SocialIconLink href='/' target="_blank" aria-Label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>   
                            <SocialIconLink href='/' target="_blank" aria-Label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>   
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;