import {
	Box,
	Button,
	Flex,
	FormLabel,
	Heading,
	Icon,
	Image,
	Input,
	useToast,
} from "@chakra-ui/react";
import { default as React, useRef, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { uploadImage } from "../../../../api/media";
import { createThank } from "../../../../api/thanks";
import "./style.css";

const labels = {
	mainPicture: "Добавьте картинку:",
};

const errorLabels = {
	mainPicture: "Картинка не может отсутствовать",
};

export const CreateThank = () => {
	const toast = useToast();
	const fileRef = useRef(null);
	const formRef = useRef(null);
	const [isMainPictureEmpty, setIsMainPictureEmpty] = useState(null);
	const [mainPictureLabel, setMainPictureLabel] = useState(labels.mainPicture);
	const [mainPicture, setMainPicture] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const clearFunc = () => {
		setIsMainPictureEmpty(null);
		setMainPictureLabel(labels.mainPicture);
		setMainPicture(null);
		setIsLoading(false);
	};

	const uploadFile = async (mainPicture) => {
		const formData = new FormData();
		formData.append("files", mainPicture);
		return await uploadImage(formData);
	};

	const handleFileChange = (e) => {
		const file = e?.target?.files?.[0];
		setMainPictureLabel(labels.mainPicture);
		setIsMainPictureEmpty(false);
		setMainPicture(file);
	};

	const checkIfErrors = () => {
		if (!mainPicture) {
			setMainPictureLabel(errorLabels.mainPicture);
			setIsMainPictureEmpty(true);
			return true;
		}
		return false;
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (checkIfErrors()) return;

		setIsLoading(true);

		try {
			const { data: uploadedFilesIds } = await uploadFile(mainPicture);

			await createThank({
				image: uploadedFilesIds[0],
			});

			toast({
				title: "Данные успешно загружены на сервер.",
				description: "Можете проверить наличие благодарности на сайте.",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
			clearFunc();
		} catch (err) {
			console.error(err);
			toast({
				title: "Произошла ошибка при создании благодарности.",
				description: "Пожалуйста, попробуйте еще раз.",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Box
			maxW={"600px"}
			w={"100%"}
			mt={"20px"}
			py={"18px"}
			px={"18px"}
			border={"1px"}
			borderColor={"gray.300"}
			borderRadius={"7px"}
			mx={"10px"}
		>
			<Box>
				<Box>
					<Flex justifyContent={"center"}>
						<Heading marginBottom={"20px"} fontSize={"25px"}>
							Добавить награду
						</Heading>
					</Flex>
				</Box>
				<Flex flexDir="column" width={"100%"}>
					<form onSubmit={onSubmit} ref={formRef}>
						<FormLabel
							as="legend"
							mt="10px"
							style={isMainPictureEmpty ? { color: "red" } : {}}
						>
							{mainPictureLabel}
						</FormLabel>
						{mainPicture && (
							<Flex justifyContent={"center"}>
								<Flex
									flexDir="column"
									align="center"
									mb="10px"
									pos={"relative"}
									width={"fit-content"}
								>
									<Image
										height="200px"
										borderRadius={5}
										style={{ objectFit: "scale-down" }}
										src={URL.createObjectURL(mainPicture)}
									/>
									<Button
										w={"min-content"}
										minW={"min-content"}
										h={"min-content"}
										p={0}
										m={0}
										bgColor={"red"}
										_hover={{}}
										_active={{}}
										position={"absolute"}
										top={1}
										right={1}
										onClick={() => setMainPicture(null)}
									>
										<Icon fontSize="26" as={MdDeleteForever} />
									</Button>
								</Flex>
							</Flex>
						)}
						<label className="input-file">
							<Input
								type="file"
								height={"50px"}
								padding="10px"
								name="image"
								onChange={handleFileChange}
								ref={fileRef}
							/>
							<span>Нажмите, чтобы выбрать файл</span>
						</label>
						<Box
							paddingX={0}
							w={"100%"}
							display={"flex"}
							justifyContent={"center"}
							mt={"20px"}
						>
							<Button
								w={"100%"}
								py={"25px"}
								type="submit"
								bgColor={"green"}
								color={"white"}
								fontWeight={"600"}
								_hover={{
									bgColor: "black",
								}}
								isLoading={isLoading}
							>
								Опубликовать
							</Button>
						</Box>
					</form>
				</Flex>
			</Box>
		</Box>
	);
};
