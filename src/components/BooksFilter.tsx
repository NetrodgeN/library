import React, {FC, useCallback, useEffect, useState} from 'react';
import Input from "./UI/Input/Input";
import FilterButton from "./FilterButton/FilterButton";
import useDebounce from "../hooks/useDebounce";
import useLocalStorage from "../hooks/useLocalStorage";

interface IFilter{
    sort:string;
    query:string;
}

interface BooksFilterProps{
    filter: IFilter;
    setFilter:any;
}


const BooksFilter: FC<BooksFilterProps> = ({filter, setFilter}) => {

    // const [typingTimeout, setTypingTimeout]=useState('')

    // function handleInput(e){
    //     const text = (e.target as HTMLInputElement).value
    //     clearTimeout(typingTimeout);
    //     const timeout = setTimeout(()=>{
    //         setFilter({...filter, query: text })
    //     }, 1000)
    // setTypingTimeout(timeout)
    // }
    const [newLocalSearch, setNewLocalSearch] = useLocalStorage([], 'newSearch')

    const debounce = useDebounce();
    function handleInput(e){
        e.preventDefault()
        const newSearch ={
            title:e.target.value,
            dateCreate: Date.now()
        }
        const text = (e.target as HTMLInputElement).value
        debounce(()=>setFilter({...filter, query: text }), 1000)
        debounce(()=>setNewLocalSearch([...newLocalSearch, newSearch]), 1000)
    }


    return (
        <div className='filter__browse'>
            <div>
                <form className="container__input" onSubmit={event=> event.preventDefault()}>
                <Input

                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)}
                    placeholder={'Enter Keywords'}/>
                    <svg className="svg-icon search__loupe" viewBox="0 0 20 20">
                        <path
                            d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z">
                        </path>
                    </svg>
                </form>
            </div>
            <div>
                <FilterButton
                    onClick={sortBooks => setFilter({...filter, sort: sortBooks})}
                    options={[
                    {value: 'createdAt', name: 'All Books', active: true},
                    {value: 'updatedAt', name: 'Most Recent', active: false},
                    {value: 'rating', name: 'Most Popular', active: false},
                    {value: 'cost', name: 'Free Books', active: false},
                        ]}
                />
            </div>
        </div>
)}

export default BooksFilter;