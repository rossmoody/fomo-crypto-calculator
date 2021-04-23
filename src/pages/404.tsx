import React from 'react'
import { Layout } from '../components'
import {
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Text,
  LightMode
} from '@chakra-ui/react'

const FourOhFour = (): JSX.Element => {
  return (
    <Layout>
      <Box>
        <Center as='section' bg='gray.800' color='white' height='100vh'>
          <Box
            maxW={{ base: 'xl', md: '7xl' }}
            mx='auto'
            px={{ base: '6', md: '8' }}
          >
            <Box textAlign='center'>
              <Heading
                as='h1'
                size='4xl'
                fontWeight='extrabold'
                maxW='48rem'
                mx='auto'
                lineHeight='1.2'
                letterSpacing='tight'
              >
                404
              </Heading>
              <Text fontSize='xl' mt='4' maxW='xl' mx='auto'>
                Nothing fun on this page.
              </Text>
            </Box>

            <Stack
              justify='center'
              direction={{ base: 'column', md: 'row' }}
              mt='10'
              mb='20'
              spacing='4'
            >
              <LightMode>
                <Button
                  as='a'
                  href='/'
                  size='lg'
                  colorScheme='brand'
                  px='8'
                  fontWeight='bold'
                  fontSize='md'
                >
                  Back to the FOMO
                </Button>
              </LightMode>
            </Stack>
          </Box>
        </Center>
      </Box>
    </Layout>
  )
}

export default FourOhFour
