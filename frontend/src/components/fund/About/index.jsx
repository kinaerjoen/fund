import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import aboutUsBg from "../../../assets/aboutUsBg.jpg";
import bookNBrain from "../../../assets/bookNBrain.png";
import handsNHearts from "../../../assets/handsNHearts.png";
import workNThank from "../../../assets/workNThank.png";
import PdfItem from "../footer/pdf-item";
import ParticipantCard from "../PopechitelskiySovet/participant-card";

const About = ({ pdfs, participants }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			{document.documentElement.clientWidth > 767 ? (
				<Box>
					<Flex flexDir={"column"} align={"center"}>
						<Flex
							align={"center"}
							w={"100%"}
							h={"600px"}
							bgPos={"center"}
							bgRepeat={"no-repeat"}
							bgImage={aboutUsBg}
						>
							<Flex w={"100%"} justify={"center"}>
								<Heading
									fontSize={"50px"}
									color={"white"}
									fontFamily={"Oswald"}
									textAlign={"center"}
									w={"650px"}
								>
									Благотворительный фонд Эльмана Пашаева
								</Heading>
							</Flex>
						</Flex>
						<Flex w={"1133px"} pb={"75px"} pt={"45px"} flexDir={"column"}>
							<Flex
								py={"50px"}
								px={"55px"}
								bgColor={"#f8f8f8"}
								w={"100%"}
								h={"165px"}
								mb={"75px"}
							>
								<Text fontSize={"21px"} color={"#1f243a"}>
									<span style={{ fontWeight: 700 }}>Миссия нашего фонда</span> —
									системное развитие благотворительности в России и изменение
									отношения общества к решению социальных проблем.
								</Text>
							</Flex>
							<Flex w={"100%"} justify={"space-between"}>
								<Flex flexGrow={0.3} mr={"100px"}>
									<Text
										css={`
											width: 240px;
											color: #1f243a;
											font-family: "Oswald";
											font-size: 30px;
											font-weight: 400;
										`}
									>
										Задачи нашего фонда включают:
									</Text>
								</Flex>
								<Flex flexGrow={0.7} flexDir={"column"}>
									<Flex flexDir={"column"} mb={"50px"}>
										<Text
											color={"#1f243a"}
											fontSize={"20px"}
											fontWeight={700}
											pb={"20px"}
										>
											Развитие благотворительности:
										</Text>
										<Text>
											Мы стремимся увеличить уровень благотворительности в
											России и привлечь больше людей и организаций к содействию
											и помощи нуждающимся. Мы организуем различные программы и
											акции, направленные на пропаганду и популяризацию
											благотворительности, а также оказываем консультационную
											поддержку тем, кто хочет начать свою благотворительную
											деятельность.
										</Text>
									</Flex>
									<Flex flexDir={"column"} mb={"50px"}>
										<Text
											color={"#1f243a"}
											fontSize={"20px"}
											fontWeight={700}
											pb={"20px"}
										>
											Помощь наиболее уязвимым группам:
										</Text>
										<Text>
											Мы сосредоточены на помощи тем, кто находится в наиболее
											уязвимом положении, включая детей, пожилых людей,
											инвалидов, бездомных и малоимущих. Мы осуществляем
											проекты, направленные на обеспечение им необходимых
											условий для жизни, включая питание, одежду, жилье,
											медицинскую помощь и социальную поддержку.
										</Text>
									</Flex>
									<Flex flexDir={"column"} mb={"50px"}>
										<Text
											color={"#1f243a"}
											fontSize={"20px"}
											fontWeight={700}
											pb={"20px"}
										>
											Развитие гражданского общества:
										</Text>
										<Text>
											Мы активно работаем над укреплением гражданского общества
											в России. Мы поддерживаем инициативы гражданских и
											общественных организаций, проводим образовательные
											программы и тренинги, способствующие развитию активного
											гражданского участия и формированию гражданского сознания.
										</Text>
									</Flex>
									<Flex flexDir={"column"}>
										<Text
											color={"#1f243a"}
											fontSize={"20px"}
											fontWeight={700}
											pb={"20px"}
										>
											Прозрачность и отчетность:
										</Text>
										<Text>
											Мы придерживаемся принципов прозрачности и отчетности в
											своей работе. Мы регулярно предоставляем отчеты о наших
											проектах, использовании средств и достигнутых результатах,
											чтобы наши доноры и партнеры могли уверенно доверять нам и
											видеть, как их пожертвования вносят реальную пользу.
										</Text>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
						<Flex
							flexDir={"column"}
							align={"center"}
							w={"100%"}
							bgColor={"#1f243a"}
							borderRadius={"3px"}
						>
							<Flex w={"1133px"} py={"75px"} flexDir={"column"}>
								<Heading
									color={"white"}
									fontFamily={"Oswald"}
									fontSize={"30px"}
									mb={"40px"}
									textTransform={"uppercase"}
								>
									Почему стоит доверять нам:
								</Heading>
								<Flex justify={"space-between"}>
									<Flex
										w={"360px"}
										h={"405px"}
										border={"1px solid #000000"}
										bgColor={"white"}
										p={"40px"}
										flexDir={"column"}
									>
										<Image w={"50px"} h={"65px"} src={bookNBrain} pb={"20px"} />
										<Text
											color={"#1f243a"}
											fontSize={"20px"}
											fontWeight={700}
											pb={"20px"}
										>
											Опыт <br /> и знания
										</Text>
										<Text color={"#666666"} fontSize={"14px"}>
											Наша команда состоит из опытных специалистов, имеющих
											богатый опыт работы в сфере благотворительности и
											гражданского общества. Мы обладаем глубокими знаниями и
											пониманием проблем, с которыми сталкиваются нуждающиеся
											люди, и разрабатываем эффективные стратегии помощи.
										</Text>
									</Flex>
									<Flex
										w={"360px"}
										h={"405px"}
										border={"1px solid #000000"}
										bgColor={"white"}
										p={"40px"}
										flexDir={"column"}
									>
										<Image
											w={"50px"}
											h={"65px"}
											src={handsNHearts}
											pb={"20px"}
										/>
										<Text
											color={"#1f243a"}
											fontSize={"20px"}
											fontWeight={700}
											pb={"20px"}
										>
											Репутация <br /> и история
										</Text>
										<Text color={"#666666"} fontSize={"14px"}>
											Мы доказали свою надежность и эффективность, привлекая
											уважение и поддержку как от общественности, так и от
											других благотворительных организаций. История работы и
											достижений нашего фонда является важным фактором при
											принятии решения о доверии.
										</Text>
									</Flex>
									<Flex
										w={"360px"}
										h={"405px"}
										border={"1px solid #000000"}
										bgColor={"white"}
										p={"40px"}
										flexDir={"column"}
									>
										<Image w={"50px"} h={"65px"} src={workNThank} pb={"20px"} />
										<Text
											color={"#1f243a"}
											fontSize={"19px"}
											fontWeight={700}
											pb={"20px"}
										>
											Независимая аккредитация <br /> и сертификация
										</Text>
										<Text color={"#666666"} fontSize={"14px"}>
											Наш фонд прошел сертификацию и независимую аккредитацию.
											<br />
											<br />
											Мы получили подтверждение от независимых организаций, это
											говорит о его надежности.
										</Text>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
						<Flex
							flexDir={"column"}
							align={"center"}
							w={"100%"}
							borderRadius={"3px"}
						>
							<Flex w={"1133px"} py={"75px"} flexDir={"column"}>
								<Flex flexDir={"column"} w={"100%"} mb={"100px"}>
									<Heading
										fontFamily={"Oswald"}
										color={"#1f243a"}
										fontSize={"30px"}
										fontWeight={700}
										textTransform={"uppercase"}
										mb={"40px"}
									>
										Фонд это мы
									</Heading>
									<Flex w={"100%"} justify={"start"} flexWrap={"wrap"}>
										{participants.map((participant, i) => (
											<Box
												ml={i && i % 4 !== 0 ? "28px" : ""}
												mt={i > 3 ? "28px" : ""}
												key={i}
											>
												<ParticipantCard
													image={participant?.image}
													name={participant?.name}
													position={participant?.position}
													description={participant?.description}
												/>
											</Box>
										))}
									</Flex>
								</Flex>
								<Flex w={"100%"} justify={"space-between"}>
									<Heading
										fontFamily={"Oswald"}
										fontSize={"30px"}
										color={"#1f243a"}
										fontWeight={600}
										textTransform={"uppercase"}
										mb={"50px"}
										flexGrow={0.3}
									>
										Официальные <br /> документы
									</Heading>
									<Flex maxW={"730px"} wrap={"wrap"}>
										{pdfs.map((pdf, i) => (
											<Box
												key={i}
												ml={i === 0 || i % 2 === 0 ? "" : "20px"}
												mt={i > 1 && "20px"}
											>
												<PdfItem pdf={pdf} width={"355px"} />
											</Box>
										))}
									</Flex>
								</Flex>
							</Flex>
						</Flex>
						{/* <Flex
							justify={"center"}
							width={"100%"}
							pt={"66px"}
							pb={"75px"}
							bgColor={"#f2f5f8"}
						>
							<Flex w={"1133px"}>
								<PaymentWithHistory isHeader={true} />
							</Flex>
						</Flex> */}
					</Flex>
				</Box>
			) : (
				<Box>
					<Flex flexDir={"column"} align={"center"}>
						<Flex
							align={"center"}
							w={"100%"}
							h={"180px"}
							mt={"40px"}
							bgPos={"center"}
							bgRepeat={"no-repeat"}
							bgSize={"cover"}
							bgImage={aboutUsBg}
						>
							<Flex w={"100%"} justify={"center"}>
								<Heading
									fontSize={"25px"}
									color={"white"}
									fontFamily={"Oswald"}
									textAlign={"center"}
									textTransform={"uppercase"}
								>
									Благотворительный <br /> фонд Эльмана Пашаева
								</Heading>
							</Flex>
						</Flex>
						<Flex pb={"35px"} pt={"35px"} flexDir={"column"} px={"15px"}>
							<Flex
								py={"27px"}
								px={"24px"}
								bgColor={"#f8f8f8"}
								w={"100%"}
								mb={"35px"}
							>
								<Text fontSize={"16px"} color={"#1f243a"}>
									<span style={{ fontWeight: 700 }}>Миссия нашего фонда</span> —
									системное развитие благотворительности в России и изменение
									отношения общества к решению социальных проблем.
								</Text>
							</Flex>
							<Flex w={"100%"} flexDir={"column"}>
								<Flex>
									<Text
										css={`
											width: 200px;
											color: #1f243a;
											font-family: "Oswald";
											font-size: 20px;
										`}
										textTransform={"uppercase"}
										fontWeight={700}
										mb={"20px"}
									>
										Задачи нашего фонда включают:
									</Text>
								</Flex>
								<Flex flexDir={"column"}>
									<Flex flexDir={"column"} mb={"30px"}>
										<Text
											color={"#1f243a"}
											fontSize={"16px"}
											fontWeight={700}
											pb={"20px"}
										>
											Развитие благотворительности:
										</Text>
										<Text fontSize={"14px"}>
											Мы стремимся увеличить уровень благотворительности в
											России и привлечь больше людей и организаций к содействию
											и помощи нуждающимся. Мы организуем различные программы и
											акции, направленные на пропаганду и популяризацию
											благотворительности, а также оказываем консультационную
											поддержку тем, кто хочет начать свою благотворительную
											деятельность.
										</Text>
									</Flex>
									<Flex flexDir={"column"} mb={"30px"}>
										<Text
											color={"#1f243a"}
											fontSize={"16px"}
											fontWeight={700}
											pb={"20px"}
										>
											Помощь наиболее уязвимым группам:
										</Text>
										<Text fontSize={"14px"}>
											Мы сосредоточены на помощи тем, кто находится в наиболее
											уязвимом положении, включая детей, пожилых людей,
											инвалидов, бездомных и малоимущих. Мы осуществляем
											проекты, направленные на обеспечение им необходимых
											условий для жизни, включая питание, одежду, жилье,
											медицинскую помощь и социальную поддержку.
										</Text>
									</Flex>
									<Flex flexDir={"column"} mb={"30px"}>
										<Text
											color={"#1f243a"}
											fontSize={"16px"}
											fontWeight={700}
											pb={"20px"}
										>
											Развитие гражданского общества:
										</Text>
										<Text fontSize={"14px"}>
											Мы активно работаем над укреплением гражданского общества
											в России. Мы поддерживаем инициативы гражданских и
											общественных организаций, проводим образовательные
											программы и тренинги, способствующие развитию активного
											гражданского участия и формированию гражданского сознания.
										</Text>
									</Flex>
									<Flex flexDir={"column"}>
										<Text
											color={"#1f243a"}
											fontSize={"16px"}
											fontWeight={700}
											pb={"20px"}
										>
											Прозрачность и отчетность:
										</Text>
										<Text fontSize={"14px"}>
											Мы придерживаемся принципов прозрачности и отчетности в
											своей работе. Мы регулярно предоставляем отчеты о наших
											проектах, использовании средств и достигнутых результатах,
											чтобы наши доноры и партнеры могли уверенно доверять нам и
											видеть, как их пожертвования вносят реальную пользу.
										</Text>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
						<Flex
							flexDir={"column"}
							align={"center"}
							w={"100%"}
							bgColor={"#1f243a"}
							borderRadius={"3px"}
						>
							<Flex py={"35px"} flexDir={"column"}>
								<Heading
									color={"white"}
									fontFamily={"Oswald"}
									fontSize={"20px"}
									mb={"30px"}
									textTransform={"uppercase"}
									fontWeight={700}
								>
									Почему стоит доверять нам:
								</Heading>
								<Flex flexDir={"column"}>
									<Flex
										w={"360px"}
										h={"405px"}
										border={"1px solid #000000"}
										bgColor={"white"}
										p={"40px"}
										flexDir={"column"}
										mt={"10px"}
									>
										<Image w={"50px"} h={"65px"} src={bookNBrain} pb={"20px"} />
										<Text
											color={"#1f243a"}
											fontSize={"20px"}
											fontWeight={700}
											pb={"20px"}
										>
											Опыт <br /> и знания
										</Text>
										<Text color={"#666666"} fontSize={"14px"}>
											Наша команда состоит из опытных специалистов, имеющих
											богатый опыт работы в сфере благотворительности и
											гражданского общества. Мы обладаем глубокими знаниями и
											пониманием проблем, с которыми сталкиваются нуждающиеся
											люди, и разрабатываем эффективные стратегии помощи.
										</Text>
									</Flex>
									<Flex
										w={"360px"}
										h={"405px"}
										border={"1px solid #000000"}
										bgColor={"white"}
										p={"40px"}
										flexDir={"column"}
										mt={"10px"}
									>
										<Image
											w={"50px"}
											h={"65px"}
											src={handsNHearts}
											pb={"20px"}
										/>
										<Text
											color={"#1f243a"}
											fontSize={"20px"}
											fontWeight={700}
											pb={"20px"}
										>
											Репутация <br /> и история
										</Text>
										<Text color={"#666666"} fontSize={"14px"}>
											Мы доказали свою надежность и эффективность, привлекая
											уважение и поддержку как от общественности, так и от
											других благотворительных организаций. История работы и
											достижений нашего фонда является важным фактором при
											принятии решения о доверии.
										</Text>
									</Flex>
									<Flex
										w={"360px"}
										h={"405px"}
										border={"1px solid #000000"}
										bgColor={"white"}
										p={"40px"}
										flexDir={"column"}
										mt={"10px"}
									>
										<Image w={"50px"} h={"65px"} src={workNThank} pb={"20px"} />
										<Text
											color={"#1f243a"}
											fontSize={"19px"}
											fontWeight={700}
											pb={"20px"}
										>
											Независимая аккредитация <br /> и сертификация
										</Text>
										<Text color={"#666666"} fontSize={"14px"}>
											Наш фонд прошел сертификацию и независимую аккредитацию.
											<br />
											<br />
											Мы получили подтверждение от независимых организаций, это
											говорит о его надежности.
										</Text>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
						<Flex
							flexDir={"column"}
							align={"center"}
							w={"100%"}
							borderRadius={"3px"}
						>
							<Flex py={"35px"} px={"15px"} flexDir={"column"}>
								<Flex flexDir={"column"} w={"100%"} mb={"35px"}>
									<Heading
										fontFamily={"Oswald"}
										color={"#1f243a"}
										fontSize={"20px"}
										fontWeight={700}
										textTransform={"uppercase"}
										mb={"30px"}
									>
										Фонд это мы
									</Heading>
									<Flex w={"100%"} flexDir={"column"} align={"center"}>
										{participants.map((participant, i) => (
											<Box mt={i > 0 ? "10px" : ""} key={i}>
												<ParticipantCard
													image={participant?.image}
													name={participant?.name}
													position={participant?.position}
													description={participant?.description}
												/>
											</Box>
										))}
									</Flex>
								</Flex>
								<Flex w={"100%"} flexDir={"column"}>
									<Heading
										fontFamily={"Oswald"}
										fontSize={"20px"}
										color={"#1f243a"}
										fontWeight={700}
										textTransform={"uppercase"}
										mb={"20px"}
									>
										Официальные документы
									</Heading>
									<Flex justify={"center"} wrap={"wrap"}>
										{pdfs.map((pdf, i) => (
											<Box
												key={i}
												ml={i === 0 || i % 2 === 0 ? "" : "10px"}
												mt={i > 1 && "10px"}
											>
												<PdfItem pdf={pdf} />
											</Box>
										))}
									</Flex>
								</Flex>
							</Flex>
						</Flex>
						{/* <Flex
							justify={"center"}
							width={"100%"}
							pt={"35px"}
							pb={"35px"}
							bgColor={"#f2f5f8"}
						>
							<Flex>
								<PaymentWithHistory isHeader={true} />
							</Flex>
						</Flex> */}
					</Flex>
				</Box>
			)}
		</>
	);
};

export default About;
