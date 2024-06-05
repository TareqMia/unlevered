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
import StockNews from "@/components/stock-news";

export default function Home() {
	return (
		<main className="flex w-screen min-h-screen flex-col items-center justify-between p-8">
			<div className="flex flex-col lg:flex-row w-full">
				{/* stock info */}
				<div className="z-10 w-full max-w-5xl flex flex-col lg:justify-between gap-2 lg:flex-[3] p-5">
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
					<div className="flex flex-col lg:flex-row">
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
						<div className="pl-2 w-[130-px]">
							<Select>
								<SelectTrigger className="smg:w-[130px]">
									<SelectValue
										placeholder={
											<div className="flex items-center gap-x-2 ">
												<CandlestickChart size={15} />
												<span className="text-xs">Candlestick</span>
											</div>
										}
									/>
								</SelectTrigger>
								<SelectContent className="min-w-0">
									<SelectItem value="light">
										<div className="flex items-center gap-x-2 ">
											<CandlestickChart size={15} />
											<span className="text-xs lg:inline">Candlestick</span>
										</div>
									</SelectItem>
									<SelectItem value="dark">
										<div className="flex items-center gap-x-2 ">
											<LineChart size={15} />
											<span className="text-xs lg:inline">Line</span>
										</div>
									</SelectItem>
									<SelectItem value="system">
										<div className="flex items-center gap-x-2 ">
											<AreaChart size={15} />
											<span className="text-xs lg:inline">Area</span>
										</div>
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					{/* chart */}
					<StockChart />

					{/* summary */}
					<StockSummary />
				</div>

				<div className="ml-4 p-5">
					<StockNews
						articles={{
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
						}}
					/>
				</div>
			</div>
		</main>
	);
}
