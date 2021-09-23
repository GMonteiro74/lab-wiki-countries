import React, {useState} from 'react';
import CountriesJSON from '../countries.json';
import { NavLink } from 'react-router-dom';

export default function CountriesList() {

    const [countries] = useState(CountriesJSON)

    return (
        <>
       
        {countries.map(country => {
            return (

                <NavLink className='list-group-item list-group-item-action' exact to={`/${country.alpha3Code}`}>
                <img src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`} alt='flag' />
                <p>{country.name}</p>
                </NavLink>
            )
        })}
        </>
    )
}
