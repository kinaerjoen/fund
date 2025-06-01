import { DeleteIcon } from "@chakra-ui/icons";
import {
	Box,
	Card,
	CardBody,
	Flex,
	Icon,
	useToast,
} from "@chakra-ui/react";
import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { getMediaUrl } from "../../../../helpers/getMediaUrl";

export const DeletePdf = ({ id, pdf, deletePdf }) => {
	const toast = useToast();

	const handleDelete = async () => {
		try {
			await deletePdf(id);
			toast({
				title: "PDF удален",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		} catch (err) {
			console.error(err);
			toast({
				title: "Ошибка при удалении PDF",
				description: "Пожалуйста, попробуйте еще раз",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	return (
		<Card
			w="200px"
			h="200px"
			bgColor={"#1f243a"}
			borderRadius={"3px"}
			borderBottomRadius={"3px"}
			boxShadow={""}
			padding={"25px"}
			flexDir={"row"}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
			pos={"relative"}
			onClick={handleDelete}
			cursor="pointer"
			_hover={{
				bgColor: "#bf3132",
				transition: "all 0.3s ease",
			}}
			m={2}
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
				<Flex justifyContent="center" alignItems="center">
					<a href={getMediaUrl(pdf)} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
						<Icon as={FaFilePdf} boxSize="100px" color="white" />
					</a>
				</Flex>
			</CardBody>
		</Card>
	);
};
