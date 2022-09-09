import { Flex, Icon, Text } from "@chakra-ui/react";
import { BsTable } from "react-icons/bs";

interface DataSourceItemProps {
    data: any,
    index: number,
};

const DataSourceItem = (props: DataSourceItemProps) => {
    return (
        <Flex gap="10px" borderBottomColor="border" alignItems="center" borderBottomWidth="1px" py="10px" cursor="pointer" borderTopColor={`${props.index === 0 && "border"}`} borderTopWidth={`${props.index === 0 && "1px"}`}>
            <Icon as={BsTable} fontSize="fs-xxl" color="primary" />
            <Flex direction="column" gap="5px" w="full">
                <Text lineHeight="100%" fontSize="fs" fontWeight="bold">{props.data.name}</Text>
                <Text lineHeight="100%" marginTop="5px" fontSize="fs-sm">id: {props.data.id}</Text>
            </Flex>
        </Flex>
    );
};

export default DataSourceItem;