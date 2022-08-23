import { useState } from "react";
import { useDrop } from "react-dnd";

const DndBoxTarget = () => {
    const [components, setComponents] = useState<any>([]);

    const [{isOver}, drop] = useDrop({
        accept: "input",
        drop: (item: any, monitor: any) => {
            console.log({item, monitor});
            let existingComponent = components;
            existingComponent.push(item.component);
            setComponents(existingComponent);
        },
        collect: (monitor: any) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div className="w-full bg-[white] rounded p-5 overflow-scroll" ref={drop} style={{ height: "calc(100vh - 196px)" }}>
            {components.map((component: any, index: any) => {
                console.log(component);
                return component;
            })}
        </div>
    );
};

export default DndBoxTarget;