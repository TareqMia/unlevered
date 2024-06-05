import StockChart from "@/components/stock-chart";
import StockSummary from "@/components/stock-summary";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { CandlestickChart } from "lucide-react";
import { LineChart } from "lucide-react";
import { AreaChart } from "lucide-react";

export default function Home() {
	return (
		<main className="flex w-screen min-h-screen flex-col items-center justify-between p-8">
			<div className="z-10 w-full max-w-5xl flex flex-col lg:justify-between gap-2">
				{/* title */}
				<div className="flex items-center gap-2">
					<h1 className="text-3xl font-semibold">Apple Inc.</h1>
					<span className="text-gray-500 text-sm">(AAPL)</span>
					<button className="text-blue-500 bg-blue-100 hover:bg-blue-200 rounded-md px-2 py-1 text-xs">
						★ Follow
					</button>
				</div>

				{/* subtitles */}
				<div className="flex sm:gap-4 text-gray-700 items-center">
					<div className="flex items-center gap-1 ">
						<span className="text-2xl font-semibold text-green-500">
							194.31
						</span>
						<span className="text-sm dark:text-white">+0.28 (+0.14%)</span>
					</div>
					<span className="text-xs dark:text-white">
						As of 12:17 PM EDT. Market Open.
					</span>
				</div>

				{/* toggle group */}
				<div className="flex">
					<div className="flex flex-wrap justify-center">
						<ToggleGroup
							type="single"
							size="sm"
							variant={null}
							className="gap-x-0 p-0"
						>
							<ToggleGroupItem value="1d">1D</ToggleGroupItem>
							<ToggleGroupItem value="5d">5D</ToggleGroupItem>
							<ToggleGroupItem value="3m">3M</ToggleGroupItem>
							<ToggleGroupItem value="6m">6M</ToggleGroupItem>
							<ToggleGroupItem value="ytd">YTD</ToggleGroupItem>
							<ToggleGroupItem value="1y">1Y</ToggleGroupItem>
							<ToggleGroupItem value="5y">5Y</ToggleGroupItem>
							<ToggleGroupItem value="all">All</ToggleGroupItem>
						</ToggleGroup>
					</div>

					{/* chart select */}
					<div className="pl-2">
						<Select>
							<SelectTrigger className="smg:w-[130px]">
								<SelectValue
									placeholder={
										<div className="flex items-center gap-x-2 ">
											<CandlestickChart size={15} />
											<span className="text-xs hidden lg:inline">
												Candlestick
											</span>
										</div>
									}
								/>
							</SelectTrigger>
							<SelectContent className="min-w-0">
								<SelectItem value="light">
									<div className="flex items-center gap-x-2 ">
										<CandlestickChart size={15} />
										<span className="text-xs hidden lg:inline">
											Candlestick
										</span>
									</div>
								</SelectItem>
								<SelectItem value="dark">
									<div className="flex items-center gap-x-2 ">
										<LineChart size={15} />
										<span className="text-xs hidden lg:inline">Line</span>
									</div>
								</SelectItem>
								<SelectItem value="system">
									<div className="flex items-center gap-x-2 ">
										<AreaChart size={15} />
										<span className="text-xs hidden lg:inline">Area</span>
									</div>
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>

				{/* chart */}
				<StockChart />

				{/* summary */}
				<StockSummary
					data={{
						analyst_estimates: {
							Citibank: {
								estimate: 6.5,
								icon: "/citi.svg",
							},
							"Goldman Sachs": {
								estimate: 7.9,
								icon: "/goldman.svg",
							},
							"Morgan Stanley": {
								estimate: 9.87,
								icon: "/morganstanley.svg",
							},
						},
						current_ratio: 7.1,
						debt_to_equity_ratio: 2.1,
						eps: 1.7,
						market_ap: 2.5,
						news: {
							article1: {
								sentiment: { score: 0.9, value: "positive" },
								summary: "This is Article1",
							},
							article2: {
								sentiment: { score: 0.67, value: "negative" },
								summary: "This is Article2",
							},
							article3: {
								sentiment: { score: 0.559, value: "positive" },
								summary: "This is Article3",
							},
						},
						pb_ratio: 7.9,
						pe_ratio: 1.2,
						peg_ratio: 5.5,
						ps_ratio: 33.5,
						shares_outstanding: 317,
						ticker: "AAPL",
					}}
				/>
			</div>
		</main>
	);
}
