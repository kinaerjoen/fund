import {
	Button,
	Checkbox,
	Flex,
	FormLabel,
	Input,
	Stack,
	Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

const initialIsFieldError = {
	email: false,
	name: false,
	otherAmount: false,
	comment: false,
};

const defaultLabels = {
	email: "Ваш e-mail",
	name: "Ваше имя",
	otherAmount: "Другая сумма",
	comment: "Комментарий",
};

export const NeedHelp = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [comment, setComment] = useState("");
	const [labels, setLabels] = useState(defaultLabels);
	const [isFieldError, setIsFieldError] = useState(initialIsFieldError);
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

	return (
		<>
			{document.documentElement.clientWidth > 767 ? (
				<Flex flexDir={"column"}>
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
					>
						Даю согласие на обработку{" "}
						<span style={{ color: "#bf3132", textDecoration: "underline" }}>
							персональных данных
						</span>
					</Checkbox>
					<Flex w={"100%"} justify={"center"} mt={"50px"}>
						<Button
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
							onClick={() => {}}
						>
							Отправить
						</Button>
					</Flex>
				</Flex>
			) : (
				<Flex flexDir={"column"}>
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
					>
						Даю согласие на обработку{" "}
						<span style={{ color: "#bf3132", textDecoration: "underline" }}>
							персональных данных
						</span>
					</Checkbox>
					<Flex w={"100%"} justify={"center"} mt={"50px"}>
						<Button
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
							onClick={() => {}}
						>
							Отправить
						</Button>
					</Flex>
				</Flex>
			)}
		</>
	);
};
