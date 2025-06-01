import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { PaymentModal } from "../modals/paymentModal";
import ProjectCard from "./project-card";

const Projects = ({ projects }) => {
	const {
		isOpen: isPaymentModalOpen,
		onOpen: onPaymentModalOpen,
		onClose: onPaymentModalClose,
	} = useDisclosure();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
							Проекты
						</Heading>
					</Flex>
					<Flex w={"1133px"} pb={"75px"}>
						<Flex justify={"start"} flexWrap={"wrap"}>
							{projects.map(
								({ title, content, image, currentAmount, targetAmount }, i) => (
									<Box
										key={i}
										mt={i > 2 ? "20px" : ""}
										ml={i % 3 !== 0 ? "20px" : ""}
									>
										<ProjectCard
											content={content}
											currentAmount={currentAmount}
											targetAmount={targetAmount}
											title={title}
											image={image}
											onPaymentModalOpen={onPaymentModalOpen}
										/>
									</Box>
								)
							)}
						</Flex>
					</Flex>

					<PaymentModal
						isOpen={isPaymentModalOpen}
						onClose={onPaymentModalClose}
					/>
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
						mb={"35px"}
					>
						<Heading fontSize={"30px"} color={"#10131f"} fontFamily={"Oswald"}>
							Проекты
						</Heading>
					</Flex>
					<Flex pb={"35px"}>
						<Flex flexDir={"column"} justify={"center"}>
							{projects.map(
								({ title, content, image, currentAmount, targetAmount }, i) => (
									<Box key={i} mt={i > 0 && "10px"}>
										<ProjectCard
											content={content}
											currentAmount={currentAmount}
											targetAmount={targetAmount}
											title={title}
											image={image}
											onPaymentModalOpen={onPaymentModalOpen}
										/>
									</Box>
								)
							)}
						</Flex>
					</Flex>

					<PaymentModal
						isOpen={isPaymentModalOpen}
						onClose={onPaymentModalClose}
					/>
				</Flex>
			)}
		</>
	);
};

export default Projects;
