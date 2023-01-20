import {useEffect} from "react";

export const MainPage = () => {

    useEffect(() => {
        const dataFetch = async () => {
            const res = await fetch('https://unelmamovie.com/api/v1/',{
                method: 'GET',
                mode:'no-cors',
                headers: {
                    Authorization: 'Bearer',
                }
            });
            const data = await res.json();
            const json = data === "" ? {} : JSON.parse(data);
            console.log(json)
        }
        dataFetch();
    }, []);

    return <></>
}