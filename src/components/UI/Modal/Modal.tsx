import React, {FC} from 'react';
import classes from "./Modal.module.css";

interface IModalProps{
    children: React.ReactNode,
    visible: boolean,
    setVisible: any
}

const Modal:FC<IModalProps>  = ({children, visible, setVisible}) => {

    const rootClasses = [classes.modal]
    if (visible){
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
            <div className={classes.modalContent} onClick={(e)=> e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;