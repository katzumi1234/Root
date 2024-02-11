import axios from 'axios';

const fetchFact = async (id) => {
    const response = await axios.get('https://cat-fact.herokuapp.com/facts');
    let data = {};
    response.data.forEach((fact, index) => {
        if(Number(index) === Number(id))
            data = {id: index, text: fact.text}
    })

    if(data?.id) return data;
    else return {id: -5, text: 'No fact found at that index.'};
}

export {
    fetchFact
}