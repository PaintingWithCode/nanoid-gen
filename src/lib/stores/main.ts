import { writable } from 'svelte/store';
import { DEFAULT_ALPHABET, DEFAULT_LENGTH, MIN_AMOUNT } from '../constants';

const alphabet = writable(DEFAULT_ALPHABET);
const length = writable(DEFAULT_LENGTH);
const prefix = writable('');
const amount = writable(MIN_AMOUNT);

export { alphabet, length, prefix, amount };
