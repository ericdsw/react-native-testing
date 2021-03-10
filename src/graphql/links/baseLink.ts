import {createHttpLink} from '@apollo/client';

const baseLink = createHttpLink({
  uri: '',
  headers: {
    Accept: '*/*',
  },
});

export default baseLink;
