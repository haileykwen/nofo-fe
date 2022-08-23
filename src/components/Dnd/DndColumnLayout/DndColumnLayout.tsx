import { useDrag } from "react-dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const DndColumnLayout = () => {
    const [{isDragging}, drag] = useDrag({
        type: "input",
        item: {
            type: "input",
        },
        collect: (monitor: any) => ({
            isDragging: !!monitor.isDragging()
        }),
    });

    return (
        <div className="flex items-center bg-[#2E3238] rounded-[5px] py-[5px] px-[10px] gap-[10px]" ref={drag}>
            <FontAwesomeIcon icon={faLayerGroup} color="#F2F2F2" />
            <p className="text-[#9A9A9A]">Column Layout</p>
        </div>
    );
};

export default DndColumnLayout;