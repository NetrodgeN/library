import React, {useState} from 'react';
import classes from './Column.module.css'
import Modal from "../UI/Modal/Modal";
import BookForm from "../BookForm";

const Column:React.FC  = () => {
    const [modal, setModal] = useState<boolean>(false)

    return (
        <div className={classes.column}>
            <div className={classes.add__btn__container}>
                <button className={classes.add__btn}
                        onClick={()=>setModal(true)}
                >+  ADD A BOOK</button>
                <Modal visible={modal} setVisible={setModal}>
                    <BookForm setModal={setModal} />
                </Modal>
            </div>
            <nav className={classes.main__nav}>
                <ul>
                    <li>Now Reading</li>
                    <li>Browse</li>
                    <li>Buy Books</li>
                    <li>Favourite Books</li>
                    <li>Wishlist</li>
                    <li>History</li>
                </ul>
            </nav>

            <ul className={classes.categories}>
                <li>Must Read Titles</li>
                <li>Best Of List</li>
                <li>Classic Novels</li>
                <li>Non Fiction</li>
            </ul>

            <div className={classes.history}>
                <p> blablabla bal bla ballbalblabl balblablabl</p>
                <p>23 minutes ago</p>
                <p> blablabla bal bla ballbalblabl balblablabl</p>
                <p>23 minutes ago</p>
            </div>
        </div>
    );
};

export default Column;