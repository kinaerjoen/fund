import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./fund/footer";
import Header from "./fund/header";

const Container = () => {
	return (
		<>
			<Header />
			<Box className="container">
				<Outlet />
			</Box>
			<Footer />
		</>
	);
};

export default Container;
