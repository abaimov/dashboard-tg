import Image from "next/image";
import Main from "@/app/Main";


export default async function Home() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users`, {revalidate: 600})
    const data = await res.json()
    return (
        <>
            <Main fetchDataRevalidate={data}/>
        </>
    );
}
