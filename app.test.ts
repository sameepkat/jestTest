import { describe, expect, test } from "@jest/globals";

import { Calculator, capitalize, reverseString, sum } from "./app";

describe('string operations', () => {
	test('First letter capitalized', () => {
		expect(capitalize('sameep')).toBe('Sameep');
	})

	test('Reverse string', ()=>{
		expect(reverseString('Sameep')).toBe('peemaS');
	})
})


describe('Math operations', () => {
	test('adds 1+2 to equal 3', () => {
		expect(sum(1, 2)).toBe(3);
	});

	describe('Calculator Object',() => {
		test('add', () => {
			expect(Calculator.sum(5+3)).toBe(8);
		})
		test('subtract', () => {
			expect(Calculator.sub(5-3)).toBe(2);
		})
		test('divide', () => {
			expect(Calculator.div(10/5)).toBe(2);
		})
		test('multiply', () => {
			expect(Calculator.mul(10*5)).toBe(50);
		})
	})
	
})
