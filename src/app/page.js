import Main from "@/app/Main";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";


export default async function Home() {
    const dataUsers = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users`, {next: {revalidate: 300}});
    const resUsers = await dataUsers.json()

    const dataBlocked = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/block`, {next: {revalidate: 300}});
    const resBlocked = await dataBlocked.json()
    return (
        <>
            <Main users={resUsers} blocked={resBlocked}/>
        </>
    );
}
