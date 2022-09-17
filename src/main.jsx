import { render } from 'preact';
import { App } from './app';
import './helpers/setup-prefer-color-scheme';
import './index.css';
import './assets/index.css';

render(<App />, document.getElementById('app'));
