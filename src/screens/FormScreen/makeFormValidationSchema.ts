import { object, string, AnyObjectSchema } from 'yup';

export default function makeFormValidationSchema(): AnyObjectSchema {
  return object().shape({
    firstName: string().required('nombre requerido'),
    lastName: string().required('apellido requerido')
  });
}
