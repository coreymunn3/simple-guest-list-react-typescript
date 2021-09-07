import React from 'react';
import { Stack, Flex, Text, Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useColorModeValue } from '@chakra-ui/color-mode';
import theme from '@chakra-ui/theme';
import { IState as IProps } from '../App';

const InviteList: React.FC<IProps> = (props) => {
  const { people } = props;

  const rowBgColor = useColorModeValue(
    theme.colors.blue[50],
    theme.colors.blue[700]
  );
  const rowHeaderTextColor = useColorModeValue(
    theme.colors.blue[500],
    theme.colors.blue[200]
  );

  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <Flex
          key={person.name}
          padding={4}
          bgColor={rowBgColor}
          borderRadius='lg'
          mb={4}
          alignItems='center'
        >
          <Image
            borderRadius='full'
            boxSize='50px'
            src={person.url}
            alt={person.name}
            objectFit='cover'
            mr={4}
          />
          <Flex flex={1} alignItems='center'>
            <Text flex={1}>{person.name}</Text>
            <Text flex={1}>{person.age}</Text>
            <Text flex={1}>{person.note}</Text>
          </Flex>
        </Flex>
      );
    });
  };
  return (
    <Stack>
      <Flex pl={4} pr={4}>
        <Box w={'50px'} mr={4}></Box>
        <Flex flex={1} alignItems='center'>
          <Text flex={1} fontWeight='bold' color={rowHeaderTextColor}>
            Name
          </Text>
          <Text flex={1} fontWeight='bold' color={rowHeaderTextColor}>
            Age
          </Text>
          <Text flex={1} fontWeight='bold' color={rowHeaderTextColor}>
            Notes
          </Text>
        </Flex>
      </Flex>
      {renderList()}
    </Stack>
  );
};

export default InviteList;
