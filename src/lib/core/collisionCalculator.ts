const units = [
	{ num: 60, asIs: false, ending: 'second' },
	{ num: 60, asIs: false, ending: 'minute' },
	{ num: 24, asIs: false, ending: 'hour' },
	{ num: 365.26, asIs: false, ending: 'day' },
	{ num: 1000, asIs: false, ending: 'year' },
	{ num: 1000, asIs: true, ending: 'thousand years' },
	{ num: 1000, asIs: true, ending: 'million years' },
	{ num: 1000, asIs: true, ending: 'billion years' },
	{ num: 1000, asIs: true, ending: 'trillion years' },
	{ num: 1000, asIs: true, ending: 'couple of quadrillion years' }
];

// `randomBits` function calculates the number of random bits required to generate a unique
// identifier of `idLength` length, given an alphabet of `alphabetLength` characters.
function randomBits(alphabetLength: number, idLength: number) {
	return idLength * (Math.log(alphabetLength) / Math.LN2);
}

// `criticalNumber` function calculates the critical number of unique identifiers to be generated
// before the probability of collision reaches `probability`.
function criticalNumber(randomBits: number, probability: number) {
	return Math.floor(Math.sqrt(2 * Math.pow(2, randomBits) * Math.log(1 / (1 - probability))));
}

// `timeToCollision` function calculates the time required to reach the critical number of unique
// identifiers generated, given the generation speed `speed`.
function timeToCollision(criticalNumber: number, speed: number) {
	return Math.floor(criticalNumber / speed);
}

function pluralize(n: number, word: string) {
	return n === 1 ? word : word + 's';
}

// `formatTime` function formats the calculated time to collision by dividing the input `time`
// by each of the time units defined in the `units` array, until the result is less than 1.
// The returned result is then formatted as a string with the appropriate unit and number.
function formatTime(time: number) {
	let current = time;
	let [unit, ...rst] = units;
	while (rst.length > 0) {
		const next = current / unit.num;
		if (next < 1) {
			const n = Math.round(current);
			return `~${n} ${unit.asIs ? unit.ending : pluralize(n, unit.ending)}`;
		} else {
			current = next;
			[unit, ...rst] = rst;
		}
	}
	return unit.ending;
}

function calculate(alphabet: string, length: number, speed: number, unit: string) {
	// Check if the speed unit is hour and if so convert it to seconds
	let convertedSpeed = speed;
	if (unit === 'hour') {
		convertedSpeed /= 3600;
	}

	// Calculate the number of bits required to represent all possible combinations of the given alphabet and length
	const bits = randomBits(alphabet.length, length);

	// Probability is set to 0.01, the critical number is calculated based on the number of bits and probability
	const probability = 0.01;
	const numberIds = criticalNumber(bits, probability);

	// Calculate the time it takes to reach the critical number of unique ids
	const time = timeToCollision(numberIds, convertedSpeed);

	// Return the time in a human-readable format
	return formatTime(time);
}

export default calculate;
