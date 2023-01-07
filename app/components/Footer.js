
export default function Footer(){


    return(
    
    <footer className="absolute w-full bg-slate-500 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2022 <a href="/" className="hover:underline">Cookie Stand Admin</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
        <li>
            <a href="/about" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
</footer>
    )
}