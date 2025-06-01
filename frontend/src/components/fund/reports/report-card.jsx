import {
	Box,
	Card,
	CardBody,
	Flex,
	Heading,
	Icon,
	Image,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ReactComponent as play } from "../../../assets/play.svg";
import { getMediaUrl } from "../../../helpers/getMediaUrl";

const imageTypes = [
	"jpg",
	"png",
	"gif",
	"webp",
	"cr2",
	"tif",
	"bmp",
	"jxr",
	"psd",
	"ico",
];

const videoTypes = [
	"mp4",
	"m4v",
	"mkv",
	"webm",
	"mov",
	"avi",
	"wmv",
	"flv",
	"mpg",
];

export const parseDate = (date) => {
	const dateItem = new Date(date);
	const yyyy = dateItem.getFullYear();
	let mm = dateItem.getMonth() + 1;
	let dd = dateItem.getDate();

	if (dd < 10) dd = "0" + dd;
	if (mm < 10) mm = "0" + mm;

	return dd + "." + mm + "." + yyyy;
};

const ReportCard = ({ title, content, medias, createdAt }) => {
	const [selectedMedia, setSelectedMedia] = useState(0);

	return (
		<>
			{document.documentElement.clientWidth > 767 ? (
				<Card
					w="1000px"
					minH="360px"
					maxH={"460px"}
					bgColor={"#fff"}
					border={""}
					borderRadius={""}
					p={0}
					boxShadow={""}
					mb={"50px"}
				>
					<CardBody display={"flex"} minH={"360px"} maxH={"460px"} p={0}>
						<Flex flexDir={"column"} mr={"40px"} align={"center"}>
							<Flex>
								{(imageTypes.includes(
									medias[selectedMedia]?.split(".")[
										medias[selectedMedia]?.split(".")?.length - 1
									]
								) && (
									<Image
										w={"430px"}
										h={"260px"}
										objectFit={"cover"}
										borderRadius={"3px"}
										src={getMediaUrl(medias[selectedMedia])}
									/>
								)) ||
									(videoTypes.includes(
										medias[selectedMedia]?.split(".")[
											medias[selectedMedia]?.split(".")?.length - 1
										]
									) && (
										<Box>
											<video
												height="260px"
												width="430px"
												style={{ minHeight: "260px", minWidth: "430px" }}
												controls
											>
												<source src={getMediaUrl(medias[selectedMedia])} />
											</video>
										</Box>
									))}
							</Flex>
							<Flex mt={"10px"}>
								{medias.slice(0, 5).map(
									(media, i) =>
										(imageTypes.includes(
											media?.split(".")[media?.split(".")?.length - 1]
										) && (
											<Flex
												key={i}
												justifyContent={"center"}
												alignItems={"center"}
												pos={"relative"}
												borderRadius={"3px"}
												border={"1px solid white"}
												_hover={{
													borderRadius: "3px",
													border: "1px solid #bf3132",
												}}
												mr={i < 4 && "10px"}
												onClick={() => setSelectedMedia(i)}
											>
												<Box
													position={"absolute"}
													w={"100%"}
													h={"100%"}
													_hover={{
														display: "block",
														opacity: 0.4,
														border: "1px solid #bf3132",
														backgroundColor: "#bf3132",
													}}
													borderRadius={"3px"}
													color={"black"}
													zIndex={11}
													top={0}
													left={0}
												>
													<Box
														w={"100%"}
														h={"100%"}
														opacity={0}
														_hover={{
															opacity: 1,
														}}
														display={"flex"}
														justifyContent={"center"}
														alignItems={"center"}
														cursor={"pointer"}
														color={"black"}
													/>
												</Box>
												<Image
													key={i}
													w={"90px"}
													h={"90px"}
													objectFit={"cover"}
													src={getMediaUrl(media)}
													borderRadius={"3px"}
												/>
											</Flex>
										)) ||
										(videoTypes.includes(
											media?.split(".")[media?.split(".")?.length - 1]
										) && (
											<Flex
												key={i}
												justifyContent={"center"}
												alignItems={"center"}
												pos={"relative"}
												borderRadius={"3px"}
												border={"1px solid white"}
												_hover={{
													borderRadius: "3px",
													border: "1px solid #bf3132",
												}}
												mr={i < 4 && "10px"}
												onClick={() => setSelectedMedia(i)}
											>
												<Box
													position={"absolute"}
													w={"100%"}
													h={"100%"}
													_hover={{
														display: "block",
														opacity: 0.4,
														border: "1px solid #bf3132",
														backgroundColor: "#bf3132",
													}}
													borderRadius={"3px"}
													color={"black"}
													zIndex={11}
													top={0}
													left={0}
												>
													<Box
														w={"100%"}
														h={"100%"}
														opacity={0}
														_hover={{
															opacity: 1,
														}}
														display={"flex"}
														justifyContent={"center"}
														alignItems={"center"}
														cursor={"pointer"}
														color={"black"}
													>
														<Box
															position={"absolute"}
															w={"52px"}
															h={"52px"}
															borderRadius={"50%"}
															bgColor={"#1f243a"}
															opacity={0.5}
														></Box>
														<Icon
															position={"absolute"}
															fontSize={25}
															opacity={1}
															color={"white"}
															zIndex={10}
															as={play}
														/>
													</Box>
												</Box>
												<Box
													position={"absolute"}
													w={"52px"}
													h={"52px"}
													borderRadius={"50%"}
													bgColor={"#1f243a"}
													opacity={0.5}
												></Box>
												<Icon
													position={"absolute"}
													fontSize={25}
													opacity={1}
													color={"white"}
													zIndex={10}
													as={play}
												/>
												<video
													height="90px"
													width="90px"
													style={{ minHeight: "90px", minWidth: "90px" }}
												>
													<source src={getMediaUrl(media)} />
												</video>
											</Flex>
										))
								)}
							</Flex>
						</Flex>
						<Flex flexDir={"column"}>
							<Flex
								bgColor={"#33438e"}
								borderRadius={"3px"}
								w={"72px"}
								h={"19px"}
								justify={"center"}
								align={"center"}
								fontSize={"12px"}
								color={"white"}
								cursor={"default"}
								mb={"30px"}
							>
								{parseDate(createdAt)}
							</Flex>

							<Heading
								fontFamily={"Wix Madefor Display"}
								w={"100%"}
								color="#1f243a"
								fontSize={"20px"}
								fontWeight={"700"}
								maxW={"500px"}
								css={`
									text-overflow: ellipsis;
									word-wrap: keep-all;
									overflow: hidden;
									max-height: 4.5em;
									line-height: 1.5em;
									display: -webkit-box;
									-webkit-line-clamp: 3;
									-webkit-box-orient: vertical;
								`}
							>
								{title}
							</Heading>
							<Text
								mt={"10px"}
								color="#1f243a"
								fontSize={"14px"}
								fontWeight={400}
								textAlign={"left"}
								maxW={"500px"}
								css={`
									text-overflow: ellipsis;
									word-wrap: break-word;
									overflow: hidden;
									max-height: 14.4em;
									line-height: 1.2em;
									display: -webkit-box;
									-webkit-line-clamp: 12;
									-webkit-box-orient: vertical;
								`}
							>
								{content}
							</Text>
						</Flex>
					</CardBody>
				</Card>
			) : (
				<Card
					bgColor={"#fff"}
					border={""}
					borderRadius={""}
					p={0}
					boxShadow={""}
					mb={"50px"}
					px={"15px"}
				>
					<CardBody display={"flex"} flexDir={"column"} p={0}>
						<Flex flexDir={"column"} mb={"20px"}>
							<Flex
								bgColor={"#33438e"}
								borderRadius={"3px"}
								w={"72px"}
								h={"19px"}
								justify={"center"}
								align={"center"}
								fontSize={"12px"}
								color={"white"}
								cursor={"default"}
								mb={"30px"}
							>
								{parseDate(createdAt)}
							</Flex>

							<Heading
								fontFamily={"Wix Madefor Display"}
								w={"100%"}
								color="#1f243a"
								fontSize={"20px"}
								fontWeight={"700"}
								css={`
									text-overflow: ellipsis;
									word-wrap: keep-all;
									overflow: hidden;
									max-height: 4.5em;
									line-height: 1.5em;
									display: -webkit-box;
									-webkit-line-clamp: 3;
									-webkit-box-orient: vertical;
								`}
							>
								{title}
							</Heading>
							<Text
								mt={"10px"}
								color="#1f243a"
								fontSize={"14px"}
								fontWeight={400}
								textAlign={"left"}
								css={`
									text-overflow: ellipsis;
									word-wrap: break-word;
									overflow: hidden;
									max-height: 14.4em;
									line-height: 1.2em;
									display: -webkit-box;
									-webkit-line-clamp: 12;
									-webkit-box-orient: vertical;
								`}
							>
								{content}
							</Text>
						</Flex>
						<Flex flexDir={"column"} mr={"40px"} align={"center"}>
							<Flex>
								{(imageTypes.includes(
									medias[selectedMedia]?.split(".")[
										medias[selectedMedia]?.split(".")?.length - 1
									]
								) && (
									<Image
										w={"290px"}
										h={"176px"}
										objectFit={"cover"}
										borderRadius={"3px"}
										src={getMediaUrl(medias[selectedMedia])}
									/>
								)) ||
									(videoTypes.includes(
										medias[selectedMedia]?.split(".")[
											medias[selectedMedia]?.split(".")?.length - 1
										]
									) && (
										<Box>
											<video
												height="176px"
												width="290px"
												style={{ minHeight: "176px", minWidth: "290px" }}
												controls
											>
												<source src={getMediaUrl(medias[selectedMedia])} />
											</video>
										</Box>
									))}
							</Flex>
							<Flex mt={"10px"} wrap={"wrap"}>
								{medias.slice(0, 5).map(
									(media, i) =>
										(imageTypes.includes(
											media?.split(".")[media?.split(".")?.length - 1]
										) && (
											<Flex
												key={i}
												justifyContent={"center"}
												alignItems={"center"}
												pos={"relative"}
												borderRadius={"3px"}
												border={"1px solid white"}
												_hover={{
													borderRadius: "3px",
													border: "1px solid #bf3132",
												}}
												mr={i < 4 && "10px"}
												onClick={() => setSelectedMedia(i)}
											>
												<Box
													position={"absolute"}
													w={"100%"}
													h={"100%"}
													_hover={{
														display: "block",
														opacity: 0.4,
														border: "1px solid #bf3132",
														backgroundColor: "#bf3132",
													}}
													borderRadius={"3px"}
													color={"black"}
													zIndex={11}
													top={0}
													left={0}
												>
													<Box
														w={"100%"}
														h={"100%"}
														opacity={0}
														_hover={{
															opacity: 1,
														}}
														display={"flex"}
														justifyContent={"center"}
														alignItems={"center"}
														cursor={"pointer"}
														color={"black"}
													/>
												</Box>
												<Image
													key={i}
													w={"90px"}
													h={"90px"}
													objectFit={"cover"}
													src={getMediaUrl(media)}
													borderRadius={"3px"}
												/>
											</Flex>
										)) ||
										(videoTypes.includes(
											media?.split(".")[media?.split(".")?.length - 1]
										) && (
											<Flex
												key={i}
												justifyContent={"center"}
												alignItems={"center"}
												pos={"relative"}
												borderRadius={"3px"}
												border={"1px solid white"}
												_hover={{
													borderRadius: "3px",
													border: "1px solid #bf3132",
												}}
												mr={i < 4 && "10px"}
												onClick={() => setSelectedMedia(i)}
											>
												<Box
													position={"absolute"}
													w={"100%"}
													h={"100%"}
													_hover={{
														display: "block",
														opacity: 0.4,
														border: "1px solid #bf3132",
														backgroundColor: "#bf3132",
													}}
													borderRadius={"3px"}
													color={"black"}
													zIndex={11}
													top={0}
													left={0}
												>
													<Box
														w={"100%"}
														h={"100%"}
														opacity={0}
														_hover={{
															opacity: 1,
														}}
														display={"flex"}
														justifyContent={"center"}
														alignItems={"center"}
														cursor={"pointer"}
														color={"black"}
													>
														<Box
															position={"absolute"}
															w={"52px"}
															h={"52px"}
															borderRadius={"50%"}
															bgColor={"#1f243a"}
															opacity={0.5}
														></Box>
														<Icon
															position={"absolute"}
															fontSize={25}
															opacity={1}
															color={"white"}
															zIndex={10}
															as={play}
														/>
													</Box>
												</Box>
												<Box
													position={"absolute"}
													w={"52px"}
													h={"52px"}
													borderRadius={"50%"}
													bgColor={"#1f243a"}
													opacity={0.5}
												></Box>
												<Icon
													position={"absolute"}
													fontSize={25}
													opacity={1}
													color={"white"}
													zIndex={10}
													as={play}
												/>
												<video
													height="90px"
													width="90px"
													style={{ minHeight: "90px", minWidth: "90px" }}
												>
													<source src={getMediaUrl(media)} />
												</video>
											</Flex>
										))
								)}
							</Flex>
						</Flex>
					</CardBody>
				</Card>
			)}
		</>
	);
};

export default ReportCard;
