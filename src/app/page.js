import Main from "@/app/Main";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";


export default async function Home() {
    const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users`, { next: { revalidate: 300 } });
    const res = await data.json()
    return (
        <>
            <Main users={res}/>
        </>
    );
}
