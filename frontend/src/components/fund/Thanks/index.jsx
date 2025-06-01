import { Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Thank from "./thank";

const Thanks = ({ thanks = [] }) => {
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
							Благодарности
						</Heading>
					</Flex>
					<Flex w={"1133px"} pb={"75px"}>
						<Thank images={thanks} />
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
							Благодарности
						</Heading>
					</Flex>
					<Flex py={"35px"}>
						<Thank images={thanks} />
					</Flex>
				</Flex>
			)}
		</>
	);
};

export default Thanks;
