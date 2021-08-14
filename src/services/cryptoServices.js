import axios from 'axios';
const link = 'https://api.coingecko.com/api/v3/coins/';

const cryptos = [
    'bitcoin',
    'ethereum',
    'tether',
    'binancecoin',
    'dogecoin',
    'polkadot',
    'uniswap',
    'usd-coin',
    'litecoin'
]

async function getOneCrypto() {
    const randomNum = parseInt(Math.random() * 8);
    
    try {
        const {data} = await axios.get(`${link}/${cryptos[randomNum]}`);
        const percentageMarket = data.market_data.price_change_percentage_24h;

        return {
            id: data.id,
            image: data.image.large,
            name: data.name,
            currentPrice: data.market_data.current_price.usd,
            lastDayPrice: percentageMarket.toFixed(2),
        };

    } catch (err) {
        throw new Error(err);
    }
}

async function getCryptos (page) {
    try {
        const {data} = await axios.get(`${link}/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=${page}&sparkline=false`);
        return data;

    } catch (err) {
        throw new Error(err);
    }
}



export { getOneCrypto , getCryptos};