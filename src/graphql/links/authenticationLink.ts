import {setContext} from '@apollo/client/link/context';

import {getToken} from '../../authentication';

const authenticationLink = setContext(async (_, {headers}) => {
  const token = await getToken();
  if (token) {
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return {headers};
});

export default authenticationLink;
