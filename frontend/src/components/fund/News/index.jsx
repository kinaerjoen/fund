import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import NewCard from "./new-card";
import NewCardBig from "./new-card-big";

const News = ({ news }) => {
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
							Новости
						</Heading>
					</Flex>
					<Flex w={"1133px"} pb={"75px"}>
						<Flex justify={"start"} flexWrap={"wrap"}>
							{news.map(({ id, title, content, mainPicture, createdAt }, i) =>
								i === 0 ? (
									<NewCardBig
										key={i}
										createdAt={createdAt}
										image={mainPicture}
										description={content}
										title={title}
									/>
								) : (
									<Box
										key={i}
										mt={i > 1 ? "20px" : ""}
										ml={i === 1 || (i + 1) % 3 !== 0 ? "20px" : ""}
									>
										<NewCard
											createdAt={createdAt}
											image={mainPicture}
											description={content}
											title={title}
										/>
									</Box>
								)
							)}
						</Flex>
					</Flex>
				</Flex>
			) : (
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
						<Heading fontSize={"30px"} color={"#10131f"} fontFamily={"Oswald"}>
							Новости
						</Heading>
					</Flex>
					<Flex pb={"35px"}>
						<Flex flexDir={"column"}>
							{news.map(({ title, content, mainPicture, createdAt }, i) => (
								<Box key={i} mt={i > 0 ? "10px" : ""}>
									<NewCard
										createdAt={createdAt}
										image={mainPicture}
										description={content}
										title={title}
									/>
								</Box>
							))}
						</Flex>
					</Flex>
				</Flex>
			)}
		</>
	);
};

export default News;
