import { Flex } from "@chakra-ui/react";
import Skeleton from 'react-loading-skeleton';

interface DataSourceItemSkeletonProps {
    first?: boolean
};

const DataSourceItemSkeleton = (props: DataSourceItemSkeletonProps) => {
    return (
        <Flex gap="10px" alignItems="center" borderBottomColor="gray.300" borderBottomWidth="1px" py="10px" cursor="pointer" borderTopColor={`${props.first && "gray.300"}`} borderTopWidth={`${props.first && "1px"}`}>
            <Skeleton height="27.2px" width="27.2px" />
            <Flex direction="column" w="full">
                <Skeleton height="17.6" width="100px" />
                <Skeleton height="11.2" width="50px" />
            </Flex>
        </Flex>
    );
};

export default DataSourceItemSkeleton;