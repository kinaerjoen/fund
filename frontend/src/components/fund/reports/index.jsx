import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ReportCard from "./report-card";

const Reports = ({ reports }) => {
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
							Отчеты
						</Heading>
					</Flex>
					<Flex w={"1133px"} pb={"75px"}>
						<Flex justify={"start"} flexWrap={"wrap"}>
							{reports.map(({ title, content, medias, createdAt }, i) => (
								<Box key={i} mt={i > 0 ? "50px" : ""}>
									<ReportCard
										content={content}
										title={title}
										medias={medias}
										createdAt={createdAt}
									/>
									{i !== reports.length - 1 && (
										<Box
											bgColor={"#f2f5f8"}
											w={"100%"}
											h={"2px"}
											borderRadius={"1px"}
										/>
									)}
								</Box>
							))}
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
						mb={"35px"}
					>
						<Heading fontSize={"30px"} color={"#10131f"} fontFamily={"Oswald"}>
							Отчеты
						</Heading>
					</Flex>
					<Flex pb={"30px"}>
						<Flex justify={"start"} flexWrap={"wrap"}>
							{reports.map(({ title, content, medias, createdAt }, i) => (
								<Box key={i} mt={i > 0 ? "35px" : ""}>
									<ReportCard
										content={content}
										title={title}
										medias={medias}
										createdAt={createdAt}
									/>
									{i !== reports.length - 1 && (
										<Box
											bgColor={"#f2f5f8"}
											w={"100%"}
											h={"2px"}
											borderRadius={"1px"}
										/>
									)}
								</Box>
							))}
						</Flex>
					</Flex>
				</Flex>
			)}
		</>
	);
};

export default Reports;
