
import Car from './car.js';

const aCar = new Car('Susuki', 'Vitara', 2022, 90);

test('Car is not moving', () => {
  expect(aCar.isMoving()).toBeFalsy();
});

test('Car description', () => {
  expect(aCar.getDescription()).toBe("2022 Susuki Vitara");
})

test('Accelerate', () => {
  aCar.accelerate(20)
  expect(aCar.speed).toBe(20);
})
test('Accelerate error 1', () => {
  expect(() => aCar.accelerate(-1)).toThrowError(
    'Amount should be a positive number.');
});
test('Accelerate error 1', () => {
  expect(() => aCar.accelerate(120)).toThrowError(
    'Speed limit has been reached.');
});

test('Decelerate error', () => {
  expect(() => aCar.decelerate(-2)).toThrowError(
    'Amount should be a positive number.');
});
test('Decelerate', () => {
  aCar.decelerate(20)
  expect(aCar.speed).toBe(0);
})

test('Speed',()=>{
  expect(aCar.getSpeed()).toBe(0);
})
test('Stop', () => {
  aCar.stop();
  expect(aCar.speed).toBe(0);
})

test('Distance', () => {
  expect(aCar.calculateDistance(120)).toBe(0);
})