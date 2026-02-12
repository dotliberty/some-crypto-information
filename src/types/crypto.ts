export interface Coin {
    id: string

    symbol: string
    name: string
    image: string

    current_price: number
    market_cap: number
    market_cap_rank: number
    price_change_percentage_24h: number
    
    total_volume: number
}

export interface Exchange {
    id: string

    name: string
    image: string

    trust_score: number
    trust_score_rank: number
    
    trade_volume_24h_btc: number

    url: string
    country: string | null
    year_established: number | null
}

export interface CryptoCardProps {
    id: string

    name: string
    symbol: string

    price: number
    changePercent: number

    imageUrl: string
    
    rank: number
}

export interface ExchangeCardProps {
    name: string
    imageUrl: string

    trustScore: number
    trustScoreRank: number

    volume24h: number

    url: string
    country: string | null
    yearEstablished: number | null
}
