import { AnyObjectSchema } from 'yup';

import makeFormValidationSchema from '../makeFormValidationSchema';

const validObject = {
  firstName: 'foo',
  lastName: 'bar'
}

let schema: AnyObjectSchema;
beforeEach(() => {
  schema = makeFormValidationSchema();
});

it('correctly returns valid object', () => {
  const result = schema.validateSync(validObject);
  expect(result).toEqual(validObject);
});

it('correctly reports missing first name', () => {
  expect(
    () => {
      schema.validateSync({
        ...validObject,
        firstName: '',
      })
    }
  ).toThrow('nombre requerido');
});

it('correctly reports when the first name is too long', () => {
  expect(
    () => {
      schema.validateSync({
        ...validObject,
        firstName: 'x'.repeat(11),
      })
    }
  ).toThrow('maximo de 10 caracteres');
})

it('correctly reports missing last name', () => {
  expect(
    () => {
      schema.validateSync({
        ...validObject,
        lastName: '',
      })
    }
  ).toThrow('apellido requerido');
});
