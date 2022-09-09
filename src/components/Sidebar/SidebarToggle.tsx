import { Flex, Icon } from "@chakra-ui/react";
import { TbChevronLeft } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { RevealSidebar, UnrevealSidebar } from "../../redux/Sidebar/SidebarActions";

const SidebarToggle = () => {
    const Dispatch = useDispatch();
    const SidebarSelector = useSelector((state: any) => state.sidebar);

    return (
        <Flex
            onClick={() => {
                SidebarSelector.reveal ? Dispatch(UnrevealSidebar()) : Dispatch(RevealSidebar());
            }}
            bg="primary"
            display={{ base: "none", lg: "flex" }}
            justifyContent="center"
            alignItems="center"
            h="25px"
            w="25px"
            borderRadius="full"
            cursor="pointer"
            position="absolute"
            right="-12.5px"
            top="37.5px"
        >
            <Icon
                as={TbChevronLeft}
                fontSize="fs-lg"
                color="border"
                margin="auto"
                className={`${SidebarSelector.reveal ? "" : "rotate-180"} duration-500`}
            />
        </Flex>
    );
};

export default SidebarToggle;