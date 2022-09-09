import {
    Flex,
    Input,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Divider,
    Heading,
    IconButton,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Icon,
    Tag,
} from '@chakra-ui/react';
import { IoIosSearch, IoMdAdd, IoIosRefresh } from "react-icons/io";
import { BsThreeDotsVertical, BsListUl } from "react-icons/bs";
import { MdEdit, MdDelete, MdAddBox, MdCloudUpload, MdCloudDownload, MdOutlineFilterBAndW } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { datasourcesCreators } from "../../redux";
import DataSourceItem from "./DataSourceItem";
import DataSourceItemSkeleton from "./DataSourceItemSkeleton";
import Skeleton from "react-loading-skeleton";

const DataSources = () => {
    const Dispatch = useDispatch();
    const { GetDatasources, CreateDatasources } = bindActionCreators(datasourcesCreators, Dispatch);
    const DatasourceSelector = useSelector((state: any) => state.datasource);
    const SidebarSelector = useSelector((state: any) => state.sidebar);

    const [modalCreateDatasource, setModalCreateDatasource] = useState(false);

    const [newDatasourceName, setNewDatasourceName] = useState("");

    function handleCreateDatasource() {
        const payload = {
            data: {
                "name": newDatasourceName,
                "primary_key": "",
                "columns": {}
            }
        };

        CreateDatasources(payload);
        setModalCreateDatasource(false);
    };

    function handleGetDataSources() {
        GetDatasources();
    };

    useEffect(() => {
        !DatasourceSelector.datasources && handleGetDataSources();
    }, []);

    console.log(SidebarSelector);

    return (
        <Flex height="calc(100vh - 53px)">
            {/* List of datasource */}
            <Flex display={{ base: "none", md: "flex" }} p="20px" w="315px" borderRightColor="border" borderRightWidth="1px" direction="column" gap="20px">
                <Flex alignItems="center" justifyContent="space-between">
                    <Text fontWeight="bold">Data Source</Text>
                    <IconButton
                        variant='outline'
                        aria-label='refresh'
                        fontSize='fs'
                        icon={<IoIosRefresh />}
                        onClick={handleGetDataSources}
                    />
                </Flex>
                <Flex alignItems="center" gap="10px">
                    {DatasourceSelector.loading
                        ? <Skeleton height="40px" width="206.35px" />
                        : <Flex>
                            <Input
                                autoFocus={
                                    DatasourceSelector.datasources === null || DatasourceSelector.datasources.length === 0
                                        ? false
                                        : true
                                }
                                placeholder='Search ...'
                                type="search" borderRightRadius={0}
                            />
                            <IconButton
                                borderLeftRadius={0}
                                variant="outline"
                                aria-label='search'
                                fontSize='fs'
                                icon={<IoIosSearch />}
                            />
                        </Flex>
                    }
                    <Divider orientation="vertical" borderColor="gray.300"></Divider>
                    {DatasourceSelector.loading
                        ? <Skeleton height="40px" width="46.65px" />
                        : <IconButton
                            variant={DatasourceSelector.datasources === null || DatasourceSelector.datasources.length === 0 ? 'solid' : 'outline'}
                            aria-label='add'
                            fontSize='fs'
                            icon={<IoMdAdd />}
                            onClick={() => setModalCreateDatasource(true)}
                            autoFocus={
                                DatasourceSelector.datasources === null || DatasourceSelector.datasources.length === 0
                                    ? true
                                    : false
                            }
                        />
                    }
                </Flex>

                {DatasourceSelector.loading &&
                    <Flex direction="column">
                        <DataSourceItemSkeleton first />
                        <DataSourceItemSkeleton />
                        <DataSourceItemSkeleton />
                    </Flex>
                }

                <Flex direction="column" height="calc(100vh - 53px)" overflowY="scroll">
                    {!DatasourceSelector.loading && Array.isArray(DatasourceSelector.datasources) && DatasourceSelector.datasources.length > 0 && DatasourceSelector.datasources.map((datasource: any, index: number) => {
                        return (
                            <DataSourceItem data={datasource} key={index} index={index} />
                        )
                    })}
                </Flex>
            </Flex>

            {/* Datasource detail */}
            <Flex 
                direction="column" 
                p="20px" 
                width={{ 
                    base: "100vw",
                    md: "calc(100vw - 315px)",
                    lg: `calc(100vw - ${SidebarSelector.reveal ? "515px" : "365px"})` 
                }} 
                gap="43px"
            >
                <Flex alignItems="center" justifyContent="space-between">
                    <Flex gap={{ base: "10px", md: "20px" }} alignItems={{ md: "center" }} direction={{ base: "column", md: "row" }}>
                        <Text fontWeight="bold">Data Source Name</Text>
                        <Tag size="lg" variant='solid' bg="border" color="fontColorPrimary" fontSize="fs-sm" alignItems="center" justifyContent="center">
                            dsstJ0Q7Q09O
                        </Tag>
                    </Flex>
                    <Flex gap="10px">
                        <IconButton
                            variant='outline'
                            aria-label='refresh'
                            fontSize='fs'
                            icon={<BsThreeDotsVertical />}
                        />
                        <IconButton
                            variant='outline'
                            aria-label='datasource-list-toggle'
                            fontSize='fs'
                            icon={<BsListUl />}
                            display={{ base: "flex", md: "none" }}
                        />
                    </Flex>
                </Flex>
                <Tabs>
                    <TabList>
                        <Tab fontSize="fs-sm" fontWeight="bold" _selected={{ borderColor: "primary" }}>COLUMNS</Tab>
                        <Tab fontSize="fs-sm" fontWeight="bold" _selected={{ borderColor: "primary" }}>DATA</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Flex gap="5px">
                                <Button variant="outline" fontSize="fs-sm">
                                    <Icon as={MdAddBox} fontSize="fs-lg" marginRight="5px" />
                                    Add
                                </Button>
                                <Button variant="outline" fontSize="fs-sm">
                                    <Icon as={MdOutlineFilterBAndW} fontSize="fs-lg" marginRight="5px" />
                                    Filter
                                </Button>
                                <Button variant="outline" fontSize="fs-sm">
                                    <Icon as={MdCloudUpload} fontSize="fs-lg" marginRight="5px" />
                                    Export
                                </Button>
                                <Button variant="outline" fontSize="fs-sm">
                                    <Icon as={MdCloudDownload} fontSize="fs-lg" marginRight="5px" />
                                    Import
                                </Button>
                            </Flex>
                            <TableContainer border="2px" borderColor="border" rounded="base" overflowX="scroll" fontSize="fs-sm" fontWeight="semibold" marginTop="16px">
                                <Table variant='striped'>
                                    <TableCaption textAlign="left" fontSize="fs-sm">6 records</TableCaption>
                                    <Thead>
                                        <Tr>
                                            <Th>FIELD</Th>
                                            <Th>TYPE</Th>
                                            <Th>PRIVILAGES</Th>
                                            <Th>DEFAULT</Th>
                                            <Th>ACTION</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>created_at</Td>
                                            <Td>timestamp</Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td>
                                                <IconButton
                                                    size="xs"
                                                    variant='outline'
                                                    aria-label='edit'
                                                    fontSize='fs'
                                                    icon={<MdEdit />}
                                                />
                                                <IconButton
                                                    marginLeft="5px"
                                                    size="xs"
                                                    variant='outline'
                                                    aria-label='edit'
                                                    fontSize='fs'
                                                    icon={<MdDelete />}
                                                />
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>created_by</Td>
                                            <Td>timestamp</Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td></Td>
                                        </Tr>
                                        <Tr>
                                            <Td>updated_at</Td>
                                            <Td>timestamp</Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td></Td>
                                        </Tr>
                                    </Tbody>
                                    <Tfoot>
                                        <Tr>
                                            <Td>updated_by</Td>
                                            <Td>timestamp</Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td></Td>
                                        </Tr>
                                    </Tfoot>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                        <TabPanel>
                            <p>Data</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>

            {/* Modal create datasource */}
            <Modal onClose={() => setModalCreateDatasource(false)} isOpen={modalCreateDatasource} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">
                        <Text fontWeight="bold">Create New Datasource</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input variant="outline" autoFocus placeholder='Only lowercase and underscore allowed' onChange={(e: any) => setNewDatasourceName(e.target.value)} />
                    </ModalBody>
                    <ModalFooter gap="10px">
                        <Button variant="outline" onClick={() => setModalCreateDatasource(false)}>Cancel</Button>
                        <Button variant="solid" onClick={handleCreateDatasource}>Create Datasource</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    );
};

export default DataSources;