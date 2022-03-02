import React, { useEffect, useState } from 'react';
import FetchData from '../../service/FetchData';

const fetchData = new FetchData();

const useLaunches = () => {

	//это вот вместо this.state
	const [data, setData] = useState([]);//пустой массив передается чтобы сработал 1 раз

	//для побочных эффектов типо запросов на сервер
	useEffect(() => {
		fetchData.getLaunches()
			.then(launches => setData(launches))
	}, []);

    const getLaunch = id => data.find(item => item.id === id)

    return { data, getLaunch }
}

export default useLaunches;