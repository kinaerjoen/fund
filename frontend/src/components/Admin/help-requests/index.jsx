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
	Select,
	Input,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	FormControl,
	FormLabel,
	Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getHelpRequests, updateHelpRequestStatus, deleteHelpRequest } from "../../../api/helpRequests";

const HelpRequestStatus = {
	NEW: 'new',
	IN_PROGRESS: 'in_progress',
	ON_HOLD: 'on_hold',
	COMPLETED: 'completed',
	CANCELLED: 'cancelled'
};

const statusLabels = {
	[HelpRequestStatus.NEW]: 'Новая',
	[HelpRequestStatus.IN_PROGRESS]: 'В работе',
	[HelpRequestStatus.ON_HOLD]: 'На паузе',
	[HelpRequestStatus.COMPLETED]: 'Завершена',
	[HelpRequestStatus.CANCELLED]: 'Отменена'
};

const statusColors = {
	[HelpRequestStatus.NEW]: 'red.500',
	[HelpRequestStatus.IN_PROGRESS]: 'blue.500',
	[HelpRequestStatus.ON_HOLD]: 'orange.500',
	[HelpRequestStatus.COMPLETED]: 'green.500',
	[HelpRequestStatus.CANCELLED]: 'gray.500'
};

const HelpRequests = () => {
	console.log('HelpRequests component mounted');
	const [requests, setRequests] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [selectedRequest, setSelectedRequest] = useState(null);
	const [statusData, setStatusData] = useState({
		status: '',
		assignedTo: '',
		statusComment: ''
	});
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();

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

	const handleStatusUpdate = async () => {
		try {
			await updateHelpRequestStatus(selectedRequest.id, statusData);
			await fetchRequests();
			onClose();
			toast({
				title: "Успешно",
				description: "Статус заявки обновлен",
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

	const openStatusModal = (request) => {
		setSelectedRequest(request);
		setStatusData({
			status: request.status,
			assignedTo: request.assignedTo || '',
			statusComment: request.statusComment || ''
		});
		onOpen();
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
						<Th>Ответственный</Th>
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
								<Text color={statusColors[request.status]}>
									{statusLabels[request.status]}
								</Text>
								{request.statusComment && (
									<Text fontSize="sm" color="gray.500">
										{request.statusComment}
									</Text>
								)}
							</Td>
							<Td>
								{request.assignedTo || '-'}
							</Td>
							<Td>
								<Flex gap={2}>
									<Button
										colorScheme="blue"
										size="sm"
										onClick={() => openStatusModal(request)}
									>
										Изменить статус
									</Button>
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

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Изменение статуса заявки</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl mb={4}>
							<FormLabel>Статус</FormLabel>
							<Select
								value={statusData.status}
								onChange={(e) => setStatusData({ ...statusData, status: e.target.value })}
							>
								{Object.entries(statusLabels).map(([value, label]) => (
									<option key={value} value={value}>{label}</option>
								))}
							</Select>
						</FormControl>

						<FormControl mb={4}>
							<FormLabel>Ответственный</FormLabel>
							<Input
								value={statusData.assignedTo}
								onChange={(e) => setStatusData({ ...statusData, assignedTo: e.target.value })}
								placeholder="Введите имя ответственного"
							/>
						</FormControl>

						<FormControl mb={4}>
							<FormLabel>Комментарий к статусу</FormLabel>
							<Textarea
								value={statusData.statusComment}
								onChange={(e) => setStatusData({ ...statusData, statusComment: e.target.value })}
								placeholder="Введите комментарий к статусу"
							/>
						</FormControl>

						<Flex justify="flex-end" gap={2}>
							<Button onClick={onClose}>Отмена</Button>
							<Button colorScheme="blue" onClick={handleStatusUpdate}>
								Сохранить
							</Button>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default HelpRequests; 