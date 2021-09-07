import * as React from 'react';
import { Container, Box, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import InviteList from './components/InviteList';
import AddInviteeForm from './components/AddInviteeForm';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

export const App = () => {
  const [invitees, setInvitees] = React.useState<IState['people']>([
    {
      name: 'John Doe',
      age: 32,
      url: 'https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=',
      note: 'I like this person, he is my friend',
    },
  ]);

  return (
    <Container maxW='800px' pt={4}>
      <Box d='flex' mb={4}>
        <Heading flex={1}>My Party List</Heading>
        <ColorModeSwitcher />
      </Box>
      <AddInviteeForm invitees={invitees} setInvitees={setInvitees} />
      <InviteList people={invitees} />
    </Container>
  );
};
