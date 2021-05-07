import React from 'react';
import { Alert } from 'react-native';
import { render, waitFor, fireEvent } from '@testing-library/react-native'
import { mocked } from 'ts-jest/utils';
import { object } from 'yup';

import waitForNextRender from '../../../__mocks__/helpers/waitForNextRender';

import makeFormValidationSchema from '../makeFormValidationSchema';

import FormScreen from '../FormScreen';

jest.mock('../makeFormValidationSchema');

const firstNameId = "firstNameInput";
const lastNameId = "lastNameInput";
const submitButtonId = "submitButton";

const mockAlert = jest.fn();

beforeEach(() => {
  jest.spyOn(Alert, 'alert').mockImplementation(mockAlert);
  mocked(makeFormValidationSchema).mockReturnValue(object())
});

it('correctly renders with empty values', () => {
  const { getByTestId } = render(<FormScreen />);
  expect(getByTestId(firstNameId).props.value).toBe('');
  expect(getByTestId(lastNameId).props.value).toBe('');
});

it('correctly renders with preloaded values', () => {
  const { getByTestId } = render(
    <FormScreen
      initialFirstName="initial-first-name"
      initialLastName="initial-last-name"
    />
  );
  expect(getByTestId(firstNameId).props.value).toBe('initial-first-name');
  expect(getByTestId(lastNameId).props.value).toBe('initial-last-name'); 
});

it('correctly renders with preloaded values', async () => {
  const { getByTestId } = render(
    <FormScreen
      initialFirstName="initial-first-name"
      initialLastName="initial-last-name"
    />
  );
  fireEvent(getByTestId(submitButtonId), 'press');
  
  await waitFor(() => waitForNextRender());

  expect(mockAlert).toHaveBeenCalledWith(
    expect.any(String),
    `FirstName: initial-first-name, LastName: initial-last-name`
  );
});