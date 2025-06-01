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
import tg from "../../../assets/telegram-footer.svg";
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
							<Text mb={"40px"} fontSize={"16px"} w={"375px"}>
								141702, Московская область, г.о. Долгопрудный, ш. Лихачевское,
								д. 20 к. 1, кв. 80
							</Text>
							<Box h={"50px"} display={"flex"} mt={"30px"}>
								<Button
									w={"200px"}
									h={"45px"}
									fontWeight={400}
									bgColor={"transparent"}
									color={"#8897a8"}
									fontSize={"16px"}
									_hover={{
										textDecoration: "underline",
									}}
									borderRadius={"3px"}
									border={"1px solid #8897a8"}
									onClick={() => {}}
								>
									pashayev_fund@mail.ru
								</Button>
								<Link
									w={"48px"}
									h={"48px"}
									borderRadius={"50%"}
									cursor={"pointer"}
									href="https://vk.com/id810628743"
									border={"1px solid #8897a8"}
									display={"flex"}
									justifyContent={"center"}
									alignItems={"center"}
									ml={"20px"}
								>
									<Image w={"24px"} src={vk} color="#4C70B4" />
								</Link>
								<Link
									href="https://t.me/elmanpashaev"
									w={"48px"}
									h={"48px"}
									borderRadius={"50%"}
									cursor={"pointer"}
									border={"1px solid #8897a8"}
									display={"flex"}
									justifyContent={"center"}
									alignItems={"center"}
									ml={"20px"}
								>
									<Image w={"24px"} src={tg} color="#4C70B4" />
								</Link>
							</Box>
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
							<Heading fontSize={"30px"} mb={"30px"}>
								<a href="tel: +7 (915) 233-33-38">+7 (915) 233-33-38</a>
							</Heading>
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
								>
									Нужна помощь
								</Button>
							</Flex>
						</Box>
					</Flex>
					<Flex w={"100%"} h={"50px"} bgColor={"#161a2c"} justify={"center"}>
						<Flex w={"1135px"} align={"center"}>
							<Text color={"#303754"} fontSize={"14px"}>
								© {new Date().getFullYear()} «Благотворительный фонд «Пашаев
								Фонд».{" "}
								<a href="policy" style={{ textDecoration: "underline" }}>
									Политика конфиденциальности
								</a>
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
							<Heading
								fontSize={"30px"}
								mb={"30px"}
								fontFamily={"Wix Madefor Display"}
							>
								<a href="tel: +7 (915) 233-33-38">+7 (915) 233-33-38</a>
							</Heading>
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
								141702, Московская область, <br /> г.о. Долгопрудный, ш.
								Лихачевское, <br />
								д. 20 к. 1, кв. 80
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
									onClick={() => {}}
								>
									pashayev_fund@mail.ru
								</Button>
								<Link
									w={"48px"}
									h={"48px"}
									borderRadius={"50%"}
									cursor={"pointer"}
									href="https://vk.com/id810628743"
									border={"1px solid #8897a8"}
									display={"flex"}
									justifyContent={"center"}
									alignItems={"center"}
									ml={"10px"}
								>
									<Image w={"24px"} src={vk} color="#4C70B4" />
								</Link>
								<Link
									href="https://t.me/elmanpashaev"
									w={"48px"}
									h={"48px"}
									borderRadius={"50%"}
									cursor={"pointer"}
									border={"1px solid #8897a8"}
									display={"flex"}
									justifyContent={"center"}
									alignItems={"center"}
									ml={"10px"}
								>
									<Image w={"24px"} src={tg} color="#4C70B4" />
								</Link>
							</Box>
						</Flex>
					</Flex>
					<Flex w={"100%"} bgColor={"#161a2c"} justify={"center"}>
						<Flex w={"1135px"} align={"center"} justify={"center"} py={"27px"}>
							<Text color={"#303754"} fontSize={"14px"} textAlign={"center"}>
								© {new Date().getFullYear()} «Благотворительный фонд <br />
								«Пашаев Фонд». <br />
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
