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
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition-colors"
                    >
                        Simul loading
                    </button>
                    <button
                        onClick={simulateError}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition-colors"
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

                <div className="flex flex-col gap-4">
                    <CryptoCard
                        id={mockCoins[0].id}
                        name={mockCoins[0].name}
                        symbol={mockCoins[0].symbol}
                        price={mockCoins[0].current_price}
                        changePercent={mockCoins[0].price_change_percentage_24h}
                        imageUrl={mockCoins[0].image}
                        rank={mockCoins[0].market_cap_rank}
                    />
                    <CryptoCard
                        id={mockCoins[1].id}
                        name={mockCoins[1].name}
                        symbol={mockCoins[1].symbol}
                        price={mockCoins[1].current_price}
                        changePercent={mockCoins[1].price_change_percentage_24h}
                        imageUrl={mockCoins[1].image}
                        rank={mockCoins[1].market_cap_rank}
                    />
                    <CryptoCard
                        id={mockCoins[2].id}
                        name={mockCoins[2].name}
                        symbol={mockCoins[2].symbol}
                        price={mockCoins[2].current_price}
                        changePercent={mockCoins[2].price_change_percentage_24h}
                        imageUrl={mockCoins[2].image}
                        rank={mockCoins[2].market_cap_rank}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
