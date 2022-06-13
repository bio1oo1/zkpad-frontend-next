import React, {useState} from 'react';
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
  Spinner
} from '@chakra-ui/react';
import {ApiContact} from '../../constants';
import style from './NotifySection.module.scss';

import axios from 'axios';
import * as EmailValidator from 'email-validator';

interface Props {}

const NotifySection = (props: Props) => {
  const [contactEmail, setContactEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState(true);
  const toast = useToast();

  const handleClick = () => {
    if (EmailValidator.validate(contactEmail)) {
      setSubmitStatus(false);
      axios
        .post(ApiContact, {
          email: contactEmail
        })
        .then(response => {
          console.log(response.data);
          setSubmitStatus(true);
          if (response.data.status == 'success') {
            toast({
              title: 'Email',
              description: 'You will soon be notified 👀',
              status: 'success',
              duration: 2000,
              isClosable: true
            });
          } else {
            toast({
              title: 'Email',
              description: 'Failed to register your email ❌',
              status: 'error',
              duration: 2000,
              isClosable: true
            });
          }
        })
        .catch(function (error) {
          console.log(error.toJSON());
          setSubmitStatus(true);
        });
    } else {
      toast({
        title: 'Email',
        description: 'Please input valid Email ✍️',
        status: 'warning',
        duration: 2000,
        isClosable: true
      });
    }
  };

  return (
    <Box
      w="100%"
      bg="#fff"
      color="#000"
      textAlign="center"
      borderRadius="4px"
      px="10px"
      py="64px"
      className={style.notify}
    >
      <Heading fontSize={{base: '20px', md: '24px'}} mb="10px">
        JOIN THE WAITLIST
      </Heading>
      <Flex color="#000" w={{base: '330px', md: '380px'}} m="auto">
        <Spacer />
        <InputGroup
          mt="15px"
          w={{base: '300px', md: '380px'}}
          border="2px #000"
          borderRadius="4px"
          p="6px"
          _hover={{}}
        >
          <Input
            type="email"
            id="contact-email"
            pr="105px"
            placeholder="vitalik@email.com"
            focusBorderColor="#000"
            boxShadow="0 0 0 2px #000"
            borderRadius="3px"
            value={contactEmail}
            onChange={e => setContactEmail(e.target.value)}
          />
          <InputRightElement w="110px" p="3px">
            <Button
              w="95px"
              h="32px"
              mt="12px"
              mr="2px"
              bg="purple.900"
              color="#fff"
              fontSize="14px"
              fontWeight="bold"
              p="9px 18px"
              onClick={handleClick}
              _hover={{bg: 'purple.700'}}
              _active={{}}
              disabled={!submitStatus}
            >
              {submitStatus ? 'Submit' : <Spinner />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Spacer />
      </Flex>
    </Box>
  );
};

export default NotifySection;
