import {
  Header,
  Container,
  Burger,
  rem,
	Button,
	Text,
	Menu,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';


export default function TopBar() {
	const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

	return (
		<Header
			height={rem(50)}
			style={{
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<Container
				style={{
					display: 'flex',
					justifyContent: 'left',
					paddingTop: rem(10),
				}}
			>
				<Text
					size="1.5rem"
					style={{
						fontWeight: 'bold',
						fontStyle: 'italic',
					}}
				>
					Just OK Jokes
				</Text>
			</Container>
			<Container
				style={{
					display: 'flex',
					justifyContent: 'right',
				}}
			>
			<Menu shadow="md">
					<Menu.Target>
						<Burger
							aria-label={label} 
							onClick={toggle}
							opened={opened}
							size="md"
							color="gray"
							style={{
								marginTop: rem(10),
							}}
						/>
					</Menu.Target>

					<Menu.Dropdown>
						<Menu.Item >
							<Link to="/create">
								<Button>Create Joke</Button>
							</Link>
						</Menu.Item>
						<Menu.Item >
							<Link to="/">
								<Button>View Jokes</Button>
							</Link>
						</Menu.Item>
					</Menu.Dropdown>
    		</Menu>
			</Container>
		</Header>
	);
}


