import { object, string, AnyObjectSchema } from 'yup';

export default function makeFormValidationSchema(): AnyObjectSchema {
  return object().shape({
    firstName: string()
      .required('nombre requerido')
      .max(10, 'maximo de 10 caracteres'),
    lastName: string().required('apellido requerido')
  });
}
