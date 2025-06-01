import {
	Box,
	Button,
	Flex,
	FormLabel,
	Heading,
	Input,
	Text,
	useToast,
} from "@chakra-ui/react";
import { default as React, useRef, useState } from "react";
import { uploadImage } from "../../../../api/media";
import { createPdf } from "../../../../api/pdfs";
import "./style.css";

const labels = {
	title: "Название:",
	mainPicture: "Добавьте файл PDF:",
};

const errorLabels = {
	title: "Название не может быть пустым",
	mainPicture: "Файл PDF не может отсутствовать",
};

export const CreatePdf = () => {
	const toast = useToast();
	const fileRef = useRef(null);
	const formRef = useRef(null);
	const [isPdfEmpty, setIsPdfEmpty] = useState(null);
	const [pdfLabel, setPdfLabel] = useState(labels.mainPicture);
	const [pdf, setPdf] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isTitleEmpty, setIsTitleEmpty] = useState(null);
	const [titleLabel, setTitleLabel] = useState(labels.title);
	const [title, setTitle] = useState("");

	const clearFunc = () => {
		setIsPdfEmpty(null);
		setPdfLabel(labels.mainPicture);
		setPdf(null);
		setIsLoading(false);
		setTitle("");
		setTitleLabel(labels.title);
		setIsTitleEmpty(null);
	};

	const uploadFile = async (file) => {
		const formData = new FormData();
		formData.append("files", file);
		return await uploadImage(formData);
	};

	const handleFileChange = (e) => {
		const file = e?.target?.files?.[0];
		setPdfLabel(labels.mainPicture);
		setIsPdfEmpty(false);
		setPdf(file);
	};

	const checkIfErrors = () => {
		let hasErrors = false;

		if (!pdf) {
			setPdfLabel(errorLabels.mainPicture);
			setIsPdfEmpty(true);
			hasErrors = true;
		}

		if (!title) {
			setTitleLabel(errorLabels.title);
			setIsTitleEmpty(true);
			hasErrors = true;
		}

		return hasErrors;
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (checkIfErrors()) return;

		setIsLoading(true);

		try {
			const { data: uploadedFilesIds } = await uploadFile(pdf);
			
			// Calculate file size in MB and format it
			const fileSizeInMB = (pdf.size / (1024 * 1024)).toFixed(2);
			const formattedSize = `${fileSizeInMB} MB`;

			await createPdf({
				title,
				pdf: uploadedFilesIds[0],
				size: formattedSize
			});

			toast({
				title: "Данные успешно загружены на сервер.",
				description: "Можете проверить наличие PDF на сайте.",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
			clearFunc();
		} catch (err) {
			console.error("PDF creation error:", err);
			toast({
				title: "Произошла ошибка при создании PDF.",
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
							Добавить PDF
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
							style={isPdfEmpty ? { color: "red" } : {}}
						>
							{pdfLabel}
						</FormLabel>
						{pdf && (
							<Flex justifyContent={"center"}>
								<Text mb={"20px"}>{pdf?.name}</Text>
							</Flex>
						)}
						<label className="input-file">
							<Input
								type="file"
								height={"50px"}
								padding="10px"
								name="file"
								onChange={handleFileChange}
								ref={fileRef}
								accept=".pdf"
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
