import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as pdf } from "../../../assets/pdf.svg";

const PdfItem = ({ pdf: pdfItem, i, width }) => {
	return (
		<>
			{document.documentElement.clientWidth > 767 ? (
				<Flex
					flexDir={"column"}
					w={width || "205px"}
					h={"260px"}
					borderRadius={"3px"}
					bgColor={"#f8f8f8"}
					p={"30px"}
					ml={i ? "20px" : ""}
					justify={"space-between"}
				>
					<Box>
						<Icon w={"38px"} h={"38px"} mb={"20px"} as={pdf} />
						<Text
							fontSize={"16px"}
							color={"#1f243a"}
							css={`
								text-overflow: ellipsis;
								word-wrap: keep-all;
								overflow: hidden;
								max-height: 4.8em;
								line-height: 1.2em;
								display: -webkit-box;
								-webkit-line-clamp: 4;
								-webkit-box-orient: vertical;
							`}
						>
							{pdfItem.title}
						</Text>
					</Box>
					<Box>
						<Text fontSize={"14px"} color={"#666666"} mb={"4px"}>
							pdf, {pdfItem.size}
						</Text>
						<a href={`${process.env.REACT_APP_SERVER}/media/${pdfItem.pdf}`}>
							<Text
								fontSize={"14px"}
								textDecoration={"underline"}
								_hover={{ textDecoration: "none" }}
								color={"#bf3132"}
								cursor={"pointer"}
							>
								Скачать
							</Text>
						</a>
					</Box>
				</Flex>
			) : (
				<Flex
					flexDir={"column"}
					w={"140px"}
					h={"210px"}
					borderRadius={"3px"}
					bgColor={"#f8f8f8"}
					px={"15px"}
					py={"20px"}
					ml={i ? "20px" : ""}
					justify={"space-between"}
				>
					<Box>
						<Icon w={"38px"} h={"38px"} mb={"20px"} as={pdf} />
						<Text
							fontSize={"16px"}
							color={"#1f243a"}
							css={`
								text-overflow: ellipsis;
								word-wrap: keep-all;
								overflow: hidden;
								max-height: 2.4em;
								line-height: 1.2em;
								display: -webkit-box;
								-webkit-line-clamp: 2;
								-webkit-box-orient: vertical;
							`}
						>
							{pdfItem.title}
						</Text>
					</Box>
					<Box>
						<Text fontSize={"14px"} color={"#666666"} mb={"4px"}>
							pdf, {pdfItem.size}
						</Text>
						<a href={`${process.env.REACT_APP_SERVER}/media/${pdfItem.pdf}`}>
							<Text
								fontSize={"14px"}
								textDecoration={"underline"}
								_hover={{ textDecoration: "none" }}
								color={"#bf3132"}
								cursor={"pointer"}
							>
								Скачать
							</Text>
						</a>
					</Box>
				</Flex>
			)}
		</>
	);
};

export default PdfItem;
