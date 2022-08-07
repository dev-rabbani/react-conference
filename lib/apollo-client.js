
// External imports
import { ApolloClient, InMemoryCache } from '@apollo/client';

// create client
const client = new ApolloClient({
    uri: "https://api.react-finland.fi/graphql",
    cache: new InMemoryCache(),
});

// exports
export default client