import {
	Flex,
	Heading,
	Image,
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { getMediaUrl } from "../../../helpers/getMediaUrl";

export const ParticipantModal = ({
	isOpen,
	onClose,
	title,
	content,
	position,
	image,
}) => {
	return (
		<>
			{document.documentElement.clientWidth > 767 ? (
				<>
					<Modal
						isOpen={isOpen}
						onClose={onClose}
						onEsc={onClose}
						isCentered
						size={""}
					>
						<ModalOverlay w={"100%"} h={"100%"} />
						<ModalContent
							padding={"0"}
							borderRadius={"3px"}
							w={"1000px"}
							h={"800px"}
						>
							<ModalHeader
								display={"flex"}
								justifyContent={"flex-start"}
								alignItems={"center"}
								fontFamily={"Oswald"}
								textAlign={"center"}
								fontSize={"30px"}
								pt={"60px"}
								pl={"60px"}
								pb={"30px"}
								bgColor={"#f8f8f8"}
								borderTopRadius={"3px"}
							>
								<Image
									w={"175px"}
									h={"215px"}
									objectFit={"cover"}
									src={getMediaUrl(image)}
								/>
								<Flex flexDir={"column"} align={"flex-start"} ml={"40px"}>
									<Heading fontFamily={"Oswald"} fontSize={"30px"} mb={"18px"}>
										{title}
									</Heading>
									<Text textAlign={"left"} fontSize={"16px"} fontWeight={400}>
										{position}
									</Text>
								</Flex>
							</ModalHeader>
							<Flex
								w={"100%"}
								justify={"center"}
								mb={"60px"}
								overflowY="auto"
								css={{
									"&::-webkit-scrollbar": {
										width: "4px",
									},
									"&::-webkit-scrollbar-track": {
										width: "4px",
									},
									"&::-webkit-scrollbar-thumb": {
										borderRadius: "3px",
									},
								}}
								p={"40px 40px 0 82px"}
							>
								<Text
									overflow={"auto"}
									css={{
										"&::-webkit-scrollbar": {
											background: "#e6e4e4",
											width: "4px",
										},
										"&::-webkit-scrollbar-track": {
											width: "4px",
										},
										"&::-webkit-scrollbar-thumb": {
											background: "#b0b2bd",
											borderRadius: "3px",
										},
									}}
									whiteSpace={"pre-wrap"}
									pr={"20px"}
								>
									{content}
								</Text>
							</Flex>
							<ModalCloseButton />
						</ModalContent>
					</Modal>
				</>
			) : (
				<>
					<Modal
						isOpen={isOpen}
						onClose={onClose}
						onEsc={onClose}
						isCentered
						size={""}
					>
						<ModalOverlay w={"100%"} h={"100%"} />
						<ModalContent
							padding={"0"}
							borderRadius={"3px"}
							w={"330px"}
							maxH={"800px"}
						>
							<ModalHeader
								display={"flex"}
								flexDir={"column"}
								justifyContent={"center"}
								alignItems={"center"}
								fontFamily={"Oswald"}
								textAlign={"center"}
								fontSize={"30px"}
								bgColor={"#f8f8f8"}
								pb={"30px"}
							>
								<Image
									w={"175px"}
									h={"215px"}
									objectFit={"cover"}
									src={getMediaUrl(image)}
								/>
								<Flex flexDir={"column"} align={"center"} mt={"20px"}>
									<Heading
										textAlign={"center"}
										fontFamily={"Oswald"}
										fontSize={"30px"}
										mb={"10px"}
									>
										{title}
									</Heading>
									<Text textAlign={"center"} fontSize={"16px"} fontWeight={400}>
										{position}
									</Text>
								</Flex>
							</ModalHeader>
							<Flex
								w={"100%"}
								justify={"center"}
								mb={"30px"}
								overflowY="auto"
								css={{
									"&::-webkit-scrollbar": {
										width: "4px",
									},
									"&::-webkit-scrollbar-track": {
										width: "4px",
									},
									"&::-webkit-scrollbar-thumb": {
										borderRadius: "3px",
									},
								}}
								p={"20px"}
								pl={"30px"}
							>
								<Text
									overflow={"auto"}
									css={{
										"&::-webkit-scrollbar": {
											background: "#e6e4e4",
											width: "4px",
										},
										"&::-webkit-scrollbar-track": {
											width: "4px",
										},
										"&::-webkit-scrollbar-thumb": {
											background: "#b0b2bd",
											borderRadius: "3px",
										},
									}}
									whiteSpace={"pre-wrap"}
									pr={"10px"}
								>
									{content}
								</Text>
							</Flex>
							<ModalCloseButton />
						</ModalContent>
					</Modal>
				</>
			)}
		</>
	);
};
