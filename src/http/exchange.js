import axios from 'axios';

const apiKey = 'fca_live_fPO68Zd7UU4nXet3nQ3fJ0vMfmlT6t9m3POxEV3y';

const fetchCurrencies = async () => {
    const response = await axios.get(`https://api.freecurrencyapi.com/v1/currencies/?apikey=${apiKey}`);
    return Object.keys(response.data.data);
}

const fetchExchange = async (amount, to, from) => {
    if(!isNaN(Number(amount)))
        if(Number(amount) >= 0) {
            const response = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${from}`)
            for(const key in response.data.data) {
                if(to === key)
                    return {status: 200, text: response.data.data[key] * amount};
            }
        } else {
            return {status: 500, text: 'ERR: Amount is negative.'}
        }
    else {
        return {status: 500, text: 'ERR: Amount is string'}
    }
}

export {
    fetchCurrencies,
    fetchExchange
}