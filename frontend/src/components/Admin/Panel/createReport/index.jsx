import {
	Box,
	Button,
	Flex,
	FormLabel,
	Heading,
	Image,
	Input,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import { default as React, useRef, useState } from "react";
import { uploadImage } from "../../../../api/media";
import { createReport } from "../../../../api/reports";
import "./style.css";

const labels = {
	title: "Название:",
	content: "Описание:",
	media: "Медиа файлы:",
};

const errorLabels = {
	title: "Название не может быть пустым",
	content: "Описание не может быть пустым",
	media: "Должен быть хотя бы 1 медиа файл",
};

export const CreateReport = () => {
	const toast = useToast();
	const formRef = useRef(null);
	const [isTitleEmpty, setIsTitleEmpty] = useState(null);
	const [isContentEmpty, setIsContentEmpty] = useState(null);
	const [isMediaEmpty, setIsMediaEmpty] = useState(null);
	const [titleLabel, setTitleLabel] = useState(labels.title);
	const [contentLabel, setContentLabel] = useState(labels.content);
	const [mediaLabel, setMediaLabel] = useState(labels.media);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [multipleFiles, setMultipleFiles] = useState([]);
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const clearFunc = () => {
		setIsTitleEmpty(null);
		setIsContentEmpty(null);
		setTitleLabel(labels.title);
		setContentLabel(labels.content);
		setTitle("");
		setContent("");
		setMultipleFiles([]);
		setSelectedFiles([]);
		setIsLoading(false);
		setIsMediaEmpty(null);
		setMediaLabel(labels.media);
	};

	const multipleFileChange = (e) => {
		const files = Array.from(e.target.files);
		const images = files.map(file => ({
			content: URL.createObjectURL(file),
			isImage: file.type.split("/")[0] === "image",
		}));

		setSelectedFiles(images);
		setMultipleFiles(files);
		setIsMediaEmpty(false);
		setMediaLabel(labels.media);
	};

	const uploadMultipleFiles = async () => {
		const formData = new FormData();
		multipleFiles.forEach(file => {
			formData.append("files", file);
		});
		return await uploadImage(formData);
	};

	const deleteFiles = () => {
		setMultipleFiles([]);
		setSelectedFiles([]);
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

		if (!multipleFiles.length) {
			setMediaLabel(errorLabels.media);
			setIsMediaEmpty(true);
			hasErrors = true;
		}

		return hasErrors;
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (checkIfErrors()) return;

		setIsLoading(true);

		try {
			const { data: uploadedFilesIds } = await uploadMultipleFiles();

			await createReport({
				title,
				content,
				medias: uploadedFilesIds,
			});

			toast({
				title: "Данные успешно загружены на сервер.",
				description: "Можете проверить наличие отчета на сайте.",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
			clearFunc();
		} catch (err) {
			console.error(err);
			toast({
				title: "Произошла ошибка при создании отчета.",
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
							Добавить отчет
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
						<Box className="row mt-3">
							<Box className="col-6">
								<Box className="row">
									<FormLabel
										as="legend"
										mt="20px"
										style={isMediaEmpty ? { color: "red" } : {}}
									>
										{mediaLabel}
									</FormLabel>
									<label className="input-file-multiple">
										<Input
											type="file"
											height={"50px"}
											padding="10px"
											name="files"
											onChange={multipleFileChange}
											multiple
											accept="image/*,video/*"
										/>
										<span>Нажмите, чтобы выбрать файлы</span>
									</label>
								</Box>

								<Flex flexDir={"column"}>
									{selectedFiles.length > 0 && (
										<Flex m={"10px"} mr={0} justifyContent={"flex-end"}>
											<Button
												p={"8px"}
												h={"32px"}
												bgColor={"red"}
												color={"white"}
												_hover={{
													bgColor: "red.600",
												}}
												onClick={deleteFiles}
											>
												Очистить файлы
											</Button>
										</Flex>
									)}
									{selectedFiles.length > 0 &&
										selectedFiles.map(({ content: url, isImage }, i) => (
											<Flex justifyContent={"center"} key={i}>
												<Flex
													flexDir="column"
													align="center"
													mb="10px"
													pos={"relative"}
													width={"fit-content"}
												>
													{isImage ? (
														<Image
															height="200px"
															borderRadius={5}
															style={{ objectFit: "scale-down" }}
															src={url}
														/>
													) : (
														<video height="200" controls>
															<source src={url} />
														</video>
													)}
												</Flex>
											</Flex>
										))}
								</Flex>
							</Box>
						</Box>
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
