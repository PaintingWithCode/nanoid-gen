import { writable } from 'svelte/store';

// Get user preference
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const defaultValue = prefersDarkMode ? 'dark' : 'light';

// Check if value exists in localStorage, else default to user preference
const initialValue = window.localStorage.getItem('theme') ?? defaultValue;

const theme = writable(initialValue);

theme.subscribe((value) => {
	window.localStorage.setItem('theme', value);
});

export default theme;
