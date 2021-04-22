import { handleSubmit } from '../src/client/js/formHandler'
import '@babel/polyfill';


describe('handleSubmit() should exist' , () => {
    test('It should return true', async () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe('handleSubmit() should be a function' , () => {
    test('It should return true', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});