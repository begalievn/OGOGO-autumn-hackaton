// modules
import React, {useState} from 'react';

// styles
import classes from './filterOptions.module.scss';
import Checkbox  from "../../../../../components/check-box/CheckBox";

const FilterOptions = ({ setParams }) => {
    
    const [checkedOne, setCheckedOne] = React.useState({});
    const [price, setPrice] = useState(5000);
    
    const handleChange = (e) => {
        if(checkedOne[e.target.name]) {
            const newState = { ...checkedOne };
            delete newState[e.target.name];
            console.log("newState", newState);
            setCheckedOne( newState );
        } else {
            setCheckedOne({...checkedOne, [e.target.name]: `${e.target.name}`});
        }
        console.log(e.target.name);
    };
    
    const handleSearch = () => {
        console.log(checkedOne);
        setParams({...checkedOne, price});
    }
    
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }
    
    return (
        <div className={classes.container}>
            <h3 className={classes.header}>Фильтровать</h3>
            <h4 className={classes.category_title}>Категории</h4>
            <Checkbox label="Программирование" checked={checkedOne['programming']} name={"programming"} onChange={handleChange} />
            <Checkbox label="СММ" checked={checkedOne['smm']} name={"smm"} onChange={handleChange} />
            <Checkbox label="Языковые" checked={checkedOne['language']} name={"language"} onChange={handleChange} />
            <Checkbox label="Маркетинг" checked={checkedOne['marketing']} name={"marketing"} onChange={handleChange} />
            <Checkbox label="Репетиторы" checked={checkedOne['tutors']} name={"tutors"} onChange={handleChange} />
            <div className={classes.price_from}>
                <p>Цена от: </p><input name="price" value={price} onChange={handlePriceChange} placeholder="Цена"  />
            </div>
            <button className={classes.search} onClick={handleSearch}>Поиск</button>
        </div>
    );
};

export default FilterOptions;
