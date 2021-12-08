import React, { useContext } from 'react';
import { FavContext } from '../../providers/favMusic';

const FavList = () => {
    const { favList } = useContext(FavContext);

    return (
        <div>
            {/* {favList.length ? favList.map((item, index) => (
                <p>{item.title}</p>
            )): null} */}
            <pre>{JSON.stringify(favList, null, 2)}</pre>
        </div>
    );
}

export default FavList;