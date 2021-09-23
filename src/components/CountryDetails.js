import React, {useEffect, useState} from 'react';
import CountriesJSON from '../countries.json';
import { NavLink } from 'react-router-dom';

export default function CountryDetails({match}) {

    const [country, setCountry] = useState(CountriesJSON[0]);

    // const [borderCountry, setBorderCountry] = useState(CountriesJSON[0]);

    useEffect(() => {
        const countryAlpha = match.params.alpha3Code;
        const foundCountry = CountriesJSON.find((country) => country.alpha3Code === countryAlpha);
        setCountry(foundCountry)
        console.log(foundCountry.borders);
    }, [match.params.alpha3Code])

    return (
        <div className="col-7">

        <img src={`https://www.countryflags.io/${country.alpha2Code}/shiny/64.png`} alt='flag'/>
        <h1>{country.name}</h1>
        <table className="table">
        <thead></thead>
        <tbody>
        <tr>
        <td>
        <p>Capital: {country.capital}</p>
        </td>
        </tr>
        
        <tr>
        <td>
        <p>Area: {country.area}</p>
        </td>
        </tr>

        <tr>
        <td>Borders</td>
        </tr>
        <tr>
        <td>
        <ul>
            {country.borders.map(border => {
                const borderedCountry = CountriesJSON.find(country => country.alpha3Code === border);
                return (
                    <NavLink exact to={`/${border}`}>
                    <li>{borderedCountry.name}</li>
                    </NavLink>
                )
            })}
        </ul>

        </td>
        </tr>
        </tbody>
        </table>
        </div>
    )
}
