import { Container, Divider, Stack, Text } from "@mantine/core";

export default function Footer() {
	return (
		<Container
			mt={500} 
			style={{
				height: "10vh",
				width: "100%",
			}}
		>
			<Divider />
			<Stack align="center" mt={50}>
				<Text
					size="sm"
					mt={-40}
				>
					© 2023 James Howat
				</Text>
				<Text
					size="xs"
					mt={-20}
				>
					james@howat.dev
				</Text>
			</Stack>
		</Container>
	);
}