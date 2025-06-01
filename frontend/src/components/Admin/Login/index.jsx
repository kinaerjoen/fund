import {
	Box,
	Button,
	Center,
	Flex,
	FormLabel,
	Heading,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../api/auth";
import { removeItem, setItem } from "../../../helpers/localStorage";
import logo from "../../../assets/logo.png";

const defaultLabels = {
	email: "Логин",
	password: "Пароль",
};

const defaultErrorLabels = {
	emailCannotBeEmpty: "Логин не может быть пустой",
	passwordCannotBeEmpty: "Пароль не может быть пустым",
};

const initialIsFieldError = {
	email: false,
	password: false,
};

const Login = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [labels, setLabels] = useState(defaultLabels);
	const [isLoading, setIsLoading] = useState(false);
	const [isFieldError, setIsFieldError] = useState(initialIsFieldError);

	const onShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const onEmailChange = (e) => {
		setIsFieldError({
			...isFieldError,
			email: false,
		});
		setLabels({ ...labels, email: defaultLabels.email });

		setEmail(e.target.value);
	};

	const onPasswordChange = (e) => {
		setIsFieldError({
			...isFieldError,
			password: false,
		});
		setLabels({ ...labels, password: defaultLabels.password });

		setPassword(e.target.value);
	};

	const fieldsVerification = (email, password) => {
		if (!email.length) {
			setLabels({
				...labels,
				email: defaultErrorLabels.emailCannotBeEmpty,
			});

			setIsFieldError({ ...isFieldError, email: true });

			return false;
		}

		if (!password.length) {
			setLabels({
				...labels,
				password: defaultErrorLabels.passwordCannotBeEmpty,
			});

			setIsFieldError({ ...isFieldError, password: true });

			return false;
		}

		return true;
	};

	const onLogin = (e) => {
		e.preventDefault();
		if (!fieldsVerification(email, password)) return;

		const params = { login: email, password };
		setIsLoading(true);

		loginUser(params)
			.then(({ data }) => {
				setItem("jwtToken", data);
				setIsLoading(false);
				navigate("/admin-panel");
			})
			.catch((error) => {
				setIsLoading(false);
				removeItem("jwtToken");
				console.error("Login error:", error);
				setLabels({
					...labels,
					password: "Неверный логин или пароль",
				});
				setIsFieldError({ ...isFieldError, password: true });
			});
	};

	return (
		<Flex minH={"100vh"} align={"center"} justify={"center"}>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack spacing="6">
					<Center>
						<Image
							pointerEvents={"none"}
							userSelect={"none"}
							position={"relative"}
							height={"120px"}
							src={logo}
						/>
					</Center>

					<Stack
						spacing={{
							base: "2",
							md: "3",
						}}
						textAlign="center"
					>
						<Heading size={"sm"}>Войдите в аккаунт администратора</Heading>
					</Stack>
				</Stack>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}
				>
					<Stack>
						<FormLabel
							htmlFor="email"
							color={isFieldError.email ? "red" : "black"}
						>
							{labels.email}
						</FormLabel>
						<Input
							id="email"
							type="email"
							variant="filled"
							onChange={onEmailChange}
							value={email}
							isInvalid={isFieldError.email}
						/>
						<InputGroup size="md" flexDirection="column">
							<FormLabel
								htmlFor="password"
								color={isFieldError.password ? "red" : "black"}
							>
								{labels.password}
							</FormLabel>
							<Input
								pr="4.5rem"
								id="password"
								variant="filled"
								value={password}
								type={showPassword ? "text" : "password"}
								onChange={onPasswordChange}
								isInvalid={isFieldError.password}
							/>
							<InputRightElement width="4.5rem" marginTop="8">
								<Button
									h="1.75rem"
									size="sm"
									variant="solid"
									colorScheme="blue"
									onClick={onShowPassword}
									mr={1}
								>
									{showPassword ? "Скрыть" : "Показать"}
								</Button>
							</InputRightElement>
						</InputGroup>
						<Stack spacing={1} mt={"20px"}>
							<Button
								bg={"blue.400"}
								color={"white"}
								_hover={{
									bg: "blue.500",
								}}
								isLoading={isLoading}
								onClick={onLogin}
							>
								Войти
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
};

export default Login;
