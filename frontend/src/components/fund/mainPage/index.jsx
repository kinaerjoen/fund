import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logoMayak from '../../../assets/logo.png';
import PreFooter from "../footer/pre-footer";
import { PaymentModal } from "../modals/paymentModal";
import NewCard from "../News/new-card";
import ParticipantCard from "../PopechitelskiySovet/participant-card";
import ProjectCard from "../Projects/project-card";
import Thank from "../Thanks/thank";

export default function MainPage({
	pdfs,
	news,
	thanks,
	projects,
	participants,
}) {
	const navigate = useNavigate();
	const {
		isOpen: isPaymentModalOpen,
		onOpen: onPaymentModalOpen,
		onClose: onPaymentModalClose,
	} = useDisclosure();

	return (
		<>
			{window.document.documentElement.clientWidth > 767 ? (
				<Box>
					<Flex
						align={"center"}
						w={"100%"}
						h={"auto"}
						bgColor={"#F6F8FA"}
					>
						<Flex direction="column" marginLeft={"101px"}>
							{/* <Image src={logoMayak} alt="Дом с маяком" w={180} mb={6} /> */}
							<Heading
								fontFamily={"Oswald"}
								color={"#2D415A"}
								fontSize={"48px"}
								fontWeight={"600"}
								textTransform={"uppercase"}
								marginTop={'120px'}
							>
								Благотворительный фонд «Дом с маяком»
							</Heading>
							<Text mt={6} fontSize={'22px'} color={'#2D415A'} maxW={'600px'}>
								Наша миссия — помогать семьям с неизлечимо больными детьми жить полноценной жизнью, несмотря на диагноз. Мы стремимся сделать так, чтобы каждый ребенок, независимо от тяжести заболевания, мог радоваться каждому дню и получать необходимую поддержку.
							</Text>
							<ul
								style={{
									listStyle: "square",
									width: "445px",
									marginLeft: "18px",
									marginTop: "33px",
								}}
							>
								<li style={{ color: "#33438e" }}>
									<span style={{ color: "#1f243a" }}>
										Паллиативная помощь детям: организация выездной службы помощи на дому, обеспечение семей необходимыми лекарствами и медицинским оборудованием, обучение родителей навыкам ухода за тяжелобольным ребенком
									</span>
								</li>
								<li style={{ color: "#33438e" }}>
									<span style={{ color: "#1f243a" }}>
										Психологическая поддержка: помощь семьям в преодолении эмоциональных трудностей, организация групп поддержки для родителей и братьев/сестер, индивидуальные консультации психологов
									</span>
								</li>
								<li style={{ color: "#33438e" }}>
									<span style={{ color: "#1f243a" }}>
										Развитие детской паллиативной помощи: обучение специалистов, внедрение современных методик ухода, создание системы непрерывной поддержки семей с тяжелобольными детьми
									</span>
								</li>
								<li style={{ color: "#33438e" }}>
									<span style={{ color: "#1f243a" }}>
										Прозрачность и открытость: регулярная публикация отчетов о работе фонда, подробная информация о расходовании средств, возможность для каждого донора увидеть, как его помощь меняет жизнь семей
									</span>
								</li>
							</ul>
							{/* <Button mt={8} colorScheme="teal" size="lg" onClick={onPaymentModalOpen}>
								Помочь
							</Button> */}
						</Flex>
					</Flex>
					{/* <Flex justify={"center"} width={"100%"} pt={"66px"} pb={"75px"}>
						<Flex w={"1133px"}>
							<Flex direction={"column"}>
								<Flex>
									<Box
										marginLeft={"8px"}
										display={"flex"}
										justifyContent={"center"}
										alignItems={"center"}
										css={`
											width: 100px;
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
											Цель
										</Text>
									</Box>
									<Text
										fontWeight={500}
										fontSize={"30px"}
										fontFamily={"Oswald"}
										textTransform={"uppercase"}
										ml={"5px"}
										color={"#1f243a"}
									>
										нашего фонда
									</Text>
								</Flex>
								<Text w={"560px"} mt={"30px"} color={"#1f243a"}>
									Задачи нашего фонда включают:
								</Text>
								<ul
									style={{
										listStyle: "square",
										width: "445px",
										marginLeft: "18px",
										marginTop: "33px",
									}}
								>
									<li style={{ color: "#33438e" }}>
										<span style={{ color: "#1f243a" }}>
											Развитие благотворительности: увеличение уровня благотворительности в России, привлечение людей и организаций к помощи нуждающимся, организация программ и акций по популяризации благотворительности
										</span>
									</li>
									<li style={{ color: "#33438e" }}>
										<span style={{ color: "#1f243a" }}>
											Помощь наиболее уязвимым группам: поддержка детей с тяжелыми заболеваниями и их семей, обеспечение необходимых условий для жизни, включая медицинскую помощь и социальную поддержку
										</span>
									</li>
									<li style={{ color: "#33438e" }}>
										<span style={{ color: "#1f243a" }}>
											Развитие паллиативной помощи: поддержка инициатив по развитию детской паллиативной помощи, проведение образовательных программ для специалистов и семей
										</span>
									</li>
									<li style={{ color: "#33438e" }}>
										<span style={{ color: "#1f243a" }}>
											Прозрачность и отчетность: регулярное предоставление отчетов о проектах, использовании средств и достигнутых результатах для обеспечения доверия доноров и партнеров
										</span>
									</li>
								</ul>
								<Box
									w={"746px"}
									h={"274px"}
									bgColor={"#f8f8f8"}
									mt={"24px"}
									borderRadius={"3px"}
									bgRepeat={"no-repeat"}
									bgPos={"30px 30px"}
									bgImage={logoMayak}
								>
									<Text m={"50px"} fontSize={"16px"}>
										Благотворительность для меня является не только важным, но и
										простым делом, которое каждый из нас может сделать, чтобы
										помочь тем, кто находится в беде или нуждается в поддержке.
										Особенно в настоящее время, когда многие люди оказываются в
										трудных ситуациях из-за военных действий. Поддержка детских
										домов, талантливой молодежи и защитников нашей Родины —
										очень важная и благородная задача. У меня нет морального
										права оставаться безучастным. Наши дети, наша молодежь и
										наши защитники — это наше будущее. Наша сила заключается в
										единстве!
									</Text>
								</Box>
							</Flex>
						</Flex>
					</Flex>
					{projects.length > 0 && (
						<Flex
							justify={"center"}
							width={"100%"}
							pt={"66px"}
							pb={"75px"}
							bgColor={"#1f243a"}
						>
							<Flex w={"1133px"} flexDir={"column"}>
								<Flex mb={"35px"}>
									<Box
										marginLeft={"8px"}
										display={"flex"}
										justifyContent={"center"}
										alignItems={"center"}
										css={`
											width: 145px;
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
											Проекты
										</Text>
									</Box>
									<Text
										fontWeight={500}
										fontSize={"30px"}
										fontFamily={"Oswald"}
										textTransform={"uppercase"}
										ml={"5px"}
										color={"#fff"}
									>
										фонда
									</Text>
								</Flex>
								<Flex justify={"start"} flexWrap={"wrap"}>
									{projects
										.slice(0, 3)
										.map(
											(
												{ title, content, image, currentAmount, targetAmount },
												i
											) => (
												<Box ml={i !== 0 && "26px"} key={i}>
													<ProjectCard
														title={title}
														content={content}
														image={image}
														targetAmount={targetAmount}
														currentAmount={currentAmount}
														onPaymentModalOpen={onPaymentModalOpen}
													/>
												</Box>
											)
										)}
								</Flex>
							</Flex>
						</Flex>
					)} */}
					{news.length > 0 && (
						<Flex
							justify={"center"}
							width={"100%"}
							pt={"66px"}
							pb={"75px"}
							bgColor={"#fff"}
						>
							<Flex w={"1133px"} flexDir={"column"}>
								<Flex flexDirection={"column"}>
									<Heading
										fontFamily={"Oswald"}
										color={"#1f243a"}
										fontSize={"30px"}
										fontWeight={700}
										textTransform={"uppercase"}
										mb={"39px"}
									>
										Новости
									</Heading>
									<Flex justify={"start"} flexWrap={"wrap"}>
										{news
											.slice(0, 3)
											.map(({ title, content, mainPicture, createdAt }, i) => (
												<Box ml={i !== 0 && "26px"} key={i}>
													<NewCard
														i={i}
														key={i}
														createdAt={createdAt}
														image={mainPicture}
														description={content}
														title={title}
													/>
												</Box>
											))}
									</Flex>
									<Flex justify={"center"} mt={"45px"}>
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
											marginRight={"23px"}
											onClick={() => navigate("/novosty")}
										>
											Еще новости
										</Button>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
					)}
					{participants.length > 0 && (
						<Flex justify={"center"} width={"100%"} pt={"74px"} pb={"75px"}>
							<Flex w={"1133px"}>
								<Flex flexDir={"column"} w={"100%"}>
									<Heading
										fontFamily={"Oswald"}
										color={"#1f243a"}
										fontSize={"30px"}
										fontWeight={700}
										textTransform={"uppercase"}
										mb={"40px"}
									>
										Попечительский совет
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
							</Flex>
						</Flex>
					)}
					{thanks.length > 0 && (
						<Flex
							justify={"center"}
							width={"100%"}
							pt={"74px"}
							pb={"75px"}
							bgImage={"linear-gradient(to top, #f2f5f8 0%, #ffffff 100%)"}
						>
							<Flex w={"1133px"}>
								<Flex flexDir={"column"} w={"100%"}>
									<Heading
										fontFamily={"Oswald"}
										color={"#1f243a"}
										fontSize={"30px"}
										fontWeight={700}
										textTransform={"uppercase"}
										mb={"40px"}
									>
										Благодарности
									</Heading>
									<Thank images={thanks.slice(0, 4)} />
								</Flex>
							</Flex>
						</Flex>
					)}
					<PreFooter pdfs={pdfs.slice(0, 2)} />

					<PaymentModal
						isOpen={isPaymentModalOpen}
						onClose={onPaymentModalClose}
					/>
				</Box>
			) : (
				<Box>
					<Flex
						align={"center"}
						w={"100%"}
						h={"327px"}
						bgPos={"center"}
						bgRepeat={"no-repeat"}
						bgImage={logoMayak}
						bgSize={"cover"}
						mt={"40px"}
					>
						<Flex
							flexDir="column"
							h={"100%"}
							justify={"flex-end"}
							marginLeft={"15px"}
							pb={"25px"}
						>
							<Heading
								fontFamily={"Oswald"}
								color={"#1f243a"}
								fontSize={"25px"}
								fontWeight={"600"}
								textTransform={"uppercase"}
								mb={'-80px'}
								ml={'20px'}
								// mt={'200px'}
							>
								<span
									style={{
										marginTop: '120px',
										color: "#bf3132",
										fontFamily: "Oswald",
										marginBottom: '120px'
									}}
								>
									Благотворительный
								</span>
								<br />
								фонд «Дом с маяком»
							</Heading>
							{/* <Button mt={8} colorScheme="teal" size="lg" onClick={onPaymentModalOpen}>
								Помочь
							</Button> */}
						</Flex>
					</Flex>
					<Flex
						justify={"center"}
						width={"100%"}
						pt={"36px"}
						pb={"35px"}
						px={"15px"}
					>
						<Flex>
							<Flex direction={"column"}>
								<Flex mt={'40px'}>
									<Box
										marginLeft={"8px"}
										display={"flex"}
										justifyContent={"center"}
										alignItems={"center"}
										
										css={`
											width: 70px;
											height: 30px;
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
											Цель
										</Text>
									</Box>
									<Text
										fontWeight={500}
										fontSize={"20px"}
										fontFamily={"Oswald"}
										textTransform={"uppercase"}
										ml={"5px"}
										color={"#1f243a"}
									>
										нашего фонда
									</Text>
								</Flex>
								<Text mt={"17px"} color={"#1f243a"} fontSize={"14px"}>
									Наша миссия — помогать семьям с неизлечимо больными детьми жить полноценной жизнью, несмотря на диагноз. Мы стремимся сделать так, чтобы каждый ребенок, независимо от тяжести заболевания, мог радоваться каждому дню и получать необходимую поддержку.
								</Text>
								<ul
									style={{
										listStyle: "square",
										marginLeft: "18px",
										marginTop: "33px",
										fontSize: "14px",
									}}
								>
									<li style={{ color: "#33438e" }}>
										<span style={{ color: "#1f243a" }}>
											Паллиативная помощь детям: организация выездной службы помощи на дому, обеспечение семей необходимыми лекарствами и медицинским оборудованием, обучение родителей навыкам ухода за тяжелобольным ребенком
										</span>
									</li>
									<li style={{ color: "#33438e" }}>
										<span style={{ color: "#1f243a" }}>
											Психологическая поддержка: помощь семьям в преодолении эмоциональных трудностей, организация групп поддержки для родителей и братьев/сестер, индивидуальные консультации психологов
										</span>
									</li>
									<li style={{ color: "#33438e" }}>
										<span style={{ color: "#1f243a" }}>
											Развитие детской паллиативной помощи: обучение специалистов, внедрение современных методик ухода, создание системы непрерывной поддержки семей с тяжелобольными детьми
										</span>
									</li>
									<li style={{ color: "#33438e" }}>
										<span style={{ color: "#1f243a" }}>
											Прозрачность и открытость: регулярная публикация отчетов о работе фонда, подробная информация о расходовании средств, возможность для каждого донора увидеть, как его помощь меняет жизнь семей
										</span>
									</li>
								</ul>
								{/* <Image src={logoMayak} mt={"30px"} />
								<Box
									pos={"relative"}
									h={"350px"}
									bgColor={"#f8f8f8"}
									borderRadius={"3px"}
									mt={"-200px"}
									w={"calc(100% + 2px)"}
									ml={"-1px"}
								>
									<Box
										pos={"absolute"}
										top={"-30px"}
										left={"10px"}
										w={"70px"}
										h={"70px"}
										bgRepeat={"no-repeat"}
										bgImage={logoMayak}
										bgSize={"60px"}
									/> */}
									{/* <Text p={"18px"} fontSize={"14px"}>
										Благотворительность для меня является не только важным, но и
										простым делом, которое каждый из нас может сделать, чтобы
										помочь тем, кто находится в беде или нуждается в поддержке.
										Особенно в настоящее время, когда многие люди оказываются в
										трудных ситуациях из-за военных действий. Поддержка детских
										домов, талантливой молодежи и защитников нашей Родины —
										очень важная и благородная задача.
										<br />
										<br />У меня нет морального права оставаться безучастным.
										Наши дети, наша молодежь и наши защитники — это наше
										будущее. Наша сила заключается в единстве!
									</Text> */}
								{/* </Box> */}
							</Flex>
						</Flex>
					</Flex>
					{projects.length > 0 && (
						<Flex
							justify={"center"}
							width={"100%"}
							pt={"36px"}
							pb={"35px"}
							bgColor={"#1f243a"}
						>
							<Flex flexDir={"column"}>
								<Flex mb={"25px"}>
									<Box
										marginLeft={"8px"}
										display={"flex"}
										justifyContent={"center"}
										alignItems={"center"}
										css={`
											width: 100px;
											height: 30px;
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
											Проекты
										</Text>
									</Box>
									<Text
										fontWeight={500}
										fontSize={"20px"}
										fontFamily={"Oswald"}
										textTransform={"uppercase"}
										ml={"5px"}
										color={"#fff"}
									>
										фонда
									</Text>
								</Flex>
								<Flex flexDir={"column"} align={"center"} justify={"center"}>
									{projects
										.slice(0, 3)
										.map(
											(
												{ title, content, image, currentAmount, targetAmount },
												i
											) => (
												<Box key={i} mt={i > 0 && "10px"}>
													<ProjectCard
														title={title}
														content={content}
														image={image}
														targetAmount={targetAmount}
														currentAmount={currentAmount}
														onPaymentModalOpen={onPaymentModalOpen}
													/>
												</Box>
											)
										)}
								</Flex>
							</Flex>
						</Flex>
					)}
					{news.length > 0 && (
						<Flex
							flexDir={"column"}
							align={"center"}
							justify={"center"}
							width={"100%"}
							pt={"36px"}
							pb={"35px"}
							bgColor={"#fff"}
							px={"15px"}
						>
							<Flex flexDir={"column"}>
								<Flex flexDirection={"column"}>
									<Heading
										fontFamily={"Oswald"}
										color={"#1f243a"}
										fontSize={"30px"}
										fontWeight={700}
										textTransform={"uppercase"}
										mb={"25px"}
									>
										Новости
									</Heading>
									<Flex justify={"start"} flexWrap={"wrap"}>
										{news
											.slice(0, 3)
											.map(({ title, content, mainPicture, createdAt }, i) => (
												<Box mt={i !== 0 && "10px"} key={i}>
													<NewCard
														i={i}
														key={i}
														createdAt={createdAt}
														image={mainPicture}
														description={content}
														title={title}
													/>
												</Box>
											))}
									</Flex>
									<Flex justify={"center"} mt={"45px"}>
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
											marginRight={"23px"}
											onClick={() => navigate("/novosty")}
										>
											Еще новости
										</Button>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
					)}
					{participants.length > 0 && (
						<Flex width={"100%"} pt={"34px"} pb={"35px"} px={"15px"}>
							<Flex flexDir={"column"} w={"100%"}>
								<Heading
									fontFamily={"Oswald"}
									color={"#1f243a"}
									fontSize={"20px"}
									fontWeight={700}
									textTransform={"uppercase"}
									mb={"34px"}
								>
									Попечительский совет
								</Heading>
								<Flex
									flexDir={"column"}
									w={"100%"}
									align={"center"}
									justify={"center"}
								>
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
						</Flex>
					)}
					{thanks.length > 0 && (
						<Flex
							width={"100%"}
							pt={"34px"}
							pb={"35px"}
							bgImage={"linear-gradient(to top, #f2f5f8 0%, #ffffff 100%)"}
							px={"15px"}
						>
							<Flex flexDir={"column"} w={"100%"}>
								<Heading
									fontFamily={"Oswald"}
									color={"#1f243a"}
									fontSize={"20px"}
									fontWeight={700}
									textTransform={"uppercase"}
									mb={"40px"}
								>
									Благодарности
								</Heading>
								<Thank images={thanks.slice(0, 4)} />
							</Flex>
						</Flex>
					)}
					<PreFooter pdfs={pdfs.slice(0, 2)} />

					<PaymentModal
						isOpen={isPaymentModalOpen}
						onClose={onPaymentModalClose}
					/>
				</Box>
			)}
		</>
	);
}
