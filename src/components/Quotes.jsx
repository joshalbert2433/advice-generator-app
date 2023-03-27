import React from "react";
import { getAdvice } from "../api/quotesAPI";
import { useQuery } from "react-query";
import { FaDiceFive } from "react-icons/fa";

function Quotes() {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["quote"],
		queryFn: getAdvice,
	});

	if (isLoading) {
		return <div className="text-LightCyan">Loading...</div>;
	}

	if (isError) {
		return <div className="text-LightCyan">Error 404</div>;
	}

	return (
		<div className="relative max-w-lg mx-auto bg-GrayishDarkBlue text-center px-4 rounded">
			<div className="text-NeonGreen text-[14px] tracking-[4px] py-4">
				ADVICE # {data.slip.id}
			</div>
			<div className="text-LightCyan font-bold">
				{'"' + data.slip.advice + '"'}
			</div>
			<div className="py-4 flex gap-2 items-center pb-10">
				<div className="w-full h-[0.5px] opacity-30 bg-LightCyan"></div>
				<div className="flex gap-1">
					<div className="w-1 h-3 bg-LightCyan rounded-lg"></div>
					<div className="w-1 h-3 bg-LightCyan rounded-lg"></div>
				</div>
				<div className="w-full h-[0.5px] opacity-30 bg-LightCyan"></div>
			</div>
			<div className="absolute -translate-x-[50%] -bottom-[35px] left-[50%] p-3 rounded-full bg-NeonGreen">
				<FaDiceFive size={26} className="text-BlueDark" />
			</div>
		</div>
	);
}

export default Quotes;
