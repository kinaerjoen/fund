import { Box, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import blueBg from "../../../assets/blueBgForThank.png";
import increase from "../../../assets/increase.svg";
import { getMediaUrl } from "../../../helpers/getMediaUrl";

const ThankItem = ({ i, onOpenImageViewer, image }) => {
	const [hover, setHover] = useState(false);

	return (
		<>
			{document.documentElement.clientWidth > 767 ? (
				<Box
					w={"260px"}
					h={"360px"}
					pos={"relative"}
					onClick={() => onOpenImageViewer(i)}
					ml={i && i % 4 !== 0 && "31px"}
					mt={i > 3 && "20px"}
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					cursor={"pointer"}
				>
					<Image src={getMediaUrl(image)} />
					<Box
						position={"absolute"}
						left={0}
						bottom={0}
						zIndex={1}
						w={"260px"}
						height={"360px"}
					>
						<Image
							pos={"absolute"}
							w={"260px"}
							h={"360px"}
							src={blueBg}
							opacity={hover ? 0.5 : 0}
						/>
						<Image
							w={"42px"}
							h={"42px"}
							left={"45%"}
							top={"47%"}
							pos={"absolute"}
							src={increase}
							opacity={hover ? 1 : 0}
						/>
					</Box>
				</Box>
			) : (
				<Box
					w={"140px"}
					h={"190px"}
					pos={"relative"}
					onClick={() => onOpenImageViewer(i)}
					mt={i > 1 && "10px"}
					ml={i !== 0 && i % 2 && "10px"}
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					cursor={"pointer"}
				>
					<Image src={getMediaUrl(image)} />
					<Box
						position={"absolute"}
						left={0}
						bottom={0}
						zIndex={1}
						w={"140px"}
						height={"190px"}
					>
						<Image
							pos={"absolute"}
							w={"140px"}
							h={"190px"}
							src={blueBg}
							opacity={hover ? 0.5 : 0}
						/>
						<Image
							w={"42px"}
							h={"42px"}
							left={"45%"}
							top={"47%"}
							pos={"absolute"}
							src={increase}
							opacity={hover ? 1 : 0}
						/>
					</Box>
				</Box>
			)}
		</>
	);
};

const Thank = ({ images }) => {
	const [isShowBigThank, setIsShowBigThank] = useState(false);
	const [currentThank, setCurrentThank] = useState(0);

	const onCloseImageViewer = () => {
		setCurrentThank(0);
		setIsShowBigThank(false);
	};

	const onOpenImageViewer = (index) => {
		setCurrentThank(index);
		setIsShowBigThank(true);
	};

	return (
		<>
			{document.documentElement.clientWidth > 767 ? (
				<Box w={"100%"}>
					<Flex w={"100%"}>
						<Flex flexWrap={"wrap"}>
							{images.map(({ image }, i) => (
								<ThankItem
									key={i}
									i={i}
									image={image}
									onOpenImageViewer={onOpenImageViewer}
								/>
							))}
						</Flex>
					</Flex>
					{isShowBigThank && (
						<ImageViewer
							src={images.map(({ image }) => getMediaUrl(image))}
							currentIndex={currentThank}
							closeOnClickOutside={true}
							onClose={onCloseImageViewer}
							backgroundStyle={{
								backgroundColor: "rgba(0,0,0,0.8)",
								marginTop: "100px",
								height: "calc(100% - 100px)",
								zIndex: 100,
							}}
						/>
					)}
				</Box>
			) : (
				<Box w={"100%"}>
					<Flex w={"100%"} justify={"center"}>
						<Flex w={"100%"} justify={"center"} wrap={"wrap"}>
							{images.map(({ image }, i) => (
								<ThankItem
									key={i}
									i={i}
									image={image}
									onOpenImageViewer={onOpenImageViewer}
								/>
							))}
						</Flex>
					</Flex>
					{isShowBigThank && (
						<ImageViewer
							src={images.map(({ image }) => getMediaUrl(image))}
							currentIndex={currentThank}
							closeOnClickOutside={true}
							onClose={onCloseImageViewer}
							backgroundStyle={{
								backgroundColor: "rgba(0,0,0,0.8)",
								marginTop: "40px",
								height: "calc(100% - 40px)",
								zIndex: 100,
							}}
						/>
					)}
				</Box>
			)}
		</>
	);
};

export default Thank;
