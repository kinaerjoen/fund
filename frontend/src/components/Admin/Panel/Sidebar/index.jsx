import {
	Box,
	CloseButton,
	Drawer,
	DrawerContent,
	Flex,
	Icon,
	IconButton,
	Link,
	Text,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const LinkItems = [
	{ name: "Добавить новость", icon: AiOutlinePlusCircle, link: 0 },
	{ name: "Удалить новость", icon: AiOutlineMinusCircle, link: 1 },
	{ name: "Добавить награду", icon: AiOutlinePlusCircle, link: 2 },
	{ name: "Удалить награду", icon: AiOutlineMinusCircle, link: 3 },
	{ name: "Добавить участника совета", icon: AiOutlinePlusCircle, link: 4 },
	{ name: "Удалить участника совета", icon: AiOutlineMinusCircle, link: 5 },
	{ name: "Добавить проект", icon: AiOutlinePlusCircle, link: 6 },
	{ name: "Удалить проект", icon: AiOutlineMinusCircle, link: 7 },
	{ name: "Добавить PDF", icon: AiOutlinePlusCircle, link: 8 },
	{ name: "Удалить PDF", icon: AiOutlineMinusCircle, link: 9 },
	{ name: "Добавить отчет", icon: AiOutlinePlusCircle, link: 10 },
	{ name: "Удалить отчет", icon: AiOutlineMinusCircle, link: 11 },
];

export default function SimpleSidebar({
	children,
	setCurrentPage,
	currentPage,
}) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box minH="100vh" w={"100%"}>
			<SidebarContent
				onClose={() => onClose}
				display={{ base: "none", md: "block" }}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerContent>
					<SidebarContent
						onClose={onClose}
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</DrawerContent>
			</Drawer>
			<MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
			<Box ml={{ base: 0, md: 60 }} p="4" bgColor={"white"} minH={"100vh"}>
				{children}
			</Box>
		</Box>
	);
}

const SidebarContent = ({ onClose, setCurrentPage, currentPage, ...rest }) => {
	return (
		<Box
			bg={useColorModeValue("white", "gray.900")}
			borderRight="1px"
			borderRightColor={useColorModeValue("gray.200", "gray.700")}
			w={{ base: "full", md: 60 }}
			pos="fixed"
			h="full"
			overflow={"auto"}
			{...rest}
		>
			<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
				<Text
					fontSize="2xl"
					fontFamily="monospace"
					fontWeight="bold"
					lineHeight={1}
				>
					Панель управления
				</Text>
				<CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
			</Flex>
			{LinkItems.map((link) => (
				<NavItem
					key={link.name}
					icon={link.icon}
					link={link.link}
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
					onClose={onClose}
				>
					{link.name}
				</NavItem>
			))}
		</Box>
	);
};

const NavItem = ({
	icon,
	children,
	link,
	setCurrentPage,
	currentPage,
	onClose,
	...rest
}) => {
	return (
		<Link
			style={{ textDecoration: "none" }}
			_focus={{ boxShadow: "none" }}
			onClick={() => {
				setCurrentPage(link);
				onClose();
			}}
		>
			<Flex
				alignItems="center"
				p="4"
				mx="4"
				my={1}
				borderRadius="lg"
				role="group"
				cursor="pointer"
				bgColor={currentPage === link ? "cyan.400" : ""}
				color={currentPage === link ? "white" : "black"}
				_hover={{
					bg: "cyan.400",
					color: "white",
				}}
				{...rest}
			>
				{icon && (
					<Icon
						mr="4"
						fontSize="16"
						_groupHover={{
							color: "white",
						}}
						as={icon}
						width={"22px"}
						height={"22px"}
					/>
				)}
				{children}
			</Flex>
		</Link>
	);
};

const MobileNav = ({ onOpen, ...rest }) => {
	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 24 }}
			height="20"
			alignItems="center"
			bg={useColorModeValue("white", "gray.900")}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue("gray.200", "gray.700")}
			justifyContent="flex-start"
			w={"100vw"}
			{...rest}
		>
			<IconButton
				variant="outline"
				onClick={onOpen}
				aria-label="open menu"
				icon={<FiMenu />}
			/>

			<Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
				Панель управления
			</Text>
		</Flex>
	);
};
