import { DeleteIcon } from "@chakra-ui/icons";
import {
	Box,
	IconButton,
	useToast,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import NewCard from "../../../fund/News/new-card";

export const DeleteNew = ({
	id,
	title,
	content,
	image,
	createdAt,
	deleteNew,
}) => {
	const toast = useToast();

	const handleDelete = useCallback(async (e) => {
		if (e) {
			e.preventDefault();
			e.stopPropagation();
		}
		
		try {
			await deleteNew(id);
			toast({
				title: "Новость удалена",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		} catch (err) {
			console.error(err);
			toast({
				title: "Ошибка при удалении новости",
				description: "Пожалуйста, попробуйте еще раз",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		}
	}, [deleteNew, id, toast]);

	return (
		<Box pos={"relative"} onClick={(e) => e.stopPropagation()}>
			<NewCard
				title={title}
				description={content}
				image={image}
				createdAt={createdAt}
			/>
			<IconButton
				aria-label="Delete news"
				icon={<DeleteIcon boxSize={6} />}
				position="absolute"
				bottom={2}
				right={2}
				colorScheme="red"
				onClick={handleDelete}
				zIndex={9999}
				size="lg"
				isRound
				boxShadow="lg"
				_hover={{
					transform: "scale(1.1)",
					bg: "red.600",
				}}
				_active={{
					transform: "scale(0.95)",
					bg: "red.700",
				}}
			/>
		</Box>
	);
};
