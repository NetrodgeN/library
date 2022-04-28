import React,{FC} from 'react';
import Input from "./UI/Input/Input";
import FilterButton from "./FilterButton/FilterButton";



interface IFilter{
    sort:string;
    query:string;
}

interface BooksFilterProps{
    filter: IFilter;
    setFilter:any;
//    React.Dispatch<React.SetStateAction<boolean>>
}

const BooksFilter: FC<BooksFilterProps> = ({filter, setFilter}) => {

    return (
        <div className='filter__browse'>
            <div className="container__input">
                <Input
                    value={filter.query}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter({...filter, query: (e.target as HTMLInputElement).value})}
                    placeholder={'Enter Keywords'}/>
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