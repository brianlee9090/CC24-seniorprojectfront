import {
  Center,
  Stack,
  Image,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Divider,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Just GO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center h="100vh" bg="teal.500" w="100vw">
        <Stack boxShadow="md" bg="whiteAlpha.900" p="20" rounded="md" min-height="95vh" min-w="40vw">
          <Image
            src="http://en.ikanji.jp/user_data/images/upload/character/original/E4BA94.png"
            mb="8"
            alt="JustGoLogo"
            mx="auto"
          />
          <Heading as="h1"> Log in and Just GO. </Heading>
          <Text fontSize="lg" color="gray.600">
            Enter your username and password.
          </Text>

          <FormControl>
            <FormLabel htmlFor="email">Email address:</FormLabel>
            <Input
              placeholder="Enter your email here"
              id="email"
              type="email"
            />
            <FormLabel htmlFor="password" marginTop="5px">
              Password:
            </FormLabel>
            <Input
              placeholder="Enter your password here"
              id="password"
              type="password"
            />
            <FormHelperText></FormHelperText>
            <Center>
              <Button colorScheme="teal" variant="outline">
                Log in
              </Button>
            </Center>
          </FormControl>

          <Divider orientation="horizontal" paddingTop="5px" />

          <Center paddingTop="15px">
            <Link href="/selection" passHref>
              <Button colorScheme="orange" variant="solid">
                Guest Login
              </Button>
            </Link>
          </Center>
        </Stack>
      </Center>
    </div>
  );
};

export default Home;
