import React from "react";
import { Card, CardHeader, CardContent } from "./ui/card";
import { ThumbsDown } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import Link from "next/link";

interface Article {
	sentiment: { score: number; value: string };
	summary: string;
}

interface StockNewsProps {
	news: {
		[article: string]: Article;
	};
}

function StockNews({ articles }: { articles: StockNewsProps }) {
	const getSentimentIcon = (value: string) => {
		switch (value.toLowerCase()) {
			case "positive":
				return <ThumbsUp size={20} className="text-green-500" />;
			case "negative":
				return <ThumbsDown size={20} className="text-red-500" />;
			default:
				return null;
		}
	};

	return (
		<div className="w-full p-4 lg:p-0 lg:pl-8">
			<h2 className="text-3xl font-bold mb-4">News</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto">
				{Object.entries(articles.news).map(([key, article]) => (
					<Card key={key}>
						<CardHeader>
							<h3 className="font-semibold text-lg">
								<Link
									href={
										"https://finance.yahoo.com/news/watch-apple-kick-off-wwdc-220223741.html"
									}
									target="blank"
								>
									{key.replace("article", "Article ")}
								</Link>
							</h3>
						</CardHeader>
						<CardContent>
							<p className="text-base pb-2">{article.summary}</p>
							<div className="flex justify-between items-center">
								{getSentimentIcon(article.sentiment.value)}
								<span className="text-xs text-gray-500">
									Score: {article.sentiment.score}
								</span>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}

export default StockNews;
