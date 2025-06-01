import {
	Box,
	Card,
	CardBody,
	Flex,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { getMediaUrl } from "../../../helpers/getMediaUrl";

const ProjectCard = ({
	title,
	content,
	image,
	currentAmount,
	targetAmount,
	onPaymentModalOpen,
}) => {
	return (
		<Card
			w="360px"
			h="513px"
			bgColor={"#fff"}
			borderRadius={0}
			borderBottomRadius={"3px"}
		>
			<CardBody w={"360px"} h={"274px"} p={0}>
				<Box display={"flex"} justifyContent={"center"}>
					<Image
						w={"100%"}
						h={"274px"}
						objectFit={"cover"}
						src={getMediaUrl(image)}
					/>
				</Box>
			</CardBody>
			<CardBody
				display={"flex"}
				flexDir={"column"}
				h={"100%"}
				justifyContent={"space-between"}
				borderRadius={"3px"}
				p={"33px"}
				w={"360px"}
				paddingTop={"30px"}
				paddingBottom={"32px"}
			>
				<Flex flexDir={"column"}>
					<Heading
						fontFamily={"Wix Madefor Display"}
						w={"100%"}
						color="#1f243a"
						fontSize={"18px"}
						fontWeight={"700"}
						css={`
							text-overflow: ellipsis;
							word-wrap: keep-all;
							overflow: hidden;
							max-height: 1.5em;
							line-height: 1.5em;
							display: -webkit-box;
							-webkit-line-clamp: 1;
							-webkit-box-orient: vertical;
						`}
					>
						{title}
					</Heading>
					<Text
						mt={"10px"}
						height={"38.38px"}
						color="#1f243a"
						textAlign={"left"}
						css={`
							text-overflow: ellipsis;
							word-wrap: break-word;
							overflow: hidden;
							max-height: 4.8em;
							line-height: 1.2em;
							display: -webkit-box;
							-webkit-line-clamp: 4;
							-webkit-box-orient: vertical;
						`}
					>
						{content}
					</Text>
				</Flex>

				<Flex flexDir={"column"} mt={"16px"}>
					<Flex justify={"space-between"}>
						<Text fontSize={"14px"} color={"#1f243a"}>
							{targetAmount - currentAmount > 0
								? "Осталось собрать"
								: "Собрали"}
						</Text>
						<Text fontSize={"14px"} fontWeight={"700"} color={"#bf3132"}>
							{(targetAmount - currentAmount > 0
								? targetAmount - currentAmount
								: currentAmount
							)
								.toString()
								.split("")
								.reverse()
								.join("")
								.replace(/[^\dA-Z]/g, "")
								.replace(/(.{3})/g, "$1 ")
								.trim()
								.split("")
								.reverse()
								.join("")}
						</Text>
					</Flex>
					<Box
						mt={"5px"}
						borderRadius={"3px"}
						h={"5px"}
						w={"100%"}
						bgColor={"#dcdcdc"}
					>
						<Box
							borderRadius={"3px"}
							h={"5px"}
							w={`${
								(currentAmount / targetAmount) * 100 > 100
									? 100
									: (currentAmount / targetAmount) * 100
							}%`}
							bgColor={"#bf3132"}
						/>
					</Box>
				</Flex>

				{/* {targetAmount - currentAmount > 0 ? (
					<Button
						backgroundColor="#bf3132"
						borderRadius={"3px"}
						color={"white"}
						fontWeight={400}
						_hover={{
							bgColor: "#771e2e",
						}}
						_active={{
							bgColor: "#6d1424",
						}}
						width={"100%"}
						height={"45px"}
						mt={"15px"}
						onClick={onPaymentModalOpen}
					>
						Хочу помочь
					</Button>
				) : (
					<Button
						backgroundColor="#dddddd"
						borderRadius={"3px"}
						color={"#666666"}
						fontWeight={400}
						_hover={""}
						_active={""}
						width={"100%"}
						height={"45px"}
						cursor={"default"}
						mt={"15px"}
					>
						Сбор закрыт
					</Button>
				)} */}
			</CardBody>
		</Card>
	);
};

export default ProjectCard;
