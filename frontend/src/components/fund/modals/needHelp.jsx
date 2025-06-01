import {
	Button,
	Checkbox,
	Flex,
	FormLabel,
	Input,
	Stack,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { createHelpRequest } from "../../../api/helpRequests";

const initialIsFieldError = {
	email: false,
	name: false,
	comment: false,
};

const defaultLabels = {
	email: "Ваш e-mail",
	name: "Ваше имя",
	comment: "Комментарий",
};

export const NeedHelp = ({ onClose }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [comment, setComment] = useState("");
	const [labels, setLabels] = useState(defaultLabels);
	const [isFieldError, setIsFieldError] = useState(initialIsFieldError);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isAgreed, setIsAgreed] = useState(false);
	const toast = useToast();

	const validateForm = () => {
		let isValid = true;
		const newIsFieldError = { ...initialIsFieldError };
		const newLabels = { ...defaultLabels };

		if (!name.trim()) {
			newIsFieldError.name = true;
			newLabels.name = "Пожалуйста, введите ваше имя";
			isValid = false;
		}

		if (!email.trim()) {
			newIsFieldError.email = true;
			newLabels.email = "Пожалуйста, введите ваш email";
			isValid = false;
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			newIsFieldError.email = true;
			newLabels.email = "Пожалуйста, введите корректный email";
			isValid = false;
		}

		if (!comment.trim()) {
			newIsFieldError.comment = true;
			newLabels.comment = "Пожалуйста, введите комментарий";
			isValid = false;
		}

		setIsFieldError(newIsFieldError);
		setLabels(newLabels);
		return isValid;
	};

	const onEmailChange = (e) => {
		setIsFieldError({
			...isFieldError,
			email: false,
		});
		setLabels({ ...labels, email: defaultLabels.email });
		setEmail(e.target.value);
	};

	const onNameChange = (e) => {
		setIsFieldError({
			...isFieldError,
			name: false,
		});
		setLabels({ ...labels, name: defaultLabels.name });
		setName(e.target.value);
	};

	const onCommentChange = (e) => {
		setIsFieldError({
			...isFieldError,
			comment: false,
		});
		setLabels({ ...labels, comment: defaultLabels.comment });
		setComment(e.target.value);
	};

	const handleSubmit = async () => {
		console.log("handleSubmit вызван");
		console.log('Starting form submission...');
		console.log('Form data:', { name, email, comment, isAgreed });
		
		if (!validateForm() || !isAgreed) {
			console.log('Form validation failed:', { validateForm: validateForm(), isAgreed });
			if (!isAgreed) {
				toast({
					title: "Ошибка",
					description: "Необходимо дать согласие на обработку персональных данных",
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			}
			return;
		}

		setIsSubmitting(true);
		try {
			console.log('Sending request to server...');
			const response = await createHelpRequest({
				name,
				email,
				comment,
			});
			console.log('Server response:', response);

			toast({
				title: "Успешно",
				description: "Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.",
				status: "success",
				duration: 5000,
				isClosable: true,
			});

			onClose();
		} catch (error) {
			console.error('Error submitting form:', error);
			console.error('Error details:', {
				message: error.message,
				response: error.response?.data,
				status: error.response?.status
			});
			
			toast({
				title: "Ошибка",
				description: "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			{document.documentElement.clientWidth > 767 ? (
				<Flex flexDir={"column"}>
					<form onSubmit={(e) => {
						console.log("onSubmit формы вызван");
						e.preventDefault();
						handleSubmit();
					}}>
						<Flex justify={"space-between"}>
							<Stack gap={""}>
								<FormLabel
									fontSize={"14px"}
									htmlFor="name"
									mb={""}
									color={isFieldError.name ? "#bf3132" : "#1f243a"}
								>
									{labels.name}
								</FormLabel>
								<Input
									pr="4.5rem"
									id="name"
									value={name}
									onChange={onNameChange}
									isInvalid={isFieldError.name}
									bgColor={"#f8f8f8"}
									border={"1px solid #cdcdcd"}
									borderRadius={"3px"}
									h={"60px"}
									w={"320px"}
									_focus={{
										border: "1px solid #bf3132",
										bgColor: "#ffe4e4",
									}}
									_focusVisible={{}}
									placeholder={labels.name}
								/>
							</Stack>
							<Stack gap={""}>
								<FormLabel
									fontSize={"14px"}
									htmlFor="email"
									mb={""}
									color={isFieldError.email ? "#bf3132" : "#1f243a"}
								>
									{labels.email}
								</FormLabel>
								<Input
									id="email"
									type="email"
									onChange={onEmailChange}
									value={email}
									isInvalid={isFieldError.email}
									bgColor={"#f8f8f8"}
									border={"1px solid #cdcdcd"}
									borderRadius={"3px"}
									h={"60px"}
									w={"320px"}
									_focus={{
										border: "1px solid #bf3132",
										bgColor: "#ffe4e4",
									}}
									_focusVisible={{}}
									placeholder={labels.email}
								/>
							</Stack>
						</Flex>
						<Flex flexDir={"column"} my={"25px"}>
							<FormLabel
								fontSize={"14px"}
								mb={""}
								color={isFieldError.comment ? "#bf3132" : "#1f243a"}
							>
								{labels.comment}
							</FormLabel>
							<Textarea
								id="comment"
								type="comment"
								onChange={onCommentChange}
								value={comment}
								isInvalid={isFieldError.comment}
								bgColor={"#f8f8f8"}
								border={"1px solid #cdcdcd"}
								borderRadius={"3px"}
								h={"150px"}
								w={"660px"}
								_focus={{
									border: "1px solid #bf3132",
									bgColor: "#ffe4e4",
								}}
								_focusVisible={{}}
								placeholder={labels.comment}
								resize={"none"}
							/>
						</Flex>
						<Checkbox
							colorScheme="white"
							iconColor="#bf3132"
							w={"20x"}
							h={"20px"}
							borderRadius={"3px"}
							size={"md"}
							mr={"74px"}
							fontWeight={500}
							isChecked={isAgreed}
							onChange={(e) => setIsAgreed(e.target.checked)}
						>
							Даю согласие на обработку{" "}
							<span style={{ color: "#bf3132", textDecoration: "underline" }}>
								персональных данных
							</span>
						</Checkbox>
						<Flex w={"100%"} justify={"center"} mt={"50px"}>
							<Button
								type="submit"
								onClick={() => {
									console.log("Кнопка нажата");
									const form = document.querySelector('form');
									if (form) {
										console.log("Форма найдена, вызываем submit");
										form.requestSubmit();
									} else {
										console.log("Форма не найдена!");
									}
								}}
								backgroundColor="#33438e"
								borderRadius={"3px"}
								color={"white"}
								fontWeight={400}
								_hover={{
									bgColor: "#263475",
								}}
								_active={{
									bgColor: "#1d2a67",
								}}
								width={"250px"}
								height={"45px"}
								isLoading={isSubmitting}
								loadingText="Отправка..."
							>
								Отправить
							</Button>
						</Flex>
					</form>
				</Flex>
			) : (
				<Flex flexDir={"column"}>
					<form onSubmit={(e) => {
						console.log("onSubmit формы вызван");
						e.preventDefault();
						handleSubmit();
					}}>
						<Flex flexDir={"column"}>
							<Stack gap={""}>
								<FormLabel
									fontSize={"14px"}
									htmlFor="name"
									mb={""}
									color={isFieldError.name ? "#bf3132" : "#1f243a"}
								>
									{labels.name}
								</FormLabel>
								<Input
									pr="4.5rem"
									id="name"
									value={name}
									onChange={onNameChange}
									isInvalid={isFieldError.name}
									bgColor={"#f8f8f8"}
									border={"1px solid #cdcdcd"}
									borderRadius={"3px"}
									h={"60px"}
									w={"290px"}
									_focus={{
										border: "1px solid #bf3132",
										bgColor: "#ffe4e4",
									}}
									_focusVisible={{}}
									placeholder={labels.name}
								/>
							</Stack>
							<Stack gap={""}>
								<FormLabel
									fontSize={"14px"}
									htmlFor="email"
									mb={""}
									color={isFieldError.email ? "#bf3132" : "#1f243a"}
								>
									{labels.email}
								</FormLabel>
								<Input
									id="email"
									type="email"
									onChange={onEmailChange}
									value={email}
									isInvalid={isFieldError.email}
									bgColor={"#f8f8f8"}
									border={"1px solid #cdcdcd"}
									borderRadius={"3px"}
									h={"60px"}
									w={"290px"}
									_focus={{
										border: "1px solid #bf3132",
										bgColor: "#ffe4e4",
									}}
									_focusVisible={{}}
									placeholder={labels.email}
								/>
							</Stack>
						</Flex>
						<Flex flexDir={"column"} my={"25px"}>
							<FormLabel
								fontSize={"14px"}
								mb={""}
								color={isFieldError.comment ? "#bf3132" : "#1f243a"}
							>
								{labels.comment}
							</FormLabel>
							<Textarea
								id="comment"
								type="comment"
								onChange={onCommentChange}
								value={comment}
								isInvalid={isFieldError.comment}
								bgColor={"#f8f8f8"}
								border={"1px solid #cdcdcd"}
								borderRadius={"3px"}
								h={"100px"}
								w={"290px"}
								_focus={{
									border: "1px solid #bf3132",
									bgColor: "#ffe4e4",
								}}
								_focusVisible={{}}
								placeholder={labels.comment}
								resize={"none"}
							/>
						</Flex>
						<Checkbox
							colorScheme="white"
							iconColor="#bf3132"
							w={"20x"}
							h={"20px"}
							borderRadius={"3px"}
							size={"md"}
							fontWeight={500}
							isChecked={isAgreed}
							onChange={(e) => setIsAgreed(e.target.checked)}
						>
							Даю согласие на обработку{" "}
							<span style={{ color: "#bf3132", textDecoration: "underline" }}>
								персональных данных
							</span>
						</Checkbox>
						<Flex w={"100%"} justify={"center"} mt={"50px"}>
							<Button
								type="submit"
								onClick={() => {
									console.log("Кнопка нажата");
									const form = document.querySelector('form');
									if (form) {
										console.log("Форма найдена, вызываем submit");
										form.requestSubmit();
									} else {
										console.log("Форма не найдена!");
									}
								}}
								backgroundColor="#33438e"
								borderRadius={"3px"}
								color={"white"}
								fontWeight={400}
								_hover={{
									bgColor: "#263475",
								}}
								_active={{
									bgColor: "#1d2a67",
								}}
								width={"250px"}
								height={"45px"}
								isLoading={isSubmitting}
								loadingText="Отправка..."
							>
								Отправить
							</Button>
						</Flex>
					</form>
				</Flex>
			)}
		</>
	);
};
