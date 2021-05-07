import { AnyObjectSchema } from 'yup';

import makeFormValidationSchema from '../makeFormValidationSchema';

let schema: AnyObjectSchema;
beforeEach(() => {
  schema = makeFormValidationSchema();
});

it('correctly reports missing first name', () => {
  expect(
    () => {
      schema.validateSync({
        firstName: '',
        lastName: 'last-name'
      })
    }
  ).toThrow('nombre requerido')
});
