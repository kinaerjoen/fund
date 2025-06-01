import { Box, Flex, Heading, Icon, Image, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import blueBg from "../../../assets/blue.png";
import femalePlaceholder from "../../../assets/female-placeholder.jpg";
import { ReactComponent as message } from "../../../assets/messageRed.svg";
import { ReactComponent as phone } from "../../../assets/phoneRed.svg";
import ParticipantCard from "./participant-card";

const defaultText = `Мария Дмитриевна Петрова родилась в 1983 году в Санкт-Петербурге. 
Окончила Санкт-Петербургский государственный университет по специальности 
"Клиническая психология и психотерапия". Более 15 лет работает в сфере 
благотворительности и психологической поддержки семей.

Начала свой путь в благотворительности как волонтер в детских хосписах 
Санкт-Петербурга. Со временем стала ведущим специалистом по психологической 
поддержке семей с детьми, имеющими тяжелые заболевания. Под ее руководством 
было реализовано множество успешных проектов по поддержке семей, 
воспитывающих детей с паллиативными состояниями.

В 2016 году Мария Дмитриевна присоединилась к фонду "Дом с маяком" в качестве 
руководителя программы психологической поддержки семей. За время работы в фонде 
она разработала уникальную методику работы с семьями, воспитывающими детей с 
тяжелыми заболеваниями, которая сейчас успешно применяется во многих 
паллиативных центрах России.

Мария Дмитриевна является автором нескольких научных работ по психологии 
паллиативной помощи и регулярно проводит обучающие семинары для специалистов 
в области детской паллиативной помощи. Ее подход к работе с семьями, 
основанный на глубоком понимании психологических аспектов тяжелых заболеваний 
и личном опыте материнства, помог многим родителям найти силы и ресурсы для 
поддержки своих детей.

В Попечительском совете фонда Мария Дмитриевна отвечает за развитие 
программ психологической поддержки и обучение специалистов. Ее главная цель - 
сделать паллиативную помощь более доступной и эффективной для всех нуждающихся 
семей, а также создать систему поддержки для родителей, воспитывающих детей 
с тяжелыми заболеваниями.`;

const fullText = `Шкода Ксения Анатольевна родилась 19 мая 1975 года в
Полтавской области (УССР). Гражданка РФ. Училась на
филологическом факультете Харьковского госуниверситета им.
Каразина, после чего долгие годы работала в сфере
журналистики.

Была спецкором и редактором ряда печатных и
интернет-изданий, а также корреспондентом на региональном
телевидении. До госпереворота на Украине проживала в
Киеве, где работала парламентским корреспондентом, а также
занималась общественно-политической деятельностью. В том
числе, являлась пресс-секретарем ПСПУ Наталии Витренко,
координатором ЕСМ Александра Дугина в Киеве, а позже –
членом общественного движения Виктора Медведчука
«Украинский выбор», помощником народного депутата от
Партии регионов, активистом Антимайдана, организатором
«Группы поддержки «Беркута» и прочее. Известный на Украине
оппозиционер, украинофоб и сталинист, внесена во
всевозможные санкционные списки киевского режима.

С февраля 2014 года Ксения Анатольевна покинула территорию
«незалежной», став в ряды защитников Донбасса. С тех пор
ее жизнь и деятельность разделена на два региона – Москву
и ДНР. Более 9-ти лет она является невъездной на
оккупированную нацистами территорию, куда (в частности, в
родной Киев) мечтает прибыть в составе военной колонны ВС
РФ.

Она продолжает работать в журналистской сфере, в том
числе, освещает военные события в качестве военкора, а
также занимается организацией и проведением разного рода
мероприятий, связанных с поддержкой наших военнослужащих.
Участник СВО. Находится непосредственно в зоне боевых
действий в ДНР, позывной «Панда». Освоила определенные
военные специальности, а также азы тактической медицины.
Параллельно координирует гуманитарные миссии, помогающие
фронту.

Совмещает свои профессиональные навыки с армейским бытом,
являясь своеобразным связывающим звеном между окопными
бойцами и Большой Землей. Ее главный девиз – работаем,
брат!`;

const Participants = ({ participants }) => {
	const [text, setText] = useState(defaultText);

	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);

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
							Попечительский совет
						</Heading>
					</Flex>
					<Flex w={"1133px"} pb={"75px"}>
						<Flex justify={"start"} flexWrap={"wrap"}>
							{participants.map(({ name, position, image, description }, i) => (
								<Box
									key={i}
									mt={i > 3 ? "20px" : ""}
									ml={i % 4 !== 0 ? "20px" : ""}
								>
									<ParticipantCard
										name={name}
										position={position}
										image={image}
										description={description}
									/>
								</Box>
							))}
						</Flex>
					</Flex>
					<Flex w={"100%"} justify={"center"} bgColor={"#f2f5f8"}>
						<Flex w={"1133px"} p={"85px 0 70px 0"} flexDir={"column"}>
							<Box
								marginLeft={"8px"}
								display={"flex"}
								justifyContent={"center"}
								alignItems={"center"}
								css={`
									width: 255px;
									height: 45px;
									transform: skew(160deg);
									background: #bf3132;
									border-radius: 5px;
								`}
							>
								<Text
									fontWeight={500}
									color={"white"}
									fontSize={"30px"}
									fontFamily={"Oswald"}
									textTransform={"uppercase"}
									css={"transform: skew(20deg);"}
								>
									Наши контакты
								</Text>
							</Box>
							<Flex mt={"40px"} justify={"space-between"}>
								<Box pos={"relative"} w={"262px"} h={"315px"}>
									<Image
										w={"262px"}
										height={"315px"}
										src={femalePlaceholder}
										objectFit="cover"
										borderRadius="3px"
									/>
								</Box>
								<Flex flexDir={"column"}>
									<Flex
										p={"73px 80px 65px 67px"}
										flexDir={"column"}
										maxW={"800px"}
										bgColor={"white"}
										borderRadius={"3px"}
									>
										<Heading
											fontSize={"24px"}
											color={"#10131f"}
											fontFamily={"Oswald"}
											mb={"20px"}
										>
											Мария Дмитриевна Петрова
										</Heading>
										<Text
											maxW={"500px"}
											fontSize={"18px"}
											color={"#bf3132"}
											lineHeight={"24px"}
											mb={"56px"}
										>
											Руководитель программы психологической поддержки семей,
											эксперт в области детской паллиативной помощи
										</Text>
										<Text
											fontSize={"16px"}
											color={"#1f243a"}
											lineHeight={"25px"}
										>
											Мария Дмитриевна родилась в 1983 году в Санкт-Петербурге. 
											Окончила Санкт-Петербургский государственный университет по специальности 
											"Клиническая психология и психотерапия". Более 15 лет работает в сфере 
											благотворительности и психологической поддержки семей.
											<br />
											<br />
											Начала свой путь в благотворительности как волонтер в детских хосписах 
											Санкт-Петербурга. Со временем стала ведущим специалистом по психологической 
											поддержке семей с детьми, имеющими тяжелые заболевания. Под ее руководством 
											было реализовано множество успешных проектов по поддержке семей, 
											воспитывающих детей с паллиативными состояниями.
											<br />
											<br />
											В 2016 году Мария Дмитриевна присоединилась к фонду "Дом с маяком" в качестве 
											руководителя программы психологической поддержки семей. За время работы в фонде 
											она разработала уникальную методику работы с семьями, воспитывающими детей с 
											тяжелыми заболеваниями, которая сейчас успешно применяется во многих 
											паллиативных центрах России.
											<br />
											<br />
											Мария Дмитриевна является автором нескольких научных работ по психологии 
											паллиативной помощи и регулярно проводит обучающие семинары для специалистов 
											в области детской паллиативной помощи. Ее подход к работе с семьями, 
											основанный на глубоком понимании психологических аспектов тяжелых заболеваний 
											и личном опыте материнства, помог многим родителям найти силы и ресурсы для 
											поддержки своих детей.
											<br />
											<br />
											В Попечительском совете фонда Мария Дмитриевна отвечает за развитие 
											программ психологической поддержки и обучение специалистов. Ее главная цель - 
											сделать паллиативную помощь более доступной и эффективной для всех нуждающихся 
											семей, а также создать систему поддержки для родителей, воспитывающих детей 
											с тяжелыми заболеваниями.
										</Text>
									</Flex>
									<Flex mt={"30px"} align={"center"} wrap={"wrap"}>
										<Flex align={"center"} mr={"100px"}>
											{/* <Icon w={"15px"} h={"15px"} as={phone} fill={"#bf3132"} /> */}
											{/* <a
												href="tel: +7 (915) 233-33-38"
												style={{
													color: "#1f243a",
													fontSize: "18px",
													fontWeight: 700,
													marginLeft: "10px",
												}}
											>
												+7 (915) 233-33-38
											</a>
											<a
												href="tel: +7 (915) 233-33-38"
												style={{
													color: "#1f243a",
													fontSize: "18px",
													fontWeight: 700,
													marginLeft: "30px",
												}}
											>
												+7 (985) 868-48-42
											</a> */}
										</Flex>
										<Flex align={"center"} marginLeft={'auto'}>
											<Icon
												w={"15px"}
												h={"15px"}
												as={message}
												fill={"#bf3132"}
											/>
											<a
												href="mailto:info@mayak.help"
												style={{
													color: "#1f243a",
													fontSize: "18px",
													fontWeight: 700,
													marginLeft: "10px",
												}}
											>
												info@mayak.help
											</a>
										</Flex>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			) : (
				<Flex flexDir={"column"} align={"center"} width={"100%"} minH={"100vh"}>
					<Flex
						bgColor={"#f2f2f2"}
						h={"200px"}
						w={"100%"}
						justify={"center"}
						align={"end"}
						pb={"75px"}
						mb={"75px"}
					>
						<Heading fontSize={"30px"} color={"#10131f"} fontFamily={"Oswald"}>
							Попечительский совет
						</Heading>
					</Flex>
					<Flex pb={"35px"}>
						<Flex flexDir={"column"}>
							{participants.map(({ name, position, image, description }, i) => (
								<Box key={i} mt={i > 0 && "10px"}>
									<ParticipantCard
										name={name}
										position={position}
										image={image}
										description={description}
									/>
								</Box>
							))}
						</Flex>
					</Flex>
					<Flex w={"100%"} justify={"center"} bgColor={"#f2f5f8"}>
						<Flex p={"35px 15px 35px 15px"} flexDir={"column"}>
							<Box
								marginLeft={"8px"}
								display={"flex"}
								justifyContent={"center"}
								alignItems={"center"}
								css={`
									width: 180px;
									height: 35px;
									transform: skew(160deg);
									background: #bf3132;
									border-radius: 5px;
								`}
							>
								<Text
									fontWeight={500}
									color={"white"}
									fontSize={"20px"}
									fontFamily={"Oswald"}
									textTransform={"uppercase"}
									css={"transform: skew(20deg);"}
								>
									Наши контакты
								</Text>
							</Box>
							<Flex align={"center"} flexDir={"column"} mt={"40px"}>
								<Box pos={"relative"} w={"262px"} h={"315px"} mb={"35px"}>
									<Image
										w={"262px"}
										height={"315px"}
										src={femalePlaceholder}
										objectFit="cover"
										borderRadius="3px"
									/>
								</Box>
								<Flex flexDir={"column"}>
									<Flex
										p={"35px"}
										flexDir={"column"}
										maxW={"800px"}
										bgColor={"white"}
										borderRadius={"3px"}
									>
										<Heading
											fontSize={"24px"}
											color={"#10131f"}
											fontFamily={"Oswald"}
											mb={"20px"}
										>
											Мария Дмитриевна Петрова
										</Heading>
										<Text
											maxW={"500px"}
											fontSize={"18px"}
											color={"#bf3132"}
											lineHeight={"24px"}
											mb={"30px"}
										>
											Руководитель программы психологической поддержки семей,
											эксперт в области детской паллиативной помощи
										</Text>
										<Text
											fontSize={"16px"}
											color={"#1f243a"}
											lineHeight={"25px"}
											whiteSpace={"pre-wrap"}
										>
											{text}
										</Text>
										{/* <Link
											textDecoration={"underline"}
											color={"#bf3132"}
											mt={"12px"}
											_hover={{
												textDecoration: "none",
											}}
											cursor={"pointer"}
											onClick={() =>
												setText(text === defaultText ? fullText : defaultText)
											}
										>
											Читать биографию
										</Link> */}
									</Flex>
									<Flex mt={"30px"} align={"center"} wrap={"wrap"}>
										<Flex align={"center"} mr={"100px"} wrap={"wrap"}>
											{/* <Icon w={"15px"} h={"15px"} as={phone} fill={"#bf3132"} /> */}
											{/* <a
												href="tel: +7 (915) 233-33-38"
												style={{
													color: "#1f243a",
													fontSize: "18px",
													fontWeight: 700,
													marginLeft: "10px",
												}}
											>
												+7 (915) 233-33-38
											</a> */}
											{/* <a
												href="tel: +7 (915) 233-33-38"
												style={{
													color: "#1f243a",
													fontSize: "18px",
													fontWeight: 700,
													marginLeft: "25px",
													marginTop: "10px",
												}}
											>
												+7 (985) 868-48-42
											</a> */}
										</Flex>
										<Flex align={"center"} marginTop="10px" marginLeft={'auto'}>
											<Icon
												w={"15px"}
												h={"15px"}
												as={message}
												fill={"#bf3132"}
											/>
											<a
												href="mailto:info@mayak.help"
												style={{
													color: "#1f243a",
													fontSize: "18px",
													fontWeight: 700,
													marginLeft: "10px",
												}}
											>
												info@mayak.help
											</a>
										</Flex>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			)}
		</>
	);
};

export default Participants;
