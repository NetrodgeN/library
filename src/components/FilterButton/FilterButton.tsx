import React, {FC} from 'react';
import useLocalStorage from "../../hooks/useLocalStorage";

interface FilterButtonInterface{
    options: IOptions[];
    onClick:(value: string) => {};
}

interface IOptions{
    value: string;
    active: boolean;
    name: string;
}

const FilterButton: FC <FilterButtonInterface> = ({options , onClick}) => {
    const [newLocalFilter, setNewLocalFilter] = useLocalStorage<object[]>([], 'newFilter')



    const handlerChange=(
        event:React.MouseEvent<HTMLInputElement, MouseEvent>,
        onClick:(value: string) => {},
        option:IOptions)=>{
        onClick((event.target as HTMLTextAreaElement).value)
        const localFilter={
            title:option.name,
            updateAt: Date.now()
        }
        setNewLocalFilter([...newLocalFilter, localFilter])
    }



    return (
        <div className='buttons__container'>
            {options.map(option=>
                <div className={'filter__btn'}
                key={option.value}>
                    <input
                        defaultChecked={option.active}
                        className={'filter__input'}
                        type="radio"
                        name='filter'
                        id={option.value}
                        value={option.value}
                        onClick={event =>
                            handlerChange(event, onClick, option)
                    }
                   />
                    <label htmlFor={option.value}
                    >
                        <span className='filter__name'>{option.name}</span>
                    </label>
                </div>
            )}
        </div>
    );
};

export default FilterButton;