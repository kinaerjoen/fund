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
import { createProject as createProjectAPI } from "../../../../api/projects";
import "./style.css";

const labels = {
	title: "Название:",
	content: "Описание:",
	targetAmount: "Целевая сумма проекта:",
	currentAmount: "Текущая сумма проекта:",
	mainPicture: "Обложка проекта:",
};

const errorLabels = {
	title: "Название не может быть пустым",
	content: "Описание не может быть пустым",
	targetAmount: "Целевая сумма проекта не может быть пустой",
	currentAmount: "Текущая сумма проекта не может быть пустой",
	mainPicture: "Обложка не может отсутствовать",
	amountIsNotNumber: "Сумма должна быть положительным целым числом",
};

const onlyNumbersReg = new RegExp("^[0-9]+$");

export const CreateProject = () => {
	const toast = useToast();
	const fileRef = useRef(null);
	const formRef = useRef(null);
	const [isTitleEmpty, setIsTitleEmpty] = useState(null);
	const [isTargetAmountEmpty, setIsTargetAmountEmpty] = useState(null);
	const [isCurrentAmountEmpty, setIsCurrentAmountEmpty] = useState(null);
	const [isContentEmpty, setIsContentEmpty] = useState(null);
	const [isMainPictureEmpty, setIsMainPictureEmpty] = useState(null);
	const [titleLabel, setTitleLabel] = useState(labels.title);
	const [contentLabel, setContentLabel] = useState(labels.content);
	const [targetAmountLabel, setTargetAmountLabel] = useState(
		labels.targetAmount
	);
	const [currentAmountLabel, setCurrentAmountLabel] = useState(
		labels.currentAmount
	);
	const [mainPictureLabel, setMainPictureLabel] = useState(labels.mainPicture);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [targetAmount, setTargetAmount] = useState("");
	const [currentAmount, setCurrentAmount] = useState("");
	const [mainPicture, setMainPicture] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const clearFunc = () => {
		setIsTitleEmpty(null);
		setIsContentEmpty(null);
		setIsTargetAmountEmpty(null);
		setIsCurrentAmountEmpty(null);
		setIsMainPictureEmpty(null);
		setTitleLabel(labels.title);
		setContentLabel(labels.content);
		setTargetAmountLabel(labels.targetAmount);
		setCurrentAmountLabel(labels.currentAmount);
		setMainPictureLabel(labels.mainPicture);
		setTitle("");
		setContent("");
		setTargetAmount("");
		setCurrentAmount("");
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
		let hasErrors = false;

		if (!title) {
			setTitleLabel(errorLabels.title);
			setIsTitleEmpty(true);
			hasErrors = true;
		}

		if (!content) {
			setContentLabel(errorLabels.content);
			setIsContentEmpty(true);
			hasErrors = true;
		}

		if (!targetAmount) {
			setTargetAmountLabel(errorLabels.targetAmount);
			setIsTargetAmountEmpty(true);
			hasErrors = true;
		} else if (!onlyNumbersReg.test(targetAmount)) {
			setTargetAmountLabel(errorLabels.amountIsNotNumber);
			setIsTargetAmountEmpty(true);
			hasErrors = true;
		}

		if (!currentAmount) {
			setCurrentAmountLabel(errorLabels.currentAmount);
			setIsCurrentAmountEmpty(true);
			hasErrors = true;
		} else if (!onlyNumbersReg.test(currentAmount)) {
			setCurrentAmountLabel(errorLabels.amountIsNotNumber);
			setIsCurrentAmountEmpty(true);
			hasErrors = true;
		}

		if (!mainPicture) {
			setMainPictureLabel(errorLabels.mainPicture);
			setIsMainPictureEmpty(true);
			hasErrors = true;
		}

		return hasErrors;
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (checkIfErrors()) return;

		setIsLoading(true);

		try {
			// Upload main picture first
			const { data: uploadedFilesIds } = await uploadMultipleFiles(mainPicture);

			// Create project with the uploaded image
			await createProjectAPI({
				title,
				content,
				targetAmount: targetAmount.toString(),
				currentAmount: currentAmount.toString(),
				image: uploadedFilesIds[0],
				medias: [] // Initialize with empty array, can be updated later if needed
			});

			toast({
				title: "Проект успешно создан.",
				description: "Можете проверить наличие проекта на сайте.",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
			clearFunc();
		} catch (err) {
			console.error("Project creation error:", err);
			toast({
				title: "Произошла ошибка при создании проекта.",
				description: err.response?.data?.message || "Пожалуйста, попробуйте еще раз.",
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
							Добавить проект
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
						/>
						<FormLabel
							as="legend"
							style={isTargetAmountEmpty ? { color: "red" } : {}}
						>
							{targetAmountLabel}
						</FormLabel>
						<Input
							type={"text"}
							name="targetAmount"
							formTarget="text"
							value={targetAmount}
							isInvalid={isTargetAmountEmpty}
							onChange={(e) => {
								if (e.target.value && !onlyNumbersReg.test(e.target.value)) {
									setIsTargetAmountEmpty(true);
									setTargetAmountLabel(errorLabels.amountIsNotNumber);
									return;
								}

								setTargetAmountLabel(labels.targetAmount);
								setIsTargetAmountEmpty(false);
								setTargetAmount(e.target.value);
							}}
						/>
						<FormLabel
							as="legend"
							style={isCurrentAmountEmpty ? { color: "red" } : {}}
						>
							{currentAmountLabel}
						</FormLabel>
						<Input
							type={"text"}
							name="currentAmount"
							formTarget="text"
							value={currentAmount}
							isInvalid={isCurrentAmountEmpty}
							onChange={(e) => {
								if (e.target.value && !onlyNumbersReg.test(e.target.value)) {
									setIsCurrentAmountEmpty(true);
									setCurrentAmountLabel(errorLabels.amountIsNotNumber);
									return;
								}

								setCurrentAmountLabel(labels.currentAmount);
								setIsCurrentAmountEmpty(false);
								setCurrentAmount(e.target.value);
							}}
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
