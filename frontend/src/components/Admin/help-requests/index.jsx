import {
	Box,
	Button,
	Flex,
	Heading,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getHelpRequests, markHelpRequestAsProcessed, deleteHelpRequest } from "../../../api/helpRequests";

const HelpRequests = () => {
	console.log('HelpRequests component mounted');
	const [requests, setRequests] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const toast = useToast();

	const fetchRequests = async () => {
		console.log('Fetching help requests...');
		try {
			const data = await getHelpRequests();
			console.log('Help requests received:', data);
			setRequests(data);
		} catch (error) {
			console.error('Error fetching help requests:', error);
			console.error('Error details:', {
				message: error.message,
				response: error.response?.data,
				status: error.response?.status
			});
			toast({
				title: "Ошибка",
				description: error.response?.status === 401 
					? "Необходима авторизация. Пожалуйста, войдите в систему."
					: "Не удалось загрузить заявки",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		console.log('HelpRequests useEffect triggered');
		fetchRequests();
	}, []);

	const handleMarkAsProcessed = async (id) => {
		try {
			await markHelpRequestAsProcessed(id, localStorage.getItem("userLogin"));
			await fetchRequests();
			toast({
				title: "Успешно",
				description: "Заявка отмечена как обработанная",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		} catch (error) {
			toast({
				title: "Ошибка",
				description: "Не удалось обновить статус заявки",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		}
	};

	const handleDelete = async (id) => {
		if (!window.confirm("Вы уверены, что хотите удалить эту заявку?")) {
			return;
		}

		try {
			await deleteHelpRequest(id);
			await fetchRequests();
			toast({
				title: "Успешно",
				description: "Заявка удалена",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		} catch (error) {
			toast({
				title: "Ошибка",
				description: "Не удалось удалить заявку",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		}
	};

	if (isLoading) {
		return (
			<Box p={4}>
				<Text>Загрузка...</Text>
			</Box>
		);
	}

	return (
		<Box p={4}>
			<Heading mb={4}>Заявки на помощь</Heading>
			<Table variant="simple">
				<Thead>
					<Tr>
						<Th>Дата создания</Th>
						<Th>Имя</Th>
						<Th>Email</Th>
						<Th>Комментарий</Th>
						<Th>Статус</Th>
						<Th>Действия</Th>
					</Tr>
				</Thead>
				<Tbody>
					{requests.map((request) => (
						<Tr key={request.id}>
							<Td>
								{new Date(request.createdAt).toLocaleString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
							</Td>
							<Td>{request.name}</Td>
							<Td>{request.email}</Td>
							<Td minW="300px" maxW="300px" whiteSpace="pre-wrap">
								{request.comment}
							</Td>
							<Td>
								{request.isProcessed ? (
									<Text color="green.500">
										Обработана {request.processedBy}
										<br />
										{new Date(request.processedAt).toLocaleString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
									</Text>
								) : (
									<Text color="red.500">Новая</Text>
								)}
							</Td>
							<Td>
								<Flex gap={2}>
									{!request.isProcessed && (
										<Button
											colorScheme="green"
											size="sm"
											onClick={() => handleMarkAsProcessed(request.id)}
										>
											Обработать
										</Button>
									)}
									<Button
										colorScheme="red"
										size="sm"
										onClick={() => handleDelete(request.id)}
									>
										Удалить
									</Button>
								</Flex>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</Box>
	);
};

export default HelpRequests; 