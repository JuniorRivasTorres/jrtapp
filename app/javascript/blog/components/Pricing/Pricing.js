import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { PricingSection, PricingWrapper, PricingHeadding, PricingContainer, PricingCard, PricingCardInfo, PricingCardIcon, PricingCardPlan, PricingCardCost, PricingCardLength, PricingCardFeatures, PricingCardFeature } from './Pricing.elements'; 



function Pricing() {
return (
<IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
    <PricingSection>
        <PricingWrapper>
            <PricingHeadding>Our Services</PricingHeadding>
                <PricingContainer>
                    <PricingCard to='/sign-up'>
                        <PricingCardInfo>
                            <PricingCardIcon>
                                <GiRock />
                            </PricingCardIcon>
                            <PricingCardPlan>Starter Pack</PricingCardPlan>    
                            <PricingCardCost>$99.99</PricingCardCost>
                            <PricingCardLength>per month</PricingCardLength>
                            <PricingCardFeatures>
                                <PricingCardFeature>100 New Users</
                                 PricingCardFeature>
                                <PricingCardFeature>$10,000 Budget</
                                PricingCardFeature>
                                <PricingCardFeature>Retargeting analytics</
                                PricingCardFeature>
                            </PricingCardFeatures> 
                            <Button primary>Choose Plan</Button>   
                      </PricingCardInfo>
                    </PricingCard>
                    <PricingCard to='/sign-up'>
                    <PricingCardInfo>
                    <PricingCardIcon>
                        <GiCrystalBars />
                    </PricingCardIcon>
                    <PricingCardPlan>Gold Rush</PricingCardPlan>
                    <PricingCardCost>$299.99</PricingCardCost>
                    <PricingCardLength>per month</PricingCardLength>
                    <PricingCardFeatures>
                        <PricingCardFeature>1000 new users</
                            PricingCardFeature>  
                            <PricingCardFeature>$50,000 Budget</
                            PricingCardFeature>  
                            <PricingCardFeature>Lead Gen Analytics</
                            PricingCardFeature>  
                    </PricingCardFeatures>
                    <Button primary>Choose Plan</Button>
                    </PricingCardInfo>
                    </PricingCard>
                    <PricingCard to='/sign-up'>
                   <PricingCardInfo> 
                    <PricingCardIcon>
                        <GiCutDiamond/>
                    </PricingCardIcon>
                    <PricingCardPlan>DIAMOND kINGS
                    </PricingCardPlan>
                    <PricingCardCost>$999.99</PricingCardCost>
                    <PricingCardLength>per month
                    </PricingCardLength>
                    <PricingCardFeatures>
                        <PricingCardFeature>UNlimited Users      
                        </PricingCardFeature>
                        <PricingCardFeature>UNlimited Budget    
                        </PricingCardFeature>
                        <PricingCardFeature>24/7 suport   
                        </PricingCardFeature>
                    </PricingCardFeatures>
                    <Button primary>Choose Plan</
                    Button>
                    </PricingCardInfo>
                </PricingCard>
            </PricingContainer>
        </PricingWrapper>
    </PricingSection>
</IconContext.Provider>
);
}
export default Pricing