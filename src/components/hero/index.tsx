import React from 'react'
import { getContext } from '../'
import { validateDate } from './validate'
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

const addCurrency = (val) => `$` + val
const removeCurrency = (string: string) => parseInt(string.replace('$', ''), 10)

export const Hero = () => {
  const { dispatch } = getContext()

  const toast = useToast()

  return (
    <Box as='header'>
      <Formik
        initialValues={{
          investment: '$100',
          date: '2018-01-20'
        }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, actions) => {
          const { date, investment } = values
          dispatch({
            type: 'update',
            investment: removeCurrency(investment),
            date
          })

          setTimeout(() => {
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Center pt={[8, 12]} pb={[10, 16]} px={4} flexDir='column'>
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
                      isRequired
                      mx={4}
                      w='auto'
                      display='inline-flex'
                      onKeyUp={(event) => {
                        const ele = event.target as HTMLInputElement
                        const width = (ele.value.length + 1) * 26
                        ele.style.width = width.toString() + 'px'
                      }}
                    >
                      <NumberInput
                        {...field}
                        variant='flushed'
                        focusBorderColor={'brand.300'}
                        color={useColorModeValue('brand.500', 'brand.300')}
                        display='flex'
                        min={1}
                        max={1000000}
                        step={20}
                        onChange={(e) => {
                          form.setFieldValue('investment', addCurrency(e))
                        }}
                      >
                        <NumberInputField
                          p={0}
                          fontSize='inherit'
                          fontWeight='inherit'
                          textAlign='center'
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
                    <FormControl ml={4} w={[240, 230]} display='inline-block'>
                      <Input
                        isRequired
                        isInvalid={form.touched.date & form.errors.date}
                        color={useColorModeValue('brand.500', 'brand.300')}
                        focusBorderColor={'brand.300'}
                        variant='flushed'
                        type='date'
                        h='initial'
                        p={0}
                        fontSize='inherit'
                        fontWeight='inherit'
                        textAlign='center'
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
                Generate FOMO
              </Button>
            </Center>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
