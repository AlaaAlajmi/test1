import { DEFAULT_VERSION, createMetaTag } from '../helpers';
import injectInHead from './injections/head';

export default {
  mounted() {
    injectInHead.bind(this)();
  }
};
