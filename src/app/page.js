'use client';

import Main from "@/app/Main";
import useSWR from 'swr';


const fetcher = async (url) =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}`,{cache:'no-store'});
    const data = await response.json();
    return data.posts;
}

export default  function Home() {
    const { data: posts, error } = useSWR(`/api/users`, fetcher, {
        refreshInterval:1000
    });

    return (
        <>
            <Main fetchDataRevalidate={posts}/>
        </>
    );
}
