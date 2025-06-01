import {
	Box,
	Button,
	Flex,
	FormLabel,
	Heading,
	Icon,
	Image,
	Input,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import { default as React, useRef, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { uploadImage } from "../../../../api/media";
import { createParticipant as createParticipantAPI } from "../../../../api/participants";
import "./style.css";

const labels = {
	title: "Имя (ФИО, ФО, ФИ):",
	content: "Описание:",
	position: "Должность:",
	mainPicture: "Добавьте картинку:",
};

const errorLabels = {
	title: "Название не может быть пустым",
	position: "Должность не может быть пустой",
	mainPicture: "Картинка не может отсутствовать",
};

export const CreateParticipant = () => {
	const toast = useToast();
	const fileRef = useRef(null);
	const formRef = useRef(null);
	const [isTitleEmpty, setIsTitleEmpty] = useState(null);
	const [isContentEmpty, setIsContentEmpty] = useState(null);
	const [isPositionEmpty, setIsPositionEmpty] = useState(null);
	const [isMainPictureEmpty, setIsMainPictureEmpty] = useState(null);
	const [titleLabel, setTitleLabel] = useState(labels.title);
	const [contentLabel, setContentLabel] = useState(labels.content);
	const [positionLabel, setPositionLabel] = useState(labels.position);
	const [mainPictureLabel, setMainPictureLabel] = useState(labels.mainPicture);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [position, setPosition] = useState("");
	const [mainPicture, setMainPicture] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const clearFunc = () => {
		setIsTitleEmpty(null);
		setIsContentEmpty(null);
		setIsPositionEmpty(null);
		setIsMainPictureEmpty(null);
		setTitleLabel(labels.title);
		setContentLabel(labels.content);
		setPositionLabel(labels.position);
		setMainPictureLabel(labels.mainPicture);
		setTitle("");
		setContent("");
		setPosition("");
		setMainPicture(null);
		setIsLoading(false);
	};

	const uploadMultipleFiles = async (mainPicture) => {
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
		let isErr = false;

		if (!title) {
			setTitleLabel(errorLabels.title);
			setIsTitleEmpty(true);

			isErr = true;
		}

		if (!position) {
			setPositionLabel(errorLabels.position);
			setIsPositionEmpty(true);

			isErr = true;
		}

		if (!mainPicture) {
			setMainPictureLabel(errorLabels.mainPicture);
			setIsMainPictureEmpty(true);

			isErr = true;
		}

		return isErr;
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (checkIfErrors()) return;

		setIsLoading(true);

		try {
			const { data: uploadedFilesIds } = await uploadMultipleFiles(mainPicture);

			await createParticipantAPI({
				name: title,
				description: content,
				position,
				image: uploadedFilesIds[0],
			});

		toast({
			title: "Данные успешно загружены на сервер.",
				description: "Можете проверить наличие участника на сайте.",
			status: "success",
			duration: 5000,
			isClosable: true,
		});
		clearFunc();
		} catch (err) {
			console.error(err);
			toast({
				title: "Произошла ошибка при создании участника.",
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
							Добавить новость
						</Heading>
					</Flex>
				</Box>
				<Flex flexDir="column" width={"100%"}>
					<form onSubmit={onSubmit} ref={formRef}>
						<FormLabel as="legend" style={isTitleEmpty ? { color: "red" } : {}}>
							{titleLabel}
						</FormLabel>
						<Input
							type={"text"}
							name="title"
							formTarget="text"
							value={title}
							isInvalid={isTitleEmpty}
							onChange={(e) => {
								setTitleLabel(labels.title);
								setIsTitleEmpty(false);
								setTitle(e.target.value);
							}}
						/>
						<FormLabel
							as="legend"
							style={isPositionEmpty ? { color: "red" } : {}}
						>
							{positionLabel}
						</FormLabel>
						<Input
							type={"text"}
							name="position"
							formTarget="text"
							value={position}
							isInvalid={isPositionEmpty}
							onChange={(e) => {
								setPositionLabel(labels.position);
								setIsPositionEmpty(false);
								setPosition(e.target.value);
							}}
						/>
						<FormLabel
							as="legend"
							mt="10px"
							style={isContentEmpty ? { color: "red" } : {}}
						>
							{contentLabel}
						</FormLabel>
						<Textarea
							name="content"
							value={content}
							isInvalid={isContentEmpty}
							onChange={(e) => {
								setContentLabel(labels.content);
								setIsContentEmpty(false);
								setContent(e.target.value);
							}}
							whiteSpace={"pre-wrap"}
						/>
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
