// client.ts
import { createClient } from '../../node_modules/@sanity/client';

const clientConfig = {
  projectId: 'pbn529wk', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2023-05-03',
};

export default createClient(clientConfig);
