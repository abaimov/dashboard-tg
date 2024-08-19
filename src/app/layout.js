import {Ubuntu} from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({subsets: ["latin", "cyrillic"],weight: ["400", "700"]});

export const metadata = {
    title: "Dashboard Telegram",
    description: "dashboard",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={ubuntu.className}>
        <div className={"max-w-[1440px] m-auto mt-5 font-bold tracking-wide text-3xl text-black/80"}>TELEGRAM DASHBOARD</div>
        <div className={"max-w-[1440px] m-auto border-[1px] mt-10 rounded-xl p-5"}>
            {children}
        </div>
        </body>
        </html>
    );
}
