import { ThemeProvider } from "./ThemeProvider";
import CreateJoke from "./components/CreateJoke";
import JokesList from "./components/JokesList";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <ThemeProvider>
				<Routes>
						<Route path="/create" element={<CreateJoke />} />
						<Route path="/" element={<JokesList />} />
				</Routes>
    </ThemeProvider>
  );
}
