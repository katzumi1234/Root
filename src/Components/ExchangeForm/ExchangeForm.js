import './ExchangeForm.css';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { fetchCurrencies, fetchExchange } from '../../http/exchange';

const ExchangeForm = () => {
    const [fromCurrency, setFromCurrency] = useState('EUR');
    const [toCurrency, setToCurrency] = useState('RON');
    const [currencies, setCurrencies] = useState(['RON', 'EUR']);
    const [amount, setAmount] = useState(0);
    const [exchangeValue, setExchangeValue] = useState(0);

    const getCurrencies = async () => {
        const currenciesData = await fetchCurrencies();
        setCurrencies(currenciesData);
    }

    const getExchange = async () => {
        const response = await fetchExchange(amount, toCurrency, fromCurrency);
        if(response.status === 200)
            setExchangeValue(response.text);
        else setExchangeValue('ERR. Check inputs.')
    }

    useEffect(() => {
        getCurrencies();
    }, []);

    return (
        <div className='d-flex flex-column mt-5 p-5 rounded bg-white text-black'>
            <h1 className='mb-3'>Exchange</h1>
            <TextField
                className='mb-3'
                id="outlined-basic"
                placeholder='Amount'
                value={amount}
                type='number'
                onChange={(e) => setAmount(e.target.value)}
                variant="outlined"
            />
            <div className='d-flex justify-content-between align-items-center'>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={fromCurrency}
                className='mb-3'
                onChange={(e) => setFromCurrency(e.target.value)}
                >
                    {currencies.length > 0 &&
                    currencies.map((currency) => (
                        <MenuItem key={currency} value={currency}>{currency}</MenuItem>
                    ))}
                </Select>
                &rarr;
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={toCurrency}
                className='mb-3'
                onChange={(e) => setToCurrency(e.target.value)}
                >
                    {currencies.length > 0 &&
                    currencies.map((currency) => (
                        <MenuItem key={currency} value={currency}>{currency}</MenuItem>
                    ))}
                </Select>
            </div>
            <Button onClick={getExchange} className='mb-5' variant="contained">Exchange</Button>
            <TextField
                disabled
                id="outlined-disabled"
                label="Exchanged"
                value={exchangeValue}
            />
        </div>
    )
}

export default ExchangeForm;