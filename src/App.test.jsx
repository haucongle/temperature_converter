import { describe, expect, test } from 'vitest'
import { convertTemperature } from './App'

// Polyfill for crypto.getRandomValues
if (!global.crypto) {
	global.crypto = {
		getRandomValues: (arr) => {
			for (let i = 0; i < arr.length; i++) {
				arr[i] = Math.floor(Math.random() * 256)
			}
			return arr
		},
	}
}

describe('convertTemperature', () => {
	test('converts Celsius to Fahrenheit', () => {
		const result = convertTemperature(0, 'Celsius', 'Fahrenheit')
		expect(result).toBe('0 Celsius = 32.00 Fahrenheit')
	})

	test('converts Celsius to Kelvin', () => {
		const result = convertTemperature(0, 'Celsius', 'Kelvin')
		expect(result).toBe('0 Celsius = 273.15 Kelvin')
	})

	test('converts Fahrenheit to Celsius', () => {
		const result = convertTemperature(32, 'Fahrenheit', 'Celsius')
		expect(result).toBe('32 Fahrenheit = 0.00 Celsius')
	})

	test('converts Fahrenheit to Kelvin', () => {
		const result = convertTemperature(32, 'Fahrenheit', 'Kelvin')
		expect(result).toBe('32 Fahrenheit = 273.15 Kelvin')
	})

	test('converts Kelvin to Celsius', () => {
		const result = convertTemperature(273.15, 'Kelvin', 'Celsius')
		expect(result).toBe('273.15 Kelvin = 0.00 Celsius')
	})

	test('converts Kelvin to Fahrenheit', () => {
		const result = convertTemperature(273.15, 'Kelvin', 'Fahrenheit')
		expect(result).toBe('273.15 Kelvin = 32.00 Fahrenheit')
	})

	test('handles invalid input', () => {
		const result = convertTemperature('invalid', 'Celsius', 'Fahrenheit')
		expect(result).toBe('Please enter a valid number')
	})

	test('handles same unit conversion', () => {
		const result = convertTemperature(100, 'Celsius', 'Celsius')
		expect(result).toBe('100 Celsius = 100.00 Celsius')
	})
})
