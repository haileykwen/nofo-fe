import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

interface ModalProps {
    handleClose: any
    children: ReactNode
    isOpen: boolean
};

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

const Modal = (props: ModalProps) => {
    // Log state
    // useEffect(() => {
    //     stateLogger("Modal", true);
    //     return () => stateLogger("Modal", false);
    // }, []);

    return (
        // Enables the animation of components that have been removed from the tree
        <AnimatePresence
            // Disable any initial animations on children that
            // are present when the component is first rendered
            initial={false}
            // Only render one component at a time.
            // The exiting component will finish its exit
            // animation before entering component is rendered
            // exitBeforeEnter={true}
            mode="wait"
            // Fires when all exiting nodes have completed animating out
            onExitComplete={() => {
                // framerLogger(props.label)
                // console.log("exit");
            }}
        >
            {props.isOpen &&
                <Backdrop onClick={props.handleClose}>
                    <motion.div
                        onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
                        className="modal orange-gradient"
                        variants={dropIn}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {props.children}
                    </motion.div>
                </Backdrop>
            }
        </AnimatePresence>
    );
};

export default Modal;