import {
	Card,
	CardBody,
	Flex,
	Heading,
	Image,
	Link,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import blueBg from "../../../assets/blue.png";
import { getMediaUrl } from "../../../helpers/getMediaUrl";
import "./index.css";

const parseDate = (date) => {
	const dateItem = new Date(date);
	const yyyy = dateItem.getFullYear();
	let mm = dateItem.getMonth() + 1;
	let dd = dateItem.getDate();

	if (dd < 10) dd = "0" + dd;
	if (mm < 10) mm = "0" + mm;

	return dd + "." + mm + "." + yyyy;
};

const NewCardBig = ({ title, description, image, createdAt }) => {
	const [hover, setHover] = useState(false);

	return (
		<Card
			w="740px"
			h="420px"
			bgColor={"#1f243a"}
			borderRadius={"3px"}
			borderBottomRadius={"3px"}
			boxShadow={""}
			padding={"25px"}
			flexDir={"row"}
			display={"flex"}
			alignItems={"flex-end"}
			pos={"relative"}
			_before={{
				zIndex: 0,
				position: "absolute",
				left: 0,
				top: 0,
				opacity: 0.4,
				width: "740px",
				height: "420px",
				content: `""`,
				backgroundImage: `url(${getMediaUrl(image)})`,
				backgroundRepeat: "no-repeat",
				bgSize: "cover",
				bgPos: "center",
				borderRadius: "3px",
			}}
		>
			<Flex
				pos={"absolute"}
				left={25}
				top={25}
				bgColor={"#33438e"}
				borderRadius={"3px"}
				w={"72px"}
				h={"19px"}
				justify={"center"}
				align={"center"}
				fontSize={"12px"}
				color={"white"}
				cursor={"default"}
			>
				{parseDate(createdAt)}
			</Flex>
			<Image
				position={"absolute"}
				left={0}
				bottom={0}
				zIndex={1}
				w={"740px"}
				height={"420px"}
				src={blueBg}
			/>
			<CardBody p={0} zIndex={2} display={"flex"} flexDir={"column"} w={"100%"}>
				<Flex flexDir={"column"} h={"100%"} justifyContent={"space-between"}>
					<Flex flexDir={"column"}>
						<Heading
							fontFamily={"Oswald"}
							w={"100%"}
							color="#fff"
							fontSize={"20px"}
							fontWeight={"500"}
							textTransform={"uppercase"}
							cursor={"default"}
							css={
								hover
									? `
							text-overflow: ellipsis;
							word-wrap: keep-all;
							overflow: hidden;
							max-height: 7.5em;
							line-height: 1.5em;
							display: -webkit-box;
							-webkit-line-clamp: 5;
							-webkit-box-orient: vertical;
						`
									: `
								text-overflow: ellipsis;
								word-wrap: keep-all;
								overflow: hidden;
								max-height: 4.5em;
								line-height: 1.5em;
								display: -webkit-box;
								-webkit-line-clamp: 3;
								-webkit-box-orient: vertical;
							`
							}
							transition={"all 1s ease-in-out"}
						>
							{title}
						</Heading>
					</Flex>
					<Flex flexDir={"column"}>
						<Text
							mt={"10px"}
							fontSize={"14px"}
							color="#fff"
							textAlign={"left"}
							cursor={"default"}
							css={
								hover
									? `
							text-overflow: ellipsis;
							word-wrap: break-word;
							overflow: hidden;
							max-height: 12em;
							line-height: 1.2em;
							display: -webkit-box;
							-webkit-line-clamp: 10;
							-webkit-box-orient: vertical;
						`
									: `
								text-overflow: ellipsis;
								word-wrap: break-word;
								overflow: hidden;
								max-height: 3.6em;
								line-height: 1.2em;
								display: -webkit-box;
								-webkit-line-clamp: 3;
								-webkit-box-orient: vertical;
							`
							}
							transition={"all .7s ease-in-out"}
						>
							{description}
						</Text>
						<Link
							textDecoration={"underline"}
							color={"#bf3132"}
							mt={"12px"}
							_hover={{
								textDecoration: "none",
							}}
							cursor={"default"}
							onMouseEnter={() => setHover(true)}
							onMouseLeave={() => setHover(false)}
						>
							Читать далее...
						</Link>
					</Flex>
				</Flex>
			</CardBody>
		</Card>
	);
};

export default NewCardBig;
