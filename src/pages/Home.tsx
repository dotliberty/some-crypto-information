import { useState } from 'react'

import CryptoCard from "../components/CryptoCard";
import { type Coin } from "../types/crypto";

const mockCoins: Coin[] = [
    {
        id: "bitcoin",
        symbol: "btc",
        name: "Bitcoin",
        image: "https://assets.coingecko.com/asset_platforms/images/127/standard/ordinals.png",
        current_price: 65432.1,
        market_cap: 1_284_000_000_000,
        market_cap_rank: 1,
        price_change_percentage_24h: 2.34,
        total_volume: 28_000_000_000
    },
    {
        id: "ethereum",
        symbol: "eth",
        name: "Ethereum",
        image: "https://assets.coingecko.com/asset_platforms/images/279/standard/ethereum.png",
        current_price: 3510.80,
        market_cap: 423_000_000_000,
        market_cap_rank: 2,
        price_change_percentage_24h: -1.12,
        total_volume: 15_000_000_000
    },
    {
        id: "tether",
        symbol: "usdt",
        name: "Tether",
        image: "https://assets.coingecko.com/coins/images/325/standard/Tether.png",
        current_price: 1,
        market_cap: 112_000_000_000,
        market_cap_rank: 3,
        price_change_percentage_24h: 0.01,
        total_volume: 98_000_000_000
    }
]

function Home() {
    const [coins, setCoins] = useState<Coin[]>(mockCoins)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    function simulateLoading() {
        setIsLoading(true)
        setCoins([])

        setTimeout(() => {
            setIsLoading(false)
            setCoins(mockCoins)
        }, 2000)
    }

    function simulateError() {
        setError('Loading data is failed. Check connect to internet')
        setCoins([])
    }

    function clearError() {
        setError(null)
        setCoins(mockCoins)
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-4xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Cryptocurrencies' Top
                </h1>

                <p className="text-gray-500 mb-8">
                    The most popular coins at this moment
                </p>

                <div className="flex gap-3 mb-8">
                    <button
                        onClick={simulateLoading}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                    >
                        Simul loading
                    </button>
                    <button
                        onClick={simulateError}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors"
                    >
                        Simul error
                    </button>
                    {error && (
                        <button
                            onClick={clearError}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition-colors"
                        >
                            Clear
                        </button>
                    )}
                </div>

                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
                        <p className="text-4xl mb-3">⚠️</p>
                        <p className="text-red-700 font-medium">{error}</p>
                    </div>
                )}

                {isLoading && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
                        <p className="text-gray-500 italic">Data is loading...</p>
                    </div>
                )}

                {!isLoading && !error && coins.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">Coins are not founded</p>
                    </div>
                )}

                {!isLoading && !error && coins.length > 0 && (
                    <div className="flex flex-col gap-4">
                        {coins.map((coin) => (
                            <CryptoCard
                                key={coin.id}
                                id={coin.id}
                                name={coin.name}
                                symbol={coin.symbol}
                                price={coin.current_price}
                                changePercent={coin.price_change_percentage_24h}
                                imageUrl={coin.image}
                                rank={coin.market_cap_rank}
                            />
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}

export default Home
