import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../../fakedb/fakedb';
import { useLoaderData } from 'react-router-dom';
import OnsiteContainer from './OnsiteContainer';

const Onsite = () => {
    const DataBase = useLoaderData();
    // const [onsite,setonsite] = useState([]);
    const localData = getShoppingCart();
    let appliedData = [];
    for(const id in localData){
        const appliedFind = DataBase.find(data=>data.id===id)
        appliedData.push(appliedFind);
        // console.log(appliedFind);
    }
    return (
        <div>
            <h2>Here is all Onsite JOb </h2>
            {
                appliedData.map(data => <OnsiteContainer
                key={data.id}
                data={data}
                ></OnsiteContainer>)
            }
        </div>
    );
};

export default Onsite;