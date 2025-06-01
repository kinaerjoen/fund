import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import PaymentWithHistory from "../Payment";

const News = ({ news }) => {
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
					<Flex w={"1133px"} pb={"75px"}>
						<Flex justify={"center"}>
							<PaymentWithHistory
								cardBg={"#f8f8f8"}
								background={"#f2f5f8"}
								ml={true}
							/>
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
						pb={"35px"}
					>
						<Heading fontSize={"30px"} color={"#10131f"} fontFamily={"Oswald"}>
							Как помочь
						</Heading>
					</Flex>
					<Flex pb={"35px"}>
						<Flex justify={"center"}>
							<PaymentWithHistory
								cardBg={"#f8f8f8"}
								background={"#f2f5f8"}
								ml={true}
							/>
						</Flex>
					</Flex>
				</Flex>
			)}
		</>
	);
};

export default News;
