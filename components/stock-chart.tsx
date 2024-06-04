"use client";

import { useState, useEffect, useMemo } from "react";
import axios from "axios";

import ReactApexChart from "react-apexcharts";
import { formatStockData } from "@/lib/utils";

import { ApexOptions } from "apexcharts";

// import dynamic from "next/dynamic";
// const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface StockData {
	[key: string]: {
		"1. open": string;
		"2. high": string;
		"3. low": string;
		"4. close": string;
		"5. volume": string;
	};
}

const StockChart = () => {
	const [stockData, setStockData] = useState<any>(null);
	const [seriesData, setSeriesData] = useState<any>(null);

	const candleStickOptions: ApexOptions = {
		chart: {
			type: "candlestick",
		},
		title: {
			text: "CandleStick Chart",
			align: "left",
		},
		xaxis: {
			type: "datetime",
		},
		yaxis: {
			tooltip: {
				enabled: true,
			},
		},
	};

	useEffect(() => {
		const fetchData = async () => {
			const interval = "60min"; // or any other interval you have data for

			try {
				const response = await axios.get(`/api/stocks`, {
					params: { interval },
				});

				const seriesData = formatStockData(response.data);
				setSeriesData(seriesData);
			} catch (error) {
				console.error("Error fetching stock data", error);
			}
		};

		fetchData();
	}, []);

	const option = {
		chart: {
			type: "candlestick",
		},
		title: {
			text: "CandleStick Chart",
			align: "left",
		},
		xaxis: {
			type: "datetime",
		},
		yaxis: {
			tooltip: {
				enabled: true,
			},
		},
	};

	// const option = {
	// 	chart: {
	// 		id: "apexchart-example",
	// 	},
	// 	xaxis: {
	// 		categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
	// 	},
	// };

	// const series = [
	// 	{
	// 		name: "series-1",
	// 		data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
	// 	},
	// ];

	return (
		<ReactApexChart
			series={[
				{
					data: seriesData,
				},
			]}
			options={candleStickOptions}
			type="candlestick"
			height={500}
			width={800}
		/>

		// <>
		// 	<Chart
		// 		type="candlestick"
		// 		options={option}
		// 		series={seriesData}
		// 		height={200}
		// 		width={500}
		// 	/>
		// </>
	);
};

export default StockChart;
