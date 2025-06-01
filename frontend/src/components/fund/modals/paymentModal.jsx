import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import Payment from "../Payment/payment";

export const PaymentModal = ({ isOpen, onClose }) => {
	return (
		<>
			{document.documentElement.clientWidth > 767 ? (
				<>
					<Modal
						isOpen={isOpen}
						onClose={onClose}
						onEsc={onClose}
						isCentered
						size={""}
					>
						<ModalOverlay w={"100%"} h={"100%"} />
						<ModalContent
							padding={"0"}
							borderRadius={"3px"}
							w={"663px"}
							h={"672px"}
						>
							<ModalHeader
								fontFamily={"Oswald"}
								textAlign={"center"}
								fontSize={"30px"}
								mt={"50px"}
								w={"663px"}
								h={"672px"}
								textTransform={"uppercase"}
							>
								Помочь
							</ModalHeader>
							<ModalCloseButton />
							<ModalBody px={"50px"} w={"663px"} h={"672px"}>
								<Payment
									padding={""}
									width={"100%"}
									height={"100%"}
									isTitle={false}
								/>
							</ModalBody>
						</ModalContent>
					</Modal>
				</>
			) : (
				<>
					<Modal
						isOpen={isOpen}
						onClose={onClose}
						onEsc={onClose}
						isCentered
						size={""}
					>
						<ModalOverlay w={"100%"} h={"100%"} />
						<ModalContent padding={"0"} borderRadius={"3px"} w={"330px"}>
							<ModalHeader
								fontFamily={"Oswald"}
								textAlign={"center"}
								fontSize={"30px"}
								mt={"30px"}
								w={"330px"}
								textTransform={"uppercase"}
							>
								Помочь
							</ModalHeader>
							<ModalCloseButton />
							<ModalBody px={"50px"} w={"330px"}>
								<Payment
									padding={""}
									width={"100%"}
									height={"100%"}
									isTitle={false}
								/>
							</ModalBody>
						</ModalContent>
					</Modal>
				</>
			)}
		</>
	);
};
