import test from 'ava';
import keyvTestSuite, { keyvOfficialTests } from '@keyv/test-suite';
import Keyv from 'keyv';
import KeyvMysql from 'this';

keyvOfficialTests(test, Keyv, 'mysql://mariadb@localhost:3330/test', 'mysql://foo');

const store = () => new KeyvMysql('mysql://mariadb@localhost:3330/test');
keyvTestSuite(test, Keyv, store);
