import * as React from 'react';
import { useState } from 'react';
import { Text, Button, Stack, SegmentedControl, TextInput, Container, Card } from "@mantine/core";
import TopBar from './TopBar';
import Footer from './Footer';

export default function CreateJoke() {

	const [joke, setJoke] = useState<string>('');
	const [punchline, setPunchline] = useState<string>('');
	const [comedyStyle, setComedyStyle] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);


	const fetchJoke = async (punchline: string, comedyStyle: string) => {
		setLoading(true);
		setJoke('');
		const response = await fetch('http://localhost:5050/punchline', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ punchline, comedyStyle }),
		});
		const data = await response.json();
		setJoke(data.dbEntry.joke);
		setPunchline('');
		setLoading(false);
	};


	return (
		<>
			<TopBar />
			<Stack align="center" mt={50}
				style={{
					height: "90vh",
				}}
			>
				<TextInput
				label="Enter a punchline or topic for your joke:"
				placeholder="JavaScript Developers..."
				value={punchline}
				onChange={(event) => setPunchline(event.currentTarget.value)}
				size="md"
				radius="md"
				/>
				<Text size="md" weight={500} mt={10}>
					Select a comedy style:
				</Text>
				<SegmentedControl
					radius="md"
					size="sm"
					mt={-15}
					value={comedyStyle}
					onChange={setComedyStyle}
					data={[
						{ label: 'Dad Joke', value: 'You are a middle-aged dad, and you are telling a joke to your son' },
						{ label: 'Knock-Knock', value: 'You are the worlds best knock-knock joke teller' },
						{ label: 'Stand Up', value: 'You are a stand up comedian, and you are telling a joke to a crowd' },
					]}
				/>
				<Button onClick={() => fetchJoke(punchline, comedyStyle)} loading={loading} 
					disabled={
						!punchline || !comedyStyle || loading
					}>
					Get Joke
				</Button>
				<Container
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						maxWidth: "75vw",
					}}
				>
					{joke !== "" ? (
  					<Card
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}>
    						<Text>{joke}</Text>
  					</Card>
					) : null}
				</Container>
			</Stack>
			<Footer />
		</>
	);
}
