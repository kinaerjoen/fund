import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Link,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
// import tg from "../../../assets/telegram-footer.svg";
import vk from "../../../assets/vk-footer.svg";
import { NeedHelpModal } from "../modals/needHelpModal";

const Footer = () => {
	// const {
	// 	isOpen: isPaymentModalOpen,
	// 	onOpen: onPaymentModalOpen,
	// 	onClose: onPaymentModalClose,
	// } = useDisclosure();
	const {
		isOpen: isNeedHelpModalOpen,
		onOpen: onNeedHelpModalOpen,
		onClose: onNeedHelpModalClose,
	} = useDisclosure();

	return (
		<Flex
			color={"white"}
			w={"100%"}
			bgColor={"#1f243a"}
			height={document.documentElement.clientWidth > 767 ? "300px" : "100%"}
			display={"flex"}
			justifyContent={"center"}
			pt={document.documentElement.clientWidth > 767 ? "75px" : "35px"}
			position={"relative"}
			bottom={"0"}
		>
			{document.documentElement.clientWidth > 767 ? (
				<Flex
					w={"100%"}
					flexDir={"column"}
					alignItems={"center"}
					justify={"space-between"}
				>
					<Flex w={"1135px"} display={"flex"} justifyContent={"space-between"}>
						<Box maxW={"550px"}>
							<Text mb={"20px"} fontSize={"16px"} w={"375px"}>
								ул Долгоруковская, д 30, Москва
							</Text>
							<Box h={"50px"} display={"flex"} mt={"30px"}>
								<Button
									w={"200px"}
									h={"45px"}
									fontWeight={400}
									bgColor={"#E3F2FD"}
									color={"#1976D2"}
									fontSize={"16px"}
									borderRadius={"3px"}
									border={"1px solid #90CAF9"}
									onClick={() => {
										window.location = "mailto:info@mayak.help";
									}}
								>
									info@mayak.help
								</Button>
								<Link
									w={"48px"}
									h={"48px"}
									borderRadius={"50%"}
									cursor={"pointer"}
									href="https://vk.com/children_hospice"
									// border={"1px solid #90CAF9"}
									display={"flex"}
									justifyContent={"center"}
									alignItems={"center"}
									ml={"20px"}
								>
									<Image w={"24px"} src={vk} color="#1976D2" />
								</Link>
							</Box>
							<Text color={"#1976D2"} fontSize={"14px"} mt={2}>
								<a
									href="https://mayak.help/"
									target="_blank"
									rel="noopener noreferrer"
								>
									mayak.help
								</a>
							</Text>
						</Box>
						<Box
							display={"flex"}
							flexDir={"column"}
							fontSize={"20px"}
							maxW={"500px"}
						>
							<Text mb={"4px"} color={"#8897a8"} fontSize={"14px"}>
								с пн - пт с 09:00 до 18:00
							</Text>
							<Text color={"#1976D2"} fontSize={"14px"}>
								Телефон: 8 800 600-49-29
							</Text>
							<Flex>
								{/* <Button
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
									width={"170px"}
									height={"45px"}
									marginRight={"16px"}
									onClick={onPaymentModalOpen}
								>
									Хочу помочь
								</Button> */}
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
									width={"170px"}
									height={"45px"}
									onClick={onNeedHelpModalOpen}
									mt={'20px'}
								>
									Нужна помощь
								</Button>
							</Flex>
						</Box>
					</Flex>
					<Flex w={"100%"} h={"50px"} bgColor={"#161a2c"} justify={"center"}>
						<Flex w={"1135px"} align={"center"}>
							<Text color={"#303754"} fontSize={"14px"}>
								© {new Date().getFullYear()} Благотворительный фонд «Дом с маяком». Все права защищены.
							</Text>
						</Flex>
					</Flex>
				</Flex>
			) : (
				<Flex
					w={"100%"}
					flexDir={"column"}
					alignItems={"center"}
					justify={"space-between"}
				>
					<Flex flexDir={"column"} align={"center"}>
						<Flex
							flexDir={"column"}
							align={"center"}
							px={"25px"}
							pb={"20px"}
							height={"100%"}
						>
							<Text
								mb={"5px"}
								opacity={"0.5"}
								fontWeight={100}
								fontFamily={"Wix Madefor Display"}
								fontSize={"14px"}
							>
								с пн - пт с 09:00 до 18:00
							</Text>
							<Text color={"#1976D2"} fontSize={"14px"}>
								Телефон: 8 800 600-49-29
							</Text>
							<Flex mb={"50px"}>
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
									width={"140px"}
									height={"45px"}
									onClick={onNeedHelpModalOpen}
								>
									Нужна помощь
								</Button>
								{/* <Button
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
									width={"140px"}
									height={"45px"}
									onClick={onPaymentModalOpen}
									ml={"12px"}
								>
									Хочу помочь
								</Button> */}
							</Flex>
							<Text fontSize={"14px"} textAlign={"center"}>
								ул Долгоруковская, д 30, Москва
							</Text>
							<Box h={"50px"} display={"flex"} mt={"30px"}>
								<Button
									w={"170px"}
									h={"45px"}
									fontWeight={400}
									bgColor={"transparent"}
									color={"#8897a8"}
									fontSize={"14px"}
									_hover={{
										textDecoration: "underline",
									}}
									borderRadius={"3px"}
									border={"1px solid #8897a8"}
									onClick={() => {
										window.location = "mailto:info@mayak.help";
									}}
								>
									info@mayak.help
								</Button>
								<Link
									w={"48px"}
									h={"48px"}
									borderRadius={"50%"}
									cursor={"pointer"}
									href="https://vk.com/children_hospice"
									border={"1px solid #8897a8"}
									display={"flex"}
									justifyContent={"center"}
									alignItems={"center"}
									ml={"10px"}
								>
									<Image w={"24px"} src={vk} color="#4C70B4" />
								</Link>
							</Box>
						</Flex>
					</Flex>
					<Flex w={"100%"} bgColor={"#161a2c"} justify={"center"}>
						<Flex w={"1135px"} align={"center"} justify={"center"} py={"27px"}>
							<Text color={"#303754"} fontSize={"14px"} textAlign={"center"}>
								© {new Date().getFullYear()} Благотворительный фонд <br />
								«Дом с маяком». <br />
								<a href="policy" style={{ textDecoration: "underline" }}>
									Политика конфиденциальности
								</a>
							</Text>
						</Flex>
					</Flex>
				</Flex>
			)}
			{/* <PaymentModal isOpen={isPaymentModalOpen} onClose={onPaymentModalClose} /> */}
			<NeedHelpModal
				isOpen={isNeedHelpModalOpen}
				onClose={onNeedHelpModalClose}
			/>
		</Flex>
	);
};

export default Footer;
