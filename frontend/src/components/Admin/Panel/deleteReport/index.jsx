import { DeleteIcon } from "@chakra-ui/icons";
import {
	Box,
	Card,
	CardBody,
	Flex,
	Heading,
	Icon,
	Image,
	Text,
	Button,
	useToast,
} from "@chakra-ui/react";
import React from "react";
import { ReactComponent as play } from "../../../../assets/play.svg";
import { getMediaUrl } from "../../../../helpers/getMediaUrl";

const imageTypes = [
	"jpg",
	"png",
	"gif",
	"webp",
	"cr2",
	"tif",
	"bmp",
	"jxr",
	"psd",
	"ico",
];

const videoTypes = [
	"mp4",
	"m4v",
	"mkv",
	"webm",
	"mov",
	"avi",
	"wmv",
	"flv",
	"mpg",
];

export const parseDate = (date) => {
	const dateItem = new Date(date);
	const yyyy = dateItem.getFullYear();
	let mm = dateItem.getMonth() + 1;
	let dd = dateItem.getDate();

	if (dd < 10) dd = "0" + dd;
	if (mm < 10) mm = "0" + mm;

	return dd + "." + mm + "." + yyyy;
};

export const DeleteReport = ({ id, title, content, medias, deleteReport }) => {
	const toast = useToast();

	const handleDelete = async () => {
		try {
			await deleteReport(id);
			toast({
				title: "Отчет удален",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		} catch (err) {
			console.error(err);
			toast({
				title: "Ошибка при удалении отчета",
				description: "Пожалуйста, попробуйте еще раз",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	return (
		<Card
			w="360px"
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
			onClick={handleDelete}
			cursor="pointer"
			_hover={{
				bgColor: "#bf3132",
				transition: "all 0.3s ease",
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
							cursor={"pointer"}
							css={`
								text-overflow: ellipsis;
								word-wrap: keep-all;
								overflow: hidden;
								max-height: 4.5em;
								line-height: 1.5em;
								display: -webkit-box;
								-webkit-line-clamp: 3;
								-webkit-box-orient: vertical;
							`}
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
							cursor={"pointer"}
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
							{content}
						</Text>
						{medias && medias.length > 0 && (
							<Flex mt={"10px"} flexWrap={"wrap"}>
								{medias.map((media, index) => {
									const fileType = media.split(".").pop().toLowerCase();
									if (imageTypes.includes(fileType)) {
										return (
											<Image
												key={index}
												src={getMediaUrl(media)}
												alt={`Media ${index + 1}`}
												boxSize="50px"
												objectFit="cover"
												m={1}
											/>
										);
									} else if (videoTypes.includes(fileType)) {
										return (
											<Box
												key={index}
												position="relative"
												boxSize="50px"
												m={1}
												bgColor="black"
												display="flex"
												alignItems="center"
												justifyContent="center"
											>
												<Icon as={play} boxSize="30px" color="white" />
											</Box>
										);
									}
									return null;
								})}
							</Flex>
						)}
					</Flex>
				</Flex>
			</CardBody>
		</Card>
	);
};

export default DeleteReport;
