function Navbar() {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
            <span className="text-xl font-bold text-yellow-400">
                🪙 CryptoInfo
            </span>

            <ul className="flex gap-6 list-none">
                <li>
                    <a href="/" className="hover:text-yellow-400 transition-colors">
                        Main
                    </a>
                </li>
                <li>
                    <a href="/exchanges" className="hover:text-yellow-400 transition-colors">
                        Exchanges
                    </a>
                </li>
                <li>
                    <a href="/coins" className="hover:text-yellow-400 transition-colors">
                        All Coins
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
