import { PageTitle } from '../../components';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndBoxTarget, DndColumnLayout, DndInput, DndRowLayout } from '../../components/Dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faObjectUngroup, faDesktop, faTabletScreenButton, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

const WebBuilder = () => {
    return (
        <div className="flex flex-col w-full">
            <PageTitle />
            <DndProvider backend={HTML5Backend}>
                <div className="flex">
                    <div className="w-[200px] bg-[#1C1E22] p-[20px] border border-[#9A9A9A] box-content">
                        <div className='flex items-center gap-[10px]'>
                            <FontAwesomeIcon icon={faObjectUngroup} color="#F2F2F2" />
                            <p className="text-[#9A9A9A] font-semibold">Components</p>
                        </div>
                        <div className='flex flex-col gap-[5px] mt-[20px]'>
                            <DndInput />
                            <DndRowLayout />
                            <DndColumnLayout />
                        </div>
                    </div>
                    <div className="w-full bg-[#1C1E22] p-[20px] border border-[#9A9A9A] box-border" style={{ height: "calc(100vh - 100px)" }}>
                        <div className='flex flex-column mb-[20px]'>
                            <div className='flex gap-[10px] ml-auto'>
                                <div className='flex items-center justify-center h-[35px] w-[35px] rounded-[px] bg-[#2E3238]'>
                                    <FontAwesomeIcon icon={faDesktop} color="#F2F2F2" />
                                </div>
                                <div className='flex items-center justify-center h-[35px] w-[35px] rounded-[px]'>
                                    <FontAwesomeIcon icon={faTabletScreenButton} color="#F2F2F2" />
                                </div>
                                <div className='flex items-center justify-center h-[35px] w-[35px] rounded-[px]'>
                                    <FontAwesomeIcon icon={faMobileScreen} color="#F2F2F2" />
                                </div>
                            </div>
                        </div>
                        <DndBoxTarget />
                    </div>
                </div>
            </DndProvider>
        </div>
    );
};

export default WebBuilder