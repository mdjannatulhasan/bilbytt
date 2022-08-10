import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import React from 'react';
import SideNavLinkItem from '../dashboard/SideNavLinkItem';

const SideNavLinkGroup = ({ groupName, groupIconClass, groupItemList }) => {
    return (
        <Accordion allowToggle>
            <AccordionItem borderTopColor='transparent'>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' pb={1}>
                            <i className={groupIconClass}></i> {groupName}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} width='100%'>
                    {groupItemList.map(({ url, faIconClass, itemName, count }, index) =>
                        <SideNavLinkItem key={index}
                            url={url}
                            faIconclassName={faIconClass}
                            itemName={itemName}
                            count={count}
                        ></SideNavLinkItem>
                    )}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default SideNavLinkGroup;