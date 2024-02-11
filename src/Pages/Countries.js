import { fetchCountries } from '../http/countries';
import { useState, useEffect } from 'react';
import Table from '../Components/Table/Table';


const Countries = () => {
    const [countries, setCountries] = useState([]);

    const getCountries = async () => {
      const countriesData = await fetchCountries();
      setCountries(countriesData);
    }
  
    const deleteCountry = (id) => {
      const newCountries = countries.data.filter((country, index) => index !== id);
      setCountries(
        {
          header: countries.header,
          data: newCountries
        }
      );
    }
  
    const logSomething = () => {
      console.log('This is something');
    }
  
    // Se executa o singura data cand se randeaza componenta
    // Se executa de fiecare data cand o variabila din array-ul de dependinte isi schimba valoarea
    useEffect(() => {
      getCountries();
    }, [])
  
    const countriesActions = [
      {
        text: 'Sterge',
        type: 'danger',
        fn: deleteCountry,
        withParameters: true,
      },
      {
        text: 'Log',
        type: 'primary',
        fn: logSomething,
        withParameters: false,
      }
    ]
    return(<>{countries?.header &&
        <Table data={countries} actions={countriesActions} />
      }</>
      )
    
}

export default Countries;