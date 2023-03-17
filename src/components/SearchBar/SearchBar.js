import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = () => {
    let [searchValue, setSeachValue] = useState('')

    let products = [
        "tooth paste",
        "tooth brush",
        "mouth wash",
        "mouth guard",
        "dental floss"
    ]

    function changeWidth() {
    }

    function handleChange(event) {
        setSeachValue(event.target.value)
    }

    const shouldDisplayButton = searchValue.length > 0;

    const filteredProducts =  products.filter((product) => { return product.includes(searchValue);}) ;

    function HandleClick() {
        setSeachValue("")
    }


    return (
        <div>
            <input type='text' value={searchValue} onChange={handleChange} />
            {shouldDisplayButton && <button onClick={HandleClick}>clear</button>}

            <ul>
                {filteredProducts.map((product) => {
                    return <li key={product}>{product}</li>
                })}
            </ul>

        </div>
    )
}

export default SearchBar;