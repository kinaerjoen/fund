import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Collapse,
	Flex,
	Icon,
	IconButton,
	Image,
	Link,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Stack,
	Text,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";

import { useState } from "react";
import logo from "../../../assets/logo.png";
import { ReactComponent as vk } from "../../../assets/vk.svg";
import { NeedHelpModal } from "../modals/needHelpModal";
import { PaymentModal } from "../modals/paymentModal";

const url = window.location.href;

export default function WithSubnavigation({ children }) {
	const {
		isOpen: isPaymentModalOpen,
		onOpen: onPaymentModalOpen,
		onClose: onPaymentModalClose,
	} = useDisclosure();
	const {
		isOpen: isNeedHelpModalOpen,
		onOpen: onNeedHelpModalOpen,
		onClose: onNeedHelpModalClose,
	} = useDisclosure();

	const { isOpen, onToggle } = useDisclosure();
	const [headerBg, setHeaderBg] = useState("");

	window.onscroll = function () {
		if (window.scrollY > 30) {
			setHeaderBg("white");
		} else {
			setHeaderBg("");
		}
	};

	return (
		<Box
			position={"fixed"}
			left={"0px"}
			w={"100%"}
			zIndex={10}
			bgColor={headerBg}
			transitionDuration={"1s"}
		>
			{window.document.documentElement.clientWidth > 767 ? (
				<Flex h={"100px"} width={"100%"} align={"center"}>
					<Flex flex={1} w={"100%"} h={"100%"} justify={"space-between"}>
						<Flex w={"664px"}>
							<Flex
								w={"100px"}
								h={"100px"}
								justifyContent={"center"}
								alignItems={"center"}
								borderRight={"1px"}
								borderColor={"#f2f2f2"}
								bgColor={"white"}
							>
								<Link href="/">
									<Image
										pointerEvents={"none"}
										userSelect={"none"}
										position={"relative"}
										height={"76px"}
										src={logo}
									/>
								</Link>
							</Flex>
							<Flex
								display={{ base: "none", md: "flex" }}
								alignItems={"center"}
								flex={"1"}
								maxW={"664px"}
								bgColor={"white"}
							>
								<DesktopNav />
							</Flex>
						</Flex>

						<Flex align={"center"}>
							<Link
								display={"flex"}
								justifyContent={"center"}
								alignItems={"center"}
								href="https://vk.com/children_hospice"
							>
								<Icon
									w={"20px"}
									h={"20px"}
									as={vk}
									fill={"#000000"}
									marginRight={"20px"}
									marginLeft={"20px"}
									cursor={"pointer"}
									_hover={{
										fill: "#bf3132",
									}}
								/>
							</Link>
							<Text
								color={"#1f243a"}
								_hover={{
									color: "#bf3132",
								}}
							>
								<a
									style={{
										fontWeight: "700",
										fontSize: "16px",
										marginRight: "16px",
									}}
									href="tel: 8 800 600-49-29"
								>
									8 800 600-49-29
								</a>
							</Text>
							{/* <Button
								backgroundColor="#bf3132"
								borderRadius={"3px"}
								color={"white"}
								fontWeight={400}
								_hover={{
									bgColor: "#771e2e",
								}}
								_active={{
									bgColor: "#6d1424",
								}}
								width={"170px"}
								height={"45px"}
								marginRight={"16px"}
								onClick={onPaymentModalOpen}
							>
								Хочу помочь
							</Button> */}
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
								width={"170px"}
								height={"45px"}
								marginRight={"23px"}
								onClick={onNeedHelpModalOpen}
							>
								Нужна помощь
							</Button>
						</Flex>
					</Flex>
				</Flex>
			) : (
				<Flex bgColor={"white"} flexDir={"column"}>
					<Flex
						flex={{ base: 0.7 }}
						ml={{ base: -2 }}
						display={{ base: "flex", md: "none" }}
						justify={"space-between"}
					>
						<IconButton
							onClick={onToggle}
							icon={
								isOpen ? (
									<CloseIcon w={"15px"} h={"15px"} />
								) : (
									<HamburgerIcon w={"25px"} h={"25px"} />
								)
							}
							variant={"ghost"}
							ml={"15px"}
						/>
						{/* <Button
							backgroundColor="#bf3132"
							borderRadius={"0 0 0 8px"}
							color={"white"}
							fontWeight={400}
							_hover={{
								bgColor: "#771e2e",
							}}
							_active={{
								bgColor: "#6d1424",
							}}
							width={"86px"}
							height={"40px"}
							onClick={onPaymentModalOpen}
						>
							Помочь
						</Button> */}
					</Flex>
					<Collapse in={isOpen} animateOpacity>
						<MobileNav
							onPaymentModalOpen={onPaymentModalOpen}
							onNeedHelpModalOpen={onNeedHelpModalOpen}
						/>
					</Collapse>
				</Flex>
			)}
			<Box>{children}</Box>
			<PaymentModal isOpen={isPaymentModalOpen} onClose={onPaymentModalClose} />
			<NeedHelpModal
				isOpen={isNeedHelpModalOpen}
				onClose={onNeedHelpModalClose}
			/>
		</Box>
	);
}

const DesktopNav = () => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack
			direction={"row"}
			w={"100%"}
			justifyContent={"space-between"}
			alignItems={"center"}
		>
			{NAV_ITEMS.map((navItem) => (
				<Popover key={navItem.label} trigger="hover" placement="bottom-start">
					<PopoverTrigger>
						<Link
							marginLeft={navItem.marginLeft}
							marginRight={navItem?.marginRight}
							rounded={"md"}
							_hover={{
								transition: "color .16s ease-in-out",
								color: "#bf3132",
							}}
							href={navItem.href}
							fontWeight={500}
							color={url.includes(navItem.href) ? "#bf3132" : "black"}
							lineHeight={"18px"}
							textAlign={"center"}
							onMouseEnter={navItem.children && onToggle}
							onMouseLeave={navItem.children && onToggle}
						>
							{navItem.label}
							{navItem.children && (
								<Icon
									as={ChevronDownIcon}
									transition={"all .25s ease-in-out"}
									transform={isOpen ? "rotate(180deg)" : ""}
									w={6}
									h={6}
								/>
							)}
						</Link>
					</PopoverTrigger>
					{navItem.children && (
						<PopoverContent
							top={"31px"}
							left={"-35px"}
							border={0}
							boxShadow={"0 0 10px 1px rgba(3, 3, 3, 0.05)"}
							pl={"37px"}
							pt={"29px"}
							borderRadius={"0"}
							w={"288px"}
							h={"200px"}
						>
							<Flex flexDir={"column"} align={"flex-start"}>
								{navItem.children.map((child) => (
									<DesktopSubNav
										key={child.href}
										label={child.label}
										href={child.href}
									/>
								))}
							</Flex>
						</PopoverContent>
					)}
				</Popover>
			))}
		</Stack>
	);
};

const DesktopSubNav = ({ label, href }) => {
	return (
		<Link
			key={label}
			rounded={"md"}
			_hover={{
				transition: "color .16s ease-in-out",
				color: "#bf3132",
			}}
			href={href}
			fontWeight={500}
			color={url.includes(href) ? "#bf3132" : "black"}
			textAlign={"center"}
			py={"10px"}
			fontSize={"17px"}
		>
			{label}
		</Link>
	);
};

const MobileNav = ({ onPaymentModalOpen, onNeedHelpModalOpen }) => {
	const linkColor = useColorModeValue("white");

	return (
		<Flex
			flexDir={"column"}
			align={"center"}
			zIndex={20}
			p={"17px"}
			bgColor={"#f2f5f8"}
		>
			<Flex
				w={"100px"}
				h={"100px"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Link href="/">
					<Image
						pointerEvents={"none"}
						userSelect={"none"}
						position={"relative"}
						height={"76px"}
						src={logo}
					/>
				</Link>
			</Flex>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem
					rounded={"md"}
					_hover={{
						textDecoration: "none",
						bg: linkColor,
					}}
					onPaymentModalOpen={onPaymentModalOpen}
					onNeedHelpModalOpen={onNeedHelpModalOpen}
					key={navItem.label}
					{...navItem}
				/>
			))}
			<Flex flexDir={"column"} align={"center"} justify={"center"}>
				<Flex mt={"30px"}>
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
						width={"140px"}
						height={"45px"}
						onClick={onNeedHelpModalOpen}
					>
						Нужна помощь
					</Button>
					{/* <Button
						backgroundColor="#bf3132"
						borderRadius={"3px"}
						color={"white"}
						fontWeight={400}
						_hover={{
							bgColor: "#771e2e",
						}}
						_active={{
							bgColor: "#6d1424",
						}}
						width={"140px"}
						height={"45px"}
						onClick={onPaymentModalOpen}
						ml={"6px"}
					>
						Хочу помочь
					</Button> */}
				</Flex>
				<Text
					color={"#1f243a"}
					mt={"25px"}
					_hover={{
						color: "#bf3132",
					}}
				>
					<a
						style={{
							fontWeight: "700",
							fontSize: "20px",
						}}
						href="tel: 8 800 600-49-29"
					>
						8 800 600-49-29
					</a>
				</Text>
				<Flex mt={"10px"}>
					<Link
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
						href="https://vk.com/children_hospice"
					>
						<Icon
							w={"30px"}
							h={"30px"}
							as={vk}
							fill={"#000000"}
							cursor={"pointer"}
							_hover={{
								fill: "#bf3132",
							}}
						/>
					</Link>
				</Flex>
			</Flex>
		</Flex>
	);
};

const MobileNavItem = ({ label, children, href }) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Flex
			flexDir={"column"}
			align={"center"}
			spacing={4}
			onClick={children && onToggle}
		>
			<Flex
				py={2}
				as={Link}
				href={href ?? "#"}
				justify={"center"}
				align={"center"}
				_hover={{
					textDecoration: "none",
				}}
				w={"max-content"}
			>
				<Text fontWeight={600} color={"#1f243a"} fontSize={"16px"}>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={"all .25s ease-in-out"}
						transform={isOpen ? "rotate(180deg)" : ""}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<Flex flexDir={"column"} align={"center"}>
					{children &&
						children.map((child) => (
							<Link
								key={child.label}
								color={"#51576f"}
								href={child.href}
								fontWeight={500}
								py={1}
							>
								{child.label}
							</Link>
						))}
				</Flex>
			</Collapse>
		</Flex>
	);
};

const NAV_ITEMS = [
	{
		label: "О фонде",
		marginLeft: "35px",
		children: [
			{
				label: "О нас",
				href: "/o-fonde",
			},
			{
				label: "Новости",
				href: "/novosty",
			},
			{
				label: "Попечительский совет",
				href: "/sovet",
			},
			// {
			// 	label: "Как помочь",
			// 	href: "/kak-pomoch",
			// },
		],
	},
	{
		label: "Проекты",
		href: "/proekty",
		marginLeft: "5px",
	},
	{
		label: "Отчеты",
		href: "/otchety",
		marginLeft: "5px",
	},
	{
		label: "Благодарности",
		href: "/blagodarnosti",
		marginLeft: "5px",
		marginRight: "35px",
	},
];
