import React, { useState, useEffect } from 'react'
import { Field, Formik, Form } from 'formik'
import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  useColorModeValue,
  useToast,
  VisuallyHidden,
} from '@chakra-ui/react'

import { GetContext } from '../layout'
import { ButtonBar } from '../button-bar'

import * as utils from './utils'
import { validateDate } from './validate'

export const Hero = (): JSX.Element => {
  const { state, dispatch } = GetContext()
  const color = useColorModeValue('brand.500', 'brand.300')

  const [showButton, setShowButton] = useState(true)
  const [showSocial, setShowSocial] = useState(false)

  const toast = useToast()

  useEffect(() => {
    utils.resizeInput()
  }, [])

  return (
    <Box as="header">
      <Formik
        initialValues={{
          investment: `$${state.investment}`,
          date: state.date,
        }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, actions) => {
          const { date, investment } = values

          setTimeout(actions.setSubmitting, 500, false)
          setTimeout(setShowButton, 1000, false)
          setTimeout(setShowSocial, 2000, true)

          dispatch({
            type: 'update',
            investment: utils.removeCurrency(investment),
            date,
          })
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Center pt={[12, 16]} pb={12} px={4} flexDir="column">
              <Heading
                as="h1"
                size="xl"
                sx={{ textAlign: 'center' }}
                maxW="2xl"
                mb={[4, 8]}
              >
                If I invested
                <Field name="investment">
                  {({ form, field }) => (
                    <FormControl
                      id="investment-input"
                      isRequired
                      mx={4}
                      w="auto"
                      display="inline-flex"
                      onKeyUp={utils.resizeInput}
                    >
                      <VisuallyHidden>
                        <FormLabel>Investment amount</FormLabel>
                      </VisuallyHidden>
                      <NumberInput
                        {...field}
                        variant="flushed"
                        focusBorderColor={'brand.300'}
                        color={color}
                        display="flex"
                        min={1}
                        max={100000000}
                        step={20}
                        onFocus={() => {
                          setTimeout(setShowSocial, 300, false)
                          setTimeout(setShowButton, 700, true)
                        }}
                        onChange={(event) => {
                          form.setFieldValue(
                            'investment',
                            utils.addCurrency(event)
                          )
                        }}
                      >
                        <NumberInputField
                          p={0}
                          fontSize="inherit"
                          fontWeight="inherit"
                          textAlign="center"
                          display="flex"
                          alignItems="center"
                          inputMode="numeric"
                          w={108}
                          {...field}
                        />
                      </NumberInput>
                    </FormControl>
                  )}
                </Field>
                into one cryptocurrency on
                <Field
                  name="date"
                  validate={(string: string) => validateDate(string, toast)}
                >
                  {({ field, form }) => (
                    <FormControl ml={4} w={[250, 280]} display="inline-flex">
                      <VisuallyHidden>
                        <FormLabel>Date</FormLabel>
                      </VisuallyHidden>
                      <Input
                        type="date"
                        isRequired
                        isInvalid={form.touched.date & form.errors.date}
                        color={color}
                        focusBorderColor={'brand.300'}
                        variant="flushed"
                        fontSize="inherit"
                        fontWeight="inherit"
                        h="initial"
                        p={0}
                        onFocus={() => {
                          setTimeout(setShowSocial, 300, false)
                          setTimeout(setShowButton, 700, true)
                        }}
                        {...field}
                      />
                    </FormControl>
                  )}
                </Field>
                , today it would be worth...
              </Heading>
              <ButtonBar
                isSubmitting={isSubmitting}
                showButton={showButton}
                showSocial={showSocial}
              />
            </Center>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
