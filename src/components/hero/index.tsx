import React, { useEffect } from 'react'
import * as utils from './utils'
import { validateDate } from './validate'
import { getContext } from '../'
import { Field, Formik, Form } from 'formik'
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'

export const Hero = (): JSX.Element => {
  const { state, dispatch } = getContext()

  const toast = useToast()

  useEffect(() => {
    utils.resizeInput()
  }, [])

  return (
    <Box as='header'>
      <Formik
        initialValues={{
          investment: `$${state.investment}`,
          date: state.date
        }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, actions) => {
          const { date, investment } = values

          dispatch({
            type: 'update',
            investment: utils.removeCurrency(investment),
            date
          })

          setTimeout(() => {
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Center pt={[12, 16]} pb={20} px={4} flexDir='column'>
              <Heading
                as='h1'
                size='xl'
                sx={{ textAlign: 'center' }}
                maxW='2xl'
                mb={[4, 8]}
              >
                If I invested
                <Field name='investment'>
                  {({ form, field }) => (
                    <FormControl
                      id='investment-input'
                      isRequired
                      mx={4}
                      w='auto'
                      display='inline-flex'
                      onKeyUp={utils.resizeInput}
                    >
                      <NumberInput
                        {...field}
                        variant='flushed'
                        focusBorderColor={'brand.300'}
                        color={useColorModeValue('brand.500', 'brand.300')}
                        display='flex'
                        min={1}
                        max={100000000}
                        step={20}
                        onChange={(e) => {
                          form.setFieldValue('investment', utils.addCurrency(e))
                        }}
                      >
                        <NumberInputField
                          p={0}
                          fontSize='inherit'
                          fontWeight='inherit'
                          textAlign='center'
                          display='flex'
                          alignItems='center'
                          inputMode='numeric'
                          w={108}
                          {...field}
                        />
                      </NumberInput>
                    </FormControl>
                  )}
                </Field>
                into one cryptocurrency on
                <Field
                  name='date'
                  validate={(string: string) => validateDate(string, toast)}
                >
                  {({ field, form }) => (
                    <FormControl
                      ml={4}
                      w={[240, 230]}
                      display='inline-flex'
                      textAlign='center'
                    >
                      <Input
                        isRequired
                        isInvalid={form.touched.date & form.errors.date}
                        color={useColorModeValue('brand.500', 'brand.300')}
                        focusBorderColor={'brand.300'}
                        variant='flushed'
                        type='date'
                        textAlign='inherit'
                        h='initial'
                        p={0}
                        fontSize='inherit'
                        fontWeight='inherit'
                        display='flex'
                        {...field}
                      />
                    </FormControl>
                  )}
                </Field>
                , today it would be worth...
              </Heading>
              <Button
                size={'lg'}
                colorScheme='brand'
                type='submit'
                isLoading={isSubmitting}
                m={4}
              >
                Calculate FOMO
              </Button>
            </Center>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
