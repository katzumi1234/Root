import axios from 'axios';

const fetchCountries = async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all')
    const countries = response.data.map((country) =>  ({
        name: country.name.common,
        population: country.population,
        region: country.region
    }))
    for(let i=0; i<countries.length; i++)
        for(let j=i+1; j<countries.length; j++)
            if(countries[i].population > countries[j].population)
            {
                let aux = countries[i];
                countries[i] = countries[j];
                countries[j] = aux;
            }
    const countriesHeader = ['Nume', 'Populatie', 'Regiune'];
    const countriesData = {
        header: countriesHeader,
        data: countries
    }
    return countriesData;
}

export {
    fetchCountries
}