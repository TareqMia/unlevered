import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatStockData = (stockData: any, interval: string) => {
	const formattedData: any[] = [];

	console.log(interval);

	if (stockData[`Time Series (${interval})`]) {
		Object.entries(stockData[`Time Series (${interval})`]).map(
			([key, value]: [any, any]) => {
				formattedData.push({
					x: key,
					y: [
						value["1. open"],
						value["2. high"],
						value["3. low"],
						value["4. close"],
						value["5. volume"],
					],
				});
			}
		);
	}
	return formattedData;
};
