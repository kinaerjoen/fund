import { DeleteIcon } from "@chakra-ui/icons";
import {
	Box,
	Card,
	CardBody,
	Flex,
	Heading,
	Image,
	Text,
	useToast,
} from "@chakra-ui/react";
import React from "react";
import blueBg from "../../../../assets/blue.png";
import { getMediaUrl } from "../../../../helpers/getMediaUrl";

export const DeleteParticipant = ({
	id,
	image,
	position,
	name,
	deleteParticipant,
}) => {
	const toast = useToast();

	const handleDelete = async () => {
		try {
			await deleteParticipant(id);
			toast({
				title: "Участник удален",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		} catch (err) {
			console.error(err);
			toast({
				title: "Ошибка при удалении участника",
				description: "Пожалуйста, попробуйте еще раз",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	return (
		<Card
			w="262px"
			h="340px"
			borderRadius={"3px"}
			borderBottomRadius={"3px"}
			boxShadow={""}
			ml={"4px"}
			mt={"10px"}
			padding={"25px"}
			flexDir={"row"}
			display={"flex"}
			alignItems={"flex-end"}
			pos={"relative"}
			onClick={handleDelete}
			cursor="pointer"
			_hover={{
				transform: "scale(1.02)",
				transition: "all 0.2s ease-in-out"
			}}
			_before={{
				zIndex: 0,
				position: "absolute",
				left: 0,
				top: 0,
				width: "262px",
				height: "340px",
				content: `""`,
				backgroundImage: `url(${getMediaUrl(image)})`,
				backgroundRepeat: "no-repeat",
				bgSize: "cover",
				bgPos: "center",
				borderRadius: "3px",
			}}
		>
			<Box
				position={"absolute"}
				w={"100%"}
				h={"100%"}
				top={0}
				left={0}
				zIndex={10}
				_hover={{
					display: "block",
					transition: "all 300ms ease",
					bgColor: "red",
					opacity: 0.75,
				}}
				borderRadius={"5px"}
				color={"black"}
			>
				<Box
					w={"100%"}
					h={"100%"}
					opacity={0}
					_hover={{
						transition: "all 300ms ease",
						opacity: 1,
					}}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					cursor={"pointer"}
					color={"black"}
				>
					<DeleteIcon fontSize={150} color={"white"} zIndex={10000} />
				</Box>
			</Box>
			<Image
				position={"absolute"}
				left={0}
				bottom={0}
				zIndex={1}
				w={"262px"}
				height={"340px"}
				src={blueBg}
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
								max-height: 3em;
								line-height: 1.5em;
								display: -webkit-box;
								-webkit-line-clamp: 2;
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
								max-height: 3.6em;
								line-height: 1.2em;
								display: -webkit-box;
								-webkit-line-clamp: 3;
								-webkit-box-orient: vertical;
							`}
						>
							{position}
						</Text>
					</Flex>
				</Flex>
			</CardBody>
		</Card>
	);
};
