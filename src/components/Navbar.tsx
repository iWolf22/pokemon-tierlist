import Link from "next/link";

export default function Navbar() {

    return (
        <div className="flex justify-between bg-slate-200 w-full p-2 my-4 rounded-lg mb-16 border-2 border-slate-400">
            <div className="flex justify-left gap-4 ml-3">
                <div className="flex flex-col justify-center">
                    <img src="https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png" className="h-6"></img>
                </div>
                <Link href="/" className="hover:bg-slate-300 duration-200 p-1 rounded border-2 hover:border-slate-400">Home</Link>
                <Link href="/pokemon" className="hover:bg-slate-300 duration-200 p-1 rounded border-2 hover:border-slate-400">Pokemon</Link>
                <Link href="/" className="hover:bg-slate-300 duration-200 p-1 rounded border-2 hover:border-slate-400">Cart</Link>
                <Link href="/" className="hover:bg-slate-300 duration-200 p-1 rounded border-2 hover:border-slate-400">Checkout</Link>
            </div>
            <div className="flex justify-left gap-4">
                <Link href="/" className="hover:bg-slate-300 duration-200 p-1 rounded border-2 hover:border-slate-400">Sign in</Link>
                <Link href="/" className="hover:bg-slate-300 duration-200 p-1 rounded border-2 hover:border-slate-400">Sign out</Link>
            </div>
        </div>
    )
}