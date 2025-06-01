import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { getNews } from "../api/news";
import { getParticipants } from "../api/participants";
import { getPdfs } from "../api/pdfs";
import { getProjects } from "../api/projects";
import { getReports } from "../api/reports";
import { getThanks } from "../api/thanks";
import { theme } from "../themes/chakraWhiteTheme";
import Container from "./Container";
import PrivateWrapper from "./PrivateRoute";
import Login from "./Admin/Login";
import Panel from "./Admin/Panel";
import About from "./fund/About";
import MainPage from "./fund/mainPage";
import News from "./fund/News";
import Policy from "./fund/policy";
import PopechitelskiySovet from "./fund/PopechitelskiySovet";
import Projects from "./fund/Projects";
import Reports from "./fund/reports";
import Thanks from "./fund/Thanks";
import Help from "./fund/Help";

function App() {
	const [news, setNews] = useState([]);
	const [thanks, setThanks] = useState([]);
	const [projects, setProjects] = useState([]);
	const [participants, setParticipants] = useState([]);
	const [pdfs, setPdfs] = useState([]);
	const [reports, setReports] = useState([]);

	useEffect(() => {
		const onNewsSuccess = (result) => {
			setNews(result.data);
		};

		getNews().then(onNewsSuccess).catch();

		const onThanksSuccess = (result) => {
			setThanks(result.data);
		};

		getThanks().then(onThanksSuccess).catch();

		const onProjectsSuccess = (result) => {
			setProjects(result.data);
		};

		getProjects().then(onProjectsSuccess).catch();

		const onParticipantsSuccess = (result) => {
			setParticipants(result.data);
		};

		getParticipants().then(onParticipantsSuccess).catch();

		const onPdfsSuccess = (result) => {
			setPdfs(result.data);
		};

		getPdfs().then(onPdfsSuccess).catch();

		const onReportsSuccess = (result) => {
			setReports(result.data);
		};

		getReports().then(onReportsSuccess).catch();
	}, []);

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<ChakraProvider theme={theme}>
				<Router basename={"/"}>
					<Routes>
						<Route element={<Container />}>
							<Route path="novosty" element={<News news={news} />} />
							<Route
								path="sovet"
								element={<PopechitelskiySovet participants={participants} />}
							/>
							<Route path="kak-pomoch" element={<Help />} />
							<Route
								path="proekty"
								element={<Projects projects={projects} />}
							/>
							<Route
								path="blagodarnosti"
								element={<Thanks thanks={thanks} />}
							/>
							<Route
								path="o-fonde"
								element={<About participants={participants} pdfs={pdfs} />}
							/>
							<Route path="otchety" element={<Reports reports={reports} />} />
							<Route path="policy" element={<Policy />} />
							<Route
								path="/"
								element={
									<MainPage
										news={news}
										pdfs={pdfs}
										thanks={thanks}
										projects={projects}
										participants={participants}
									/>
								}
							/>
						</Route>
						<Route element={<PrivateWrapper />}>
							<Route path="admin-panel" element={<Panel news={news} />} />
						</Route>
						<Route path="admin-panel/login" element={<Login />} />
					</Routes>
				</Router>
			</ChakraProvider>
		</div>
	);
}

export default App;
