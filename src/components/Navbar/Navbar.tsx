import { useDispatch, useSelector } from "react-redux";
import { RevealMobileSidebar, UnrevealMobileSidebar } from "../../redux/Sidebar/SidebarActions";
import { Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { BsLayoutSidebarInset, BsMoon, BsSun } from "react-icons/bs";

const Navbar = () => {
    const Dispatch = useDispatch();
    const SidebarSelector = useSelector((state: any) => state.sidebar);
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex
            alignItems="center"
            h="53px"
            borderY="1px"
            borderColor="border"
            w="full"
            p="20px"
            position="sticky"
        >
            <IconButton
                variant='outline'
                colorScheme='gray'
                aria-label='toggle-sidebar-mobile'
                icon={<BsLayoutSidebarInset />}
                fontSize="fs-lg"
                onClick={() => {
                    SidebarSelector.mobile ? Dispatch(UnrevealMobileSidebar()) : Dispatch(RevealMobileSidebar());
                }}
                display={{ base: "flex", lg: "none" }}
            />
            <IconButton
                marginLeft="auto"
                variant='outline'
                colorScheme='gray'
                aria-label='theme'
                icon={colorMode === "dark" ? <BsMoon /> : <BsSun />}
                onClick={toggleColorMode}
                fontSize="fs-lg"
            />
        </Flex>
    );
};

export default Navbar;