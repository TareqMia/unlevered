"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface StockSummary {
	analyst_estimates: { [bank: string]: { estimate: number; icon: string } };
	current_ratio: number;
	debt_to_equity_ratio: number;
	eps: number;
	market_ap: number;
	news: {
		[article: string]: {
			sentiment: { score: number; value: string };
			summary: string;
		};
	};
	pb_ratio: number;
	pe_ratio: number;
	peg_ratio: number;
	ps_ratio: number;
	shares_outstanding: number;
	ticker: string;
}

const StockSummary = () => {
	const [stockSummaryData, setStockSummaryData] = useState<StockSummary | null>(
		null
	);

	useEffect(() => {
		const fetchData = async () => {
			const ticker = "APPL";

			try {
				const response = await axios.get(`/api/stocks/stock-summary/${ticker}`);
				setStockSummaryData(response.data);
			} catch (error) {
				console.error("Error fetching stock data", error);
			}
		};

		fetchData();
	}, []);

	return (
		stockSummaryData && (
			<div className="bg-white dark:bg-inherit rounded-lg shadow-md p-6 w-full max-w-5xl mt-4">
				<h2 className="text-2xl font-bold mb-4">
					{stockSummaryData.ticker} Stock Summary
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div>
						<div className="flex justify-between py-1">
							<span className="text-gray-500">Current Ratio</span>
							<span className="font-medium">
								{stockSummaryData.current_ratio}
							</span>
						</div>
						<div className="flex justify-between py-1">
							<span className="text-gray-500">Debt-to-Equity Ratio</span>
							<span className="font-medium">
								{stockSummaryData.debt_to_equity_ratio}
							</span>
						</div>
						<div className="flex justify-between py-1">
							<span className="text-gray-500">EPS</span>
							<span className="font-medium">{stockSummaryData.eps}</span>
						</div>
						<div className="flex justify-between py-1">
							<span className="text-gray-500">P/E Ratio</span>
							<span className="font-medium">{stockSummaryData.pe_ratio}</span>
						</div>
						<div className="flex justify-between py-1">
							<span className="text-gray-500">P/B Ratio</span>
							<span className="font-medium">{stockSummaryData.pb_ratio}</span>
						</div>
						<div className="flex justify-between py-1">
							<span className="text-gray-500">PEG Ratio</span>
							<span className="font-medium">{stockSummaryData.peg_ratio}</span>
						</div>
						<div className="flex justify-between py-1">
							<span className="text-gray-500">P/S Ratio</span>
							<span className="font-medium">{stockSummaryData.ps_ratio}</span>
						</div>
					</div>
					<div>
						<div className="flex justify-between py-1">
							<span className="text-gray-500">Market Cap</span>
							<span className="font-medium">{stockSummaryData.market_ap}</span>
						</div>
						<div className="flex justify-between py-1">
							<span className="text-gray-500">Shares Outstanding</span>
							<span className="font-medium">
								{stockSummaryData.shares_outstanding}
							</span>
						</div>
						<div className="mt-4">
							<h3 className="text-lg font-medium mb-2">Analyst Estimates</h3>
							{Object.entries(stockSummaryData.analyst_estimates).map(
								([bank, { estimate, icon }]) => (
									<div key={bank} className="flex justify-between py-1">
										<div className="flex flex-row gap-x-2 items-center">
											<span className="text-gray-500">{bank}</span>
											<Image
												src={icon}
												alt={`${bank} icon`}
												width={25}
												height={25}
											/>
										</div>

										<span className="font-medium">{estimate}</span>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		)
	);
};

export default StockSummary;
