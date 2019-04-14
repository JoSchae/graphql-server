import { mergeTypes } from 'merge-graphql-schemas';

import User from './User/';

// import the types here.
const typeDefs = [User];

export default mergeTypes(typeDefs, {all: true});