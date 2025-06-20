import { Flex, Heading, Icon, Link, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { ReactComponent as message } from "../../../assets/message.svg";
import { ReactComponent as phone } from "../../../assets/phone.svg";
import { ReactComponent as tg } from "../../../assets/telegram.svg";
import { ReactComponent as vk } from "../../../assets/vk.svg";
import PdfItem from "./pdf-item";

const PreFooter = ({ pdfs }) => {
	const [vkHover, setVkHover] = useState(false);
	const [tgHover, setTgHover] = useState(false);

	return (
		<>
			{document.documentElement.clientWidth > 767 ? (
				<Flex
					w={"100%"}
					flexDir={"column"}
					align={"center"}
					justify={"space-between"}
				>
					<Flex w={"1135px"} justify={"space-between"} pt={"77px"} pb={"54px"}>
						<Flex flexDir={"column"}>
							<Heading
								fontFamily={"Oswald"}
								fontSize={"30px"}
								color={"#2D415A"}
								fontWeight={600}
								textTransform={"uppercase"}
								mb={"20px"}
							>
								Наш адрес
							</Heading>
							<Text
								fontSize={"18px"}
								color={"#2D415A"}
								lineHeight={"27px"}
								w={"420px"}
								mb={"20px"}
							>
								ул Долгоруковская, д 30, Москва
							</Text>
							{/* <Button bgColor={'#E3F2FD'} color={'#1976D2'} fontSize={'18px'} fontWeight={700} onClick={() => {window.location='mailto:info@mayak.help'}}>
								info@mayak.help
							</Button> */}
							{/* <Text color={'#1976D2'} fontSize={'16px'} fontWeight={700}>
								8 800 600-49-29
							</Text>
							<Text color={'#1976D2'} fontSize={'16px'} fontWeight={700}  mt={2} mb={'80px'}>
								<a href="https://mayak.help/" target="_blank" rel="noopener noreferrer">mayak.help</a>
							</Text> */}
							<Flex mb={"30px"}>
								<Flex
									align={"center"}
									textDecoration="underline"
									_hover={{
										textDecoration: "none",
									}}
								>
									<Icon w={"25px"} h={"25px"} as={phone} fill={"#1f243a"} />
									<a
										href="tel: 8 800 600-49-29"
										style={{
											color: "#bf3132",
											fontSize: "18px",
											fontWeight: 700,
											marginLeft: "20px",
										}}
									>
										8 800 600-49-29
									</a>
								</Flex>
								<Flex
									align={"center"}
									ml={"100px"}
									textDecoration="underline"
									_hover={{
										textDecoration: "none",
									}}
								>
									<Icon w={"25px"} h={"25px"} as={message} fill={"#1f243a"} />
									<a
										href="mailto:info@mayak.help"
										style={{
											color: "#bf3132",
											fontSize: "18px",
											fontWeight: 700,
											marginLeft: "20px",
										}}
									>
										info@mayak.help
									</a>
								</Flex>
							</Flex>
							<Flex
								w={"650px"}
								h={"100px"}
								bgColor={"#f8f8f8"}
								borderRadius={"3px"}
								p={"29px"}
								mb={"20px"}
							>
								<Text
									w={"460px"}
									color={"#666666"}
									fontSize={"14px"}
									lineHeight={"23px"}
								>
									Сотрудники нашего фонда рады помочь и проконсультировать Вас с
									понедельника по пятницу с 09:00 до 18:00.
								</Text>
							</Flex>
							<Flex>
								<Link
									href="https://vk.com/children_hospice"
									w={"60px"}
									h={"60px"}
									borderRadius={"50%"}
									cursor={"pointer"}
									display={"flex"}
									justifyContent={"center"}
									alignItems={"center"}
									bgColor={"#f8f8f8"}
									_hover={{
										bgColor: "#1f243a",
									}}
									onMouseEnter={() => setVkHover(true)}
									onMouseLeave={() => setVkHover(false)}
								>
									<Icon
										w={"25px"}
										h={"25px"}
										as={vk}
										fill={vkHover ? "#f8f8f8" : "#1f243a"}
										cursor={"pointer"}
									/>
								</Link>
								{/* <Link
									href="https://mayak.help/"
									w={"60px"}
									h={"60px"}
									borderRadius={"50%"}
									cursor={"pointer"}
									display={"flex"}
									justifyContent={"center"}
									alignItems={"center"}
									ml={"20px"}
									bgColor={"#f8f8f8"}
									_hover={{
										bgColor: "#1f243a",
									}}
									onMouseEnter={() => setTgHover(true)}
									onMouseLeave={() => setTgHover(false)}
								>
									<Icon
										w={"25px"}
										h={"25px"}
										as={tg}
										fill={tgHover ? "#f8f8f8" : "#1f243a"}
										cursor={"pointer"}
									/>
								</Link> */}
							</Flex>
						</Flex>
						<Flex flexDir={"column"}>
							<Heading
								fontFamily={"Oswald"}
								fontSize={"30px"}
								color={"#1f243a"}
								fontWeight={600}
								textTransform={"uppercase"}
								mb={"50px"}
							>
								Официальные документы
							</Heading>
							<Flex>
								{pdfs.map((pdf, i) => (
									<PdfItem key={i} i={i} pdf={pdf} />
								))}
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			) : (
				<Flex
					w={"100%"}
					flexDir={"column"}
					align={"center"}
					justify={"space-between"}
					px={"15px"}
				>
					<Flex flexDir={"column"} pt={"35px"} pb={"35px"}>
						<Flex flexDir={"column"}>
							<Heading
								fontFamily={"Oswald"}
								fontSize={"20px"}
								color={"#1f243a"}
								fontWeight={600}
								textTransform={"uppercase"}
								mb={"20px"}
							>
								Наш адрес
							</Heading>
							<Text
								fontSize={"14px"}
								color={"#1f243a"}
								lineHeight={"27px"}
								mb={"30px"}
							>
								ул Долгоруковская, д 30, Москва
							</Text>
							<Flex mb={"30px"} flexDir={"column"}>
								<Flex
									align={"center"}
									textDecoration="underline"
									_hover={{
										textDecoration: "none",
									}}
									mb={"20px"}
								>
									<Icon w={"25px"} h={"25px"} as={phone} fill={"#1f243a"} />
									<a
										href="tel: 8 800 600-49-29"
										style={{
											color: "#bf3132",
											fontSize: "18px",
											fontWeight: 700,
											marginLeft: "20px",
										}}
									>
										8 800 600-49-29
									</a>
								</Flex>
								<Flex
									align={"center"}
									textDecoration="underline"
									_hover={{
										textDecoration: "none",
									}}
								>
									<Icon w={"25px"} h={"25px"} as={message} fill={"#1f243a"} />
									<a
										href="mailto:info@mayak.help"
										style={{
											color: "#bf3132",
											fontSize: "18px",
											fontWeight: 700,
											marginLeft: "20px",
										}}
									>
										info@mayak.help
									</a>
								</Flex>
							</Flex>
							<Flex
								bgColor={"#f8f8f8"}
								borderRadius={"3px"}
								p={"29px"}
								mb={"20px"}
							>
								<Text color={"#666666"} fontSize={"14px"} lineHeight={"23px"}>
									Сотрудники нашего фонда рады помочь и проконсультировать Вас с
									понедельника по пятницу с 09:00 до 18:00.
								</Text>
							</Flex>
							<Flex>
								<Link
									href="https://vk.com/children_hospice"
									w={"60px"}
									h={"60px"}
									borderRadius={"50%"}
									cursor={"pointer"}
									display={"flex"}
									justifyContent={"center"}
									alignItems={"center"}
									bgColor={"#f8f8f8"}
									_hover={{
										bgColor: "#1f243a",
									}}
									onMouseEnter={() => setVkHover(true)}
									onMouseLeave={() => setVkHover(false)}
								>
									<Icon
										w={"25px"}
										h={"25px"}
										as={vk}
										fill={vkHover ? "#f8f8f8" : "#1f243a"}
										cursor={"pointer"}
									/>
								</Link>
								{/* <Link
									href="https://mayak.help/"
									w={"60px"}
									h={"60px"}
									borderRadius={"50%"}
									cursor={"pointer"}
									display={"flex"}
									justifyContent={"center"}
									alignItems={"center"}
									ml={"20px"}
									bgColor={"#f8f8f8"}
									_hover={{
										bgColor: "#1f243a",
									}}
									onMouseEnter={() => setTgHover(true)}
									onMouseLeave={() => setTgHover(false)}
								>
									<Icon
										w={"25px"}
										h={"25px"}
										as={tg}
										fill={tgHover ? "#f8f8f8" : "#1f243a"}
										cursor={"pointer"}
									/>
								</Link> */}
							</Flex>
						</Flex>
						<Flex flexDir={"column"}>
							<Heading
								fontFamily={"Oswald"}
								fontSize={"20px"}
								color={"#1f243a"}
								fontWeight={600}
								textTransform={"uppercase"}
								my={"30px"}
							>
								Официальные документы
							</Heading>
							<Flex>
								{pdfs.map((pdf, i) => (
									<PdfItem key={i} i={i} pdf={pdf} />
								))}
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			)}
		</>
	);
};

export default PreFooter;
