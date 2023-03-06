import { useState } from 'react';
import { Text, Stack, SegmentedControl, Card, Group } from "@mantine/core";
import { v4 as uuidv4 } from 'uuid';
import TopBar from './TopBar';
import Footer from './Footer';


export default function JokesList() {

	const comedyStyle = ''

	const [loading, setLoading] = useState<boolean>(false);
	const [jokes, setJokes] = useState([]);


	const fetchJokes = async (comedyStyle: string) => {
		setLoading(true);
		const response = await fetch('http://localhost:5050/jokes', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		setLoading(false);
		setJokes(data.jokes.map((joke: any) => {
			if (joke.comedyStyle === comedyStyle || comedyStyle === 'All') {
				return joke.joke;
			} else {
				return null;
			}
		}));
	};
	return (
		<>
			<TopBar />
			<Stack align="center" mt={10}
			>
				<Text>Select Comedy Style</Text>
				<SegmentedControl
					radius="md"
					size="sm"
					mt={-15}
					value={comedyStyle}
					onChange={fetchJokes}
					data={[
						{ label: 'All Styles', value: 'All' },
						{ label: 'Dad Joke', value: 'You are a middle-aged dad, and you are telling a joke to your son' },
						{ label: 'Knock-Knock', value: 'You are the worlds best knock-knock joke teller' },
						{ label: 'Stand Up', value: 'You are a stand up comedian, and you are telling a joke to a crowd' },
					]}
				/>
			</Stack>
			{loading && 
			<Text
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				Loading...
			</Text>}
			<Group
					style={
						{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",


					}}
				>
      		{jokes.map((joke) => {
						if (joke) {
							return (
								<Card
									key={uuidv4()}
									shadow="sm"
									radius="md"
									mt={10}
									style={{
										width: "75%",
										height: "50%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<Text>{joke}</Text>
								</Card>
							);
						} else {
							return null;
						}
					})}
    		</Group>
			<Footer />
		</>
	);
}