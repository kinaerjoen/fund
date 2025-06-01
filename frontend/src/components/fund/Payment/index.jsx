import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Payment from "./payment";
import PaymentHistory from "./paymentHistory";

const mockedPayments = [
	{
		name: "Егор",
		email: "egor0@gmail.ru",
		date: "2023-08-14T17:46:39.050Z",
		amount: 500,
	},
	{
		name: "Дмитрий",
		email: "dgor1@mail.ru",
		date: "2023-08-13T13:23:39.050Z",
		amount: 350,
	},
	{
		name: "Иван",
		email: "jfndn2@gmail.com",
		date: "2023-08-13T10:42:39.050Z",
		amount: 1000,
	},
	{
		name: "Алексей",
		email: "afndnv@gmail.com",
		date: "2023-08-12T13:55:39.050Z",
		amount: 1500,
	},
	{
		name: "Светлана",
		email: "pfndnf@gmail.com",
		date: "2023-08-12T09:58:39.050Z",
		amount: 2000,
	},
	{
		name: "Георгий",
		email: "ggfndn4f@gmail.com",
		date: "2023-08-11T18:15:39.050Z",
		amount: 900,
	},
	{
		name: "Валерия",
		email: "bfndn6@gmail.com",
		date: "2023-08-11T16:12:39.050Z",
		amount: 10000,
	},
	{
		name: "Даниил",
		email: "ddndnx@gmail.com",
		date: "2023-08-11T14:44:39.050Z",
		amount: 2000,
	},
	{
		name: "Мария",
		email: "mfndns@gmail.com",
		date: "2023-08-11T12:52:39.050Z",
		amount: 1700,
	},
];

const PaymentWithHistory = ({ isHeader, cardBg, background, ml = false }) => {
	return (
		<>
			{document.documentElement.clientWidth > 767 ? (
				<Flex flexDir={"column"} w={"100%"}>
					{isHeader && (
						<Box
							marginLeft={"8px"}
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							css={`
								width: 205px;
								height: 45px;
								transform: skew(160deg);
								background: #bf3132;
								border-radius: 5px;
							`}
							mb={"42px"}
						>
							<Text
								fontWeight={500}
								color={"white"}
								fontSize={"30px"}
								fontFamily={"Oswald"}
								textTransform={"uppercase"}
								css={"transform: skew(20deg);"}
							>
								Как помочь
							</Text>
						</Box>
					)}
					<Flex
						w={"100%"}
						justify={"space-between"}
						align={"center"}
						flexWrap={"wrap"}
					>
						<Payment padding={"40px"} background={background} />
						<PaymentHistory payments={mockedPayments} cardBg={cardBg} ml={ml} />
					</Flex>
				</Flex>
			) : (
				<Flex flexDir={"column"} w={"100%"}>
					{isHeader && (
						<Box
							marginLeft={"15px"}
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							css={`
								width: 140px;
								height: 30px;
								transform: skew(160deg);
								background: #bf3132;
								border-radius: 5px;
							`}
							mb={"22px"}
						>
							<Text
								fontWeight={500}
								color={"white"}
								fontSize={"20px"}
								fontFamily={"Oswald"}
								textTransform={"uppercase"}
								css={"transform: skew(20deg);"}
							>
								Как помочь
							</Text>
						</Box>
					)}
					<Flex
						w={"100%"}
						justify={"space-between"}
						align={"center"}
						flexWrap={"wrap"}
					>
						<Payment padding={"40px"} background={background} />
						<PaymentHistory payments={mockedPayments} cardBg={cardBg} ml={ml} />
					</Flex>
				</Flex>
			)}
		</>
	);
};

export default PaymentWithHistory;
