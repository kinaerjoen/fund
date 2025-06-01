import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const months = [
	"января",
	"февраля",
	"марта",
	"апреля",
	"мая",
	"июня",
	"июля",
	"августа",
	"сентября",
	"октября",
	"ноября",
	"декабря",
];

const parseDate = (date) => {
	const dateItem = new Date(date);
	const currentDate = new Date();

	const time = `${dateItem.getHours()}:${dateItem.getMinutes()}`;
	const day = dateItem.getDate();
	const month = months[dateItem.getMonth()];

	if (
		dateItem.getDate() === currentDate.getDate() &&
		dateItem.getMonth() === currentDate.getMonth() &&
		dateItem.getFullYear() === currentDate.getFullYear()
	) {
		return `сегодня ${time}`;
	} else {
		return `${day} ${month}`;
	}
};

const parseEmail = (email) => {
	try {
		const arr = email.split("@");
		const arr2 = arr[1].split(".");

		const f = arr2[0].split("");
		const g = [f[0], f[f.length - 1]];
		const h = `${g[0]}**${g[1]}`;

		const a = arr[0].split("");
		const b = [a[0], a[a.length - 1]];
		const c = `${b[0]}**${b[1]}`;

		return `${c}@${h}.${arr2[1]}`;
	} catch (error) {
		return "**@**.**";
	}
};

const PaymentHistoryItem = ({ item, cardBg }) => {
	return (
		<>
			{document.documentElement.clientWidth > 767 ? (
				<Flex
					h={"60px"}
					w={"430px"}
					borderRadius={"3px"}
					bgColor={cardBg ? cardBg : "white"}
					mb={"15px"}
					py={"12px"}
					px={"20px"}
				>
					<Flex w={"100%"} justify={"space-between"}>
						<Flex flexDir={"column"}>
							<Flex>
								<Text fontWeight={600} fontSize={"14px"} color={"#1f243a"}>
									{item.name}
								</Text>
								<Text
									fontWeight={600}
									color={"#666666"}
									fontSize={"14px"}
									ml={"3px"}
								>
									{parseEmail(item.email)}
								</Text>
							</Flex>
							<Text fontWeight={600} fontSize={"12px"} color={"#666666"}>
								{parseDate(item.date)}
							</Text>
						</Flex>
						<Text
							color={"#bf3132"}
							fontWeight={700}
							fontSize={"16px"}
							lineHeight={"16px"}
						>
							{item.amount} ₽
						</Text>
					</Flex>
				</Flex>
			) : (
				<Flex
					h={"60px"}
					w={"290px"}
					borderRadius={"3px"}
					bgColor={cardBg ? cardBg : "white"}
					mb={"15px"}
					py={"12px"}
					px={"20px"}
				>
					<Flex w={"100%"} justify={"space-between"}>
						<Flex flexDir={"column"}>
							<Flex>
								<Text
									fontWeight={600}
									fontSize={"14px"}
									color={"#1f243a"}
									maxW={"100px"}
									css={`
										text-overflow: ellipsis;
										word-wrap: keep-all;
										overflow: hidden;
										max-height: 1.2em;
										line-height: 1.2em;
										display: -webkit-box;
										-webkit-line-clamp: 1;
										-webkit-box-orient: vertical;
									`}
								>
									{item.name}
								</Text>
								<Text
									fontWeight={600}
									color={"#666666"}
									fontSize={"14px"}
									ml={"3px"}
									maxW={"100px"}
									css={`
										text-overflow: ellipsis;
										word-wrap: keep-all;
										overflow: hidden;
										max-height: 1.2em;
										line-height: 1.2em;
										display: -webkit-box;
										-webkit-line-clamp: 1;
										-webkit-box-orient: vertical;
									`}
								>
									{parseEmail(item.email)}
								</Text>
							</Flex>
							<Text fontWeight={600} fontSize={"12px"} color={"#666666"}>
								{parseDate(item.date)}
							</Text>
						</Flex>
						<Text
							color={"#bf3132"}
							fontWeight={700}
							fontSize={"16px"}
							lineHeight={"16px"}
						>
							{item.amount} ₽
						</Text>
					</Flex>
				</Flex>
			)}
		</>
	);
};

const PaymentHistory = ({ payments, cardBg, ml }) => {
	const [currentItems, setCurrentItems] = useState([0, 6]);

	const onShowMore = () => {
		const pageSize = 6;
		const maxLength = payments.length;

		if (currentItems[1] + pageSize <= maxLength) {
			setCurrentItems([currentItems[1], currentItems[1] + pageSize]);
		} else if (
			maxLength - currentItems[1] > 0 &&
			maxLength - currentItems[1] <= maxLength
		) {
			setCurrentItems([
				currentItems[1],
				currentItems[1] + maxLength - currentItems[1],
			]);
		} else {
			setCurrentItems([0, 6]);
		}
	};

	return (
		<>
			{document.documentElement.clientWidth > 767 ? (
				<Flex
					flexDir={"column"}
					h={"584px"}
					justify={"space-between"}
					ml={ml ? "55px" : ""}
				>
					<Heading
						fontSize={"20px"}
						fontWeight={700}
						color={"#1f243a"}
						fontFamily={"Wix Madefor Display"}
						mb={"50px"}
					>
						Список пожертвований
					</Heading>
					<Flex flexDir={"column"} justify={"flex-start"} h="77%">
						{payments.slice(currentItems[0], currentItems[1]).map((item, i) => (
							<PaymentHistoryItem key={i} item={item} cardBg={cardBg} />
						))}
					</Flex>
					<Button
						w={"430px"}
						h={"60px"}
						bgColor={"transparent"}
						color={"#8897a8"}
						fontSize={"14px"}
						textDecoration={"underline"}
						_hover={{
							textDecoration: "none",
						}}
						borderRadius={"3px"}
						border={"1px solid #bbc5d0"}
						onClick={onShowMore}
					>
						Показать еще
					</Button>
				</Flex>
			) : (
				<Flex flexDir={"column"} h={"584px"} align={"center"} w={"100%"}>
					<Heading
						fontSize={"18px"}
						fontWeight={700}
						color={"#1f243a"}
						fontFamily={"Wix Madefor Display"}
						my={"20px"}
					>
						Список пожертвований
					</Heading>
					<Flex flexDir={"column"} justify={"flex-start"} h="77%">
						{payments.slice(currentItems[0], currentItems[1]).map((item, i) => (
							<PaymentHistoryItem key={i} item={item} cardBg={cardBg} />
						))}
					</Flex>
					<Button
						w={"290px"}
						h={"60px"}
						bgColor={"transparent"}
						color={"#8897a8"}
						fontSize={"14px"}
						textDecoration={"underline"}
						_hover={{
							textDecoration: "none",
						}}
						borderRadius={"3px"}
						border={"1px solid #bbc5d0"}
						onClick={onShowMore}
					>
						Показать еще
					</Button>
				</Flex>
			)}
		</>
	);
};

export default PaymentHistory;
