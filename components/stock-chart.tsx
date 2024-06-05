"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import { formatStockData } from "@/lib/utils";
import ReactApexChart from "react-apexcharts";

import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";

const StockChart = () => {
	const { resolvedTheme } = useTheme();
	const [seriesData, setSeriesData] = useState<any>(null);
	const [candleStickOptions, setCandleStickOptions] = useState<ApexOptions>({
		chart: {
			type: "candlestick",
			width: "100%",
			zoom: {
				enabled: true,
				type: "x",
				autoScaleYaxis: false,
				zoomedArea: {
					fill: {
						color: "#90CAF9",
						opacity: 0.4,
					},
					stroke: {
						color: "#0D47A1",
						opacity: 0.4,
						width: 1,
					},
				},
			},
		},
		xaxis: {
			type: "datetime",
		},
		yaxis: {
			tooltip: {
				enabled: true,
			},
		},
		theme: {
			mode: resolvedTheme === "dark" ? "dark" : "light",
		},
	});

	useEffect(() => {
		const fetchData = async () => {
			const interval = "5min";

			try {
				const response = await axios.get(`/api/stocks`, {
					params: { interval },
				});

				const seriesData = formatStockData(response.data, interval);
				setSeriesData(seriesData);
			} catch (error) {
				console.error("Error fetching stock data", error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		setCandleStickOptions((prevOptions) => ({
			...prevOptions,
			theme: {
				mode: resolvedTheme === "dark" ? "dark" : "light",
			},
		}));
	}, [resolvedTheme]);

	return (
		<div className="w-full h-96 max-w-screen-lg mx-auto p-4 border border-gray-200 rounded-lg shadow-md">
			<ReactApexChart
				series={[
					{
						data: seriesData,
					},
				]}
				options={candleStickOptions}
				type="candlestick"
				height={"100%"}
				width={"100%"}
			/>
		</div>
	);
};

export default StockChart;
