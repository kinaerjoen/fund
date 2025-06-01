import { Flex, Heading, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import PaymentWithHistory from "../Payment";
import { NeedHelpModal } from "../modals/needHelpModal";

const Help = () => {
	const {
		isOpen: isNeedHelpModalOpen,
		onOpen: onNeedHelpModalOpen,
		onClose: onNeedHelpModalClose,
	} = useDisclosure();

	return (
		<>
			{document.documentElement.clientWidth > 767 ? (
				<Flex flexDir={"column"} align={"center"} width={"100%"} minH={"100vh"}>
					<Flex
						bgColor={"#f2f2f2"}
						h={"330px"}
						w={"100%"}
						justify={"center"}
						align={"end"}
						pb={"75px"}
						mb={"75px"}
					>
						<Heading fontSize={"50px"} color={"#10131f"} fontFamily={"Oswald"}>
							Как помочь
						</Heading>
					</Flex>
					<Flex w={"1133px"} pb={"75px"} flexDir={"column"} align={"center"}>
						<Button
							backgroundColor="#33438e"
							borderRadius={"3px"}
							color={"white"}
							fontWeight={400}
							_hover={{
								bgColor: "#263475",
							}}
							_active={{
								bgColor: "#1d2a67",
							}}
							width={"250px"}
							height={"45px"}
							mb={"50px"}
							onClick={onNeedHelpModalOpen}
						>
							Нужна помощь
						</Button>
						<Flex justify={"center"}>
							<PaymentWithHistory
								cardBg={"#f8f8f8"}
								background={"#f2f5f8"}
								ml={true}
							/>
						</Flex>
					</Flex>
					<NeedHelpModal isOpen={isNeedHelpModalOpen} onClose={onNeedHelpModalClose} />
				</Flex>
			) : (
				<Flex flexDir={"column"} align={"center"} width={"100%"} minH={"100vh"}>
					<Flex
						bgColor={"#f2f2f2"}
						h={"200px"}
						w={"100%"}
						justify={"center"}
						align={"end"}
						pb={"35px"}
					>
						<Heading fontSize={"30px"} color={"#10131f"} fontFamily={"Oswald"}>
							Как помочь
						</Heading>
					</Flex>
					<Flex pb={"35px"} flexDir={"column"} align={"center"}>
						<Button
							backgroundColor="#33438e"
							borderRadius={"3px"}
							color={"white"}
							fontWeight={400}
							_hover={{
								bgColor: "#263475",
							}}
							_active={{
								bgColor: "#1d2a67",
							}}
							width={"250px"}
							height={"45px"}
							mb={"30px"}
							onClick={onNeedHelpModalOpen}
						>
							Нужна помощь
						</Button>
						<Flex justify={"center"}>
							<PaymentWithHistory
								cardBg={"#f8f8f8"}
								background={"#f2f5f8"}
								ml={true}
							/>
						</Flex>
					</Flex>
					<NeedHelpModal isOpen={isNeedHelpModalOpen} onClose={onNeedHelpModalClose} />
				</Flex>
			)}
		</>
	);
};

export default Help;
