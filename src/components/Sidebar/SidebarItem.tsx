import { Flex, Icon, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

interface SidebarItemProps {
    indexOf: number
    icon: any
    title: string
    redirectTo: string
};

const SidebarItem = (props: SidebarItemProps) => {
    const Navigation = useNavigate();
    const Location = useLocation();
    const SidebarSelector = useSelector((state: any) => state.sidebar);

    return (
        <Flex
            alignItems="flex-start"
            key={props.indexOf}
            bg={Location.pathname === props.redirectTo ? "primary" : "inherit"}
            mt={props.indexOf === 0 ? "60px" : "0px"}
            onClick={() => Navigation(props.redirectTo)}
            justifyContent={!SidebarSelector.reveal ? "center" : "flex-start"}
            gap="10px"
            w="full"
            p="8px 16px"
            cursor="pointer"
        >
            <Flex gap="10px" alignItems="center">
                <Icon 
                    as={props.icon} 
                    color={Location.pathname === props.redirectTo ? "border" : "fontColorPrimary"}
                    fontSize="fs-lg" 
                />
                <Text
                    color={Location.pathname === props.redirectTo ? "border" : "fontColorPrimary"}
                    display={
                        SidebarSelector.reveal 
                            ?   "block" 
                            :   SidebarSelector.mobile
                                ?   "block"
                                :   "none"
                    }
                >   
                    {props.title}
                </Text>
            </Flex>
        </Flex>
    );
};

export default SidebarItem;