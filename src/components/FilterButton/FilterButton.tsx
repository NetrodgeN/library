import React, {FC} from 'react';

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
                            onClick((event.target as HTMLTextAreaElement).value)}
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