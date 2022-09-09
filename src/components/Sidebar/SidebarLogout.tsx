import { Flex, Icon, Text } from "@chakra-ui/react";
import { TbLogout } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cookiesClient } from "../../apis";
import { UrlRouter } from "../../router";

const SidebarLogout = () => {
    const SidebarSelector = useSelector((state: any) => state.sidebar);
    const Navigation = useNavigate();

    return (
        <Flex
            position="absolute"
            bottom="16px"
            onClick={() => {
                cookiesClient().set('authToken', null, {
                    path: '/',
                    sameSite: 'lax'
                });
                Navigation(UrlRouter.AUTH_LOGIN)
            }}
            justifyContent={!SidebarSelector.reveal ? "center" : "flex-start"}
            gap="10px"
            w="full"
            p="8px 16px"
            cursor="pointer"
            alignItems="center"
        >
            <Icon as={TbLogout} color="fontColorPrimary" fontSize="fs-lg" />
            <Text
                display={
                    SidebarSelector.reveal 
                        ?   "block" 
                        :   SidebarSelector.mobile
                            ?   "block"
                            :   "none"
                }
            >   
                Logout
            </Text>
        </Flex>
    );
};

export default SidebarLogout;