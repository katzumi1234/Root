/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { fetchFact } from '../http/cats';
import { useState, useEffect } from 'react';
import FactCard from '../Components/FactCard/FactCard';

const Cats = () => {
    const [fact, setFact] = useState({});
    const { id } = useParams();

    const getFact = async () => {
        const response = await fetchFact(id);
        setFact(response);
    }
    
    useEffect(() => {
        getFact();
    }, [id])

    return (
        <>
            {fact?.id &&
                <FactCard id={fact.id} text={fact.text} />
            }
        </>
    )
}

export default Cats;