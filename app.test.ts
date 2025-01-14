import { describe, expect, test } from "@jest/globals";

import { Calculator, capitalize, reverseString, caesarCipher, analyzeArray } from "./app";

describe('string operations', () => {
	test('First letter capitalized', () => {
		expect(capitalize('sameep')).toBe('Sameep');
	})

	test('Reverse string', ()=>{
		expect(reverseString('Sameep')).toBe('peemaS');
	})
})


describe('Math operations', () => {
	describe('Calculator Object',() => {
		test('add', () => {
			expect(Calculator.sum(5,3)).toBe(8);
		})
		test('subtract', () => {
			expect(Calculator.sub(5,3)).toBe(2);
		})
		test('divide', () => {
			expect(Calculator.div(10,5)).toBe(2);
		})
		test('multiply', () => {
			expect(Calculator.mul(10,5)).toBe(50);
		})
	})
	
})

test('caesarCipher', () => {
	expect(caesarCipher('xyz', 3)).toBe('abc');
	expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
	expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test('analyzeArray', () => {
	const object = analyzeArray([1,8,3,4,2,6]);

	expect(object).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6
	})
})