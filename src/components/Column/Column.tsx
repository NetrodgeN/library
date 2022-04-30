import React, {useState} from 'react';
import Modal from "../UI/Modal/Modal";
import BookForm from "../BookForm";

const Column:React.FC  = () => {
    const [modal, setModal] = useState<boolean>(false)

    return (
        <div className={"column"}>
            <div className={"add__btn__container"}>
                <button className={"add__btn"}
                        onClick={()=>setModal(true)}
                ><i className="fa-solid fa-plus"/> ADD A BOOK</button>

                <Modal visible={modal} setVisible={setModal}>
                    <BookForm setModal={setModal} />
                </Modal>
            </div>
            <nav className={"main__nav"}>
                <ul>
                    <li>Now Reading</li>
                    <li>Browse</li>
                    <li>Buy Books</li>
                    <li>Favourite Books</li>
                    <li>Wishlist</li>
                    <li>History</li>
                </ul>
            </nav>

            <ul className={"categories"}>
                <li>Must Read Titles</li>
                <li>Best Of List</li>
                <li>Classic Novels</li>
                <li>Non Fiction</li>
            </ul>

            <div className={"history"}>
                <p> blablabla bal bla ballbalblabl balblablabl</p>
                <p>23 minutes ago</p>
                <p> blablabla bal bla ballbalblabl balblablabl</p>
                <p>23 minutes ago</p>
            </div>
        </div>
    );
};

export default Column;