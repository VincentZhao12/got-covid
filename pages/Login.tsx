import {
    Center,
    Box,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    HStack,
    Text,
    Button,
} from 'native-base';
import React, { FC } from 'react';
import { Text as NativeText } from 'react-native';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
    return (
        <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading
                    size="lg"
                    fontWeight="600"
                    color="coolGray.800"
                    _dark={{
                        color: 'warmGray.50',
                    }}
                >
                    <NativeText>Welcome</NativeText>
                </Heading>
                <Heading
                    mt="1"
                    _dark={{
                        color: 'warmGray.200',
                    }}
                    color="coolGray.600"
                    fontWeight="medium"
                    size="xs"
                >
                    <NativeText>Sign in to continue</NativeText>
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>
                            <NativeText>Email</NativeText>
                        </FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>
                            <NativeText>Password</NativeText>
                        </FormControl.Label>
                        <Input type="password" />
                        <Link
                            _text={{
                                fontSize: 'xs',
                                fontWeight: '500',
                                color: 'indigo.500',
                            }}
                            alignSelf="flex-end"
                            mt="1"
                        >
                            <NativeText>Forgot password?</NativeText>
                        </Link>
                    </FormControl>
                    <Button mt="2" colorScheme="indigo">
                        <NativeText>Sign in</NativeText>
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text
                            fontSize="sm"
                            color="coolGray.600"
                            _dark={{
                                color: 'warmGray.200',
                            }}
                        >
                            <NativeText>Don't have an account?</NativeText>
                        </Text>
                        <Link
                            _text={{
                                color: 'indigo.500',
                                fontWeight: 'medium',
                                fontSize: 'sm',
                            }}
                            href="#"
                        >
                            <NativeText>Sign Up</NativeText>
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
};

export default Login;
