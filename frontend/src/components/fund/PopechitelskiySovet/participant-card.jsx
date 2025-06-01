import {
	Card,
	CardBody,
	Flex,
	Heading,
	Image,
	Link,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import blueBg from "../../../assets/blue.png";
import femalePlaceholder from "../../../assets/female-placeholder.jpg";
import { getMediaUrl } from "../../../helpers/getMediaUrl";
import { ParticipantModal } from "../modals/participantModal";

const ParticipantCard = ({ name, image, position, description }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Card
			w="262px"
			h="482px"
			borderRadius={"3px"}
			borderBottomRadius={"3px"}
			boxShadow={""}
			padding={"25px"}
			flexDir={"row"}
			display={"flex"}
			alignItems={"flex-end"}
			pos={"relative"}
			bgColor={"#1f243a"}
		>
			<Image
				position={"absolute"}
				left={0}
				top={0}
				zIndex={1}
				w={"262px"}
				height={"340px"}
				src={image ? getMediaUrl(image) : femalePlaceholder}
				objectFit="cover"
				borderRadius="3px"
			/>
			<CardBody
				p={0}
				zIndex={2}
				display={"flex"}
				flexDir={"column"}
				h={"min-content"}
				w={"100%"}
			>
				<Flex flexDir={"column"} h={"100%"} justifyContent={"space-between"}>
					<Flex flexDir={"column"}>
						<Heading
							fontFamily={"Oswald"}
							w={"100%"}
							color="#fff"
							fontSize={"16px"}
							fontWeight={"500"}
							textTransform={"uppercase"}
							cursor={"default"}
							css={`
								text-overflow: ellipsis;
								word-wrap: keep-all;
								overflow: hidden;
								max-height: 6em;
								line-height: 1.5em;
								display: -webkit-box;
								-webkit-line-clamp: 4;
								-webkit-box-orient: vertical;
							`}
						>
							{name}
						</Heading>
					</Flex>
					<Flex flexDir={"column"}>
						<Text
							mt={"10px"}
							fontSize={"14px"}
							color="#fff"
							textAlign={"left"}
							cursor={"default"}
							css={`
								text-overflow: ellipsis;
								word-wrap: break-word;
								overflow: hidden;
								max-height: 6em;
								line-height: 1.2em;
								display: -webkit-box;
								-webkit-line-clamp: 5;
								-webkit-box-orient: vertical;
							`}
						>
							{position}
						</Text>
					</Flex>
					<Flex flexDir={"column"}>
						<Link
							textDecoration={"underline"}
							color={"#bf3132"}
							mt={"12px"}
							_hover={{
								textDecoration: "none",
							}}
							cursor={"pointer"}
							onClick={onOpen}
						>
							Читать биографию
						</Link>
					</Flex>
				</Flex>
			</CardBody>
			<ParticipantModal
				title={name}
				content={description}
				position={position}
				image={image}
				isOpen={isOpen}
				onClose={onClose}
			/>
		</Card>
	);
};

export default ParticipantCard;
