import React, {useState} from 'react';
import Modal from "./UI/Modal/Modal";
import BookForm from "./BookForm";
import History from "./History/History";

const Column: React.FC = () => {
    const [modal, setModal] = useState<boolean>(false)

    return (
        <div className={"column"}>
            <div className={"add__btn__container"}>
                <button className={"add__btn"}
                        onClick={() => setModal(true)}
                ><i className="fa-solid fa-plus"/> ADD A BOOK
                </button>
                <Modal visible={modal} setVisible={setModal}>
                    <BookForm setModal={setModal}/>
                </Modal>
            </div>
            <nav className={"main__nav"}>
                <ul className={'main__nav__btns'}>
                    <li className={'nav__title'}><i className="fa-solid fa-book"/> Now Reading</li>
                    <li className={'nav__title'}><i className="fa-solid fa-earth-africa"/> Browse</li>
                    <li className={'nav__title'}><i className="fa-solid fa-cart-shopping"/> Buy Books</li>
                    <li className={'nav__title'}><i className="fa-solid fa-star"/> Favourite Books</li>
                    <li className={'nav__title'}><i className="fa-solid fa-list"/> Wishlist</li>
                    <li className={'nav__title'}><i className="fa-regular fa-clock"/> History</li>
                </ul>
            </nav>
            <ul className={"categories"}>
                <li className={'must_read cat__title'}>Must Read Titles</li>
                <li className={'best_of_list cat__title'}>Best Of List</li>
                <li className={'classic_novels cat__title'}>Classic Novels</li>
                <li className={'non_fiction cat__title'}>Non Fiction</li>
            </ul>
            <div className={"history"}>
                <History/>
            </div>
        </div>
    );
};

export default Column;