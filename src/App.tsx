import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import CountryList from "./components/CountryList";

function App() {
  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <CountryList />
      </ApolloProvider>
    </>
  );
}

export default App;
