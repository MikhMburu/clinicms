// Import libraries
import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
// Import files/functions
import typeDefs from "./apollo/typeDefs.js";
import resolvers from "./apollo/resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const serve = async ()=>{
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  })
  console.log(`
            _________________________________________________
                          WELCOME TO CLINICMS

            Server up and running on ${url}
            --------------------------------------------------
  `)
  
}
serve();