import { customAlphabet } from 'nanoid';
import { DEFAULT_ALPHABET } from '../constants';

type Options = {
	length: number;
	alphabet?: string;
	prefix?: string;
};

function generate({ length, alphabet = DEFAULT_ALPHABET, prefix }: Options) {
	const nanoid = customAlphabet(alphabet, length);

	const id = nanoid();

	return prefix ? prefix + id : id;
}

export default generate;
