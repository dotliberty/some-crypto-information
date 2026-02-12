import { type CryptoCardProps } from "../types/crypto"

function CryptoCard({
    name,
    symbol,
    price,
    changePercent,
    imageUrl,
    rank,
}: CryptoCardProps) {
    const isPositive = changePercent >= 0

    const formattedPrice = price.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    const formattedChange = `${isPositive ? '+' : ''}${changePercent.toFixed(2)}%`

    return (
        <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition-shadow">
            <span className="text-gray-400 font-medium w-6 text-center text-sm">
                {rank}
            </span>
            
            <img src={imageUrl} alt={name} className="w-12 h-12 rounded-full" />

            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-800 text-lg">{name}</h3>
                    <span className="text-gray-400 text-sm uppercase bg-gray-100 px-2 py-0.5 rounded">{symbol}</span>
                </div>
            </div>

            <div className="text-right">
                <p className="font-semibold text-gray-800">${formattedPrice}</p>
                <p className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {formattedChange}
                </p>
            </div>
        </div>
    )
}

export default CryptoCard
