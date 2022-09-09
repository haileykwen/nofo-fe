import { useDispatch, useSelector } from 'react-redux';
import SidebarItem from './SidebarItem';
import SidebarToggle from './SidebarToggle';
import { UrlRouter } from '../../router';
import { TbActivity, TbBriefcase, TbCodeOff, TbDatabase, TbUser } from 'react-icons/tb';
import { UnrevealMobileSidebar } from '../../redux/Sidebar/SidebarActions';
import SidebarLogout from './SidebarLogout';
import { Flex, IconButton } from '@chakra-ui/react';
import { CgCloseR } from 'react-icons/cg';

const Sidebar = () => {
    const SidebarSelector = useSelector((state: any) => state.sidebar);
    const Dispatch = useDispatch();

    const sidebarItem = [
        {
            text: "Dashboard",
            redirectTo: UrlRouter.APP_DASHBOARD,
            icon: TbActivity,
        },
        {
            text: "Data Sources",
            redirectTo: UrlRouter.APP_DATA_SOURCES,
            icon: TbDatabase,
        },
        {
            text: "Lowcode",
            redirectTo: UrlRouter.APP_APIS,
            icon: TbCodeOff,
        },
        {
            text: "Meet Up",
            redirectTo: UrlRouter.APP_MEET_UP,
            icon: TbBriefcase,
        },
        {
            text: "Administrator",
            redirectTo: UrlRouter.APP_ADMINISTRATOR,
            icon: TbUser,
        },
    ];

    return (
        <Flex
            direction="column"
            position={{ base: "fixed", lg: "absolute" }}
            top="0"
            bottom="0"
            left={{ 
                "base": SidebarSelector.mobile ? "0" : "-1000%", 
                "lg": "0" 
            }}
            w={
                SidebarSelector.reveal 
                    ?   "200px" 
                    :   SidebarSelector.mobile 
                        ?   "200px" 
                        :   "50px"
            } 
            h="100vh"
            py="16px"
            bg="sidebar"
            borderRightWidth="1px"
            borderRightColor="border"
            zIndex="10"
        >
            <SidebarToggle />
            <IconButton
                variant='outline'
                aria-label='toggle-sidebar-mobile'
                icon={<CgCloseR />}
                fontSize="fs-lg"
                display={{ base: "flex", lg: "none" }}
                position="absolute"
                right="16px"
                onClick={() => Dispatch(UnrevealMobileSidebar())}
            />

            {sidebarItem.map((item: any, index: number) => {
                return (
                    <SidebarItem 
                        key={index}
                        indexOf={index}
                        icon={item.icon}
                        title={item.text}
                        redirectTo={item.redirectTo}
                    />
                );
            })}

            <SidebarLogout />
        </Flex>
    );
};

export default Sidebar;