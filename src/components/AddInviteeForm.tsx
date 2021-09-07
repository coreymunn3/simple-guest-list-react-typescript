import React, { useState } from 'react';
import { Box, Flex, Input, Heading, Textarea, Button } from '@chakra-ui/react';
import { IState } from '../App';

interface IProps {
  invitees: IState['people'];
  setInvitees: React.Dispatch<React.SetStateAction<IState['people']>>;
}

const AddInviteeForm: React.FC<IProps> = (props) => {
  const { invitees, setInvitees } = props;
  const [input, setInput] = useState({
    name: '',
    age: '',
    img: '',
    note: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (): void => {
    if (!input.name || !input.age || !input.img) {
      alert('Please complete the form!');
      return;
    }
    setInvitees([
      ...invitees,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);

    setInput({
      name: '',
      age: '',
      img: '',
      note: '',
    });
  };

  return (
    <Box mb={8}>
      <Heading as='h2' size='md'>
        Add Invitee
      </Heading>
      <Flex flexWrap='wrap'>
        <Input
          type='text'
          placeholder='Name'
          variant='flushed'
          m={1}
          minW={'200px'}
          flex={1}
          value={input.name}
          onChange={handleChange}
          name='name'
        />
        <Input
          type='text'
          placeholder='Age'
          variant='flushed'
          m={1}
          flex={1}
          minW={'200px'}
          value={input.age}
          onChange={handleChange}
          name='age'
        />
        <Input
          type='text'
          placeholder='Image'
          variant='flushed'
          m={1}
          minW={'200px'}
          flex={1}
          value={input.img}
          onChange={handleChange}
          name='img'
        />
      </Flex>
      <Textarea
        type='text'
        placeholder='Notes'
        variant='flushed'
        m={1}
        flex={1}
        value={input.note}
        onChange={handleChange}
        name='note'
      />
      <Box d='flex' justifyContent='center' m='1rem 0'>
        <Button variant='solid' colorScheme='blue' onClick={handleSubmit}>
          Add To List!
        </Button>
      </Box>
    </Box>
  );
};

export default AddInviteeForm;
