import assert from 'assert';
import path from 'path';
import resolve, { ResolverFactory } from 'oxc-resolver';


// `ResolverFactory`
const resolver = new ResolverFactory({
  alias: {
    '@/*': ['./src/*'],
  }
});
console.log(resolver.sync(process.cwd(), '@/index.js'));
