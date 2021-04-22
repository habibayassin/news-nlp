import { checkForUrl } from '../src/client/js/urlChecker'

describe("checkForUrl should exist", () => {
    test("It should return true", () => {
           expect(checkForUrl).toBeDefined();
})});

describe("checkForUrl with valid url", () => {
    test("It should return true", () => {
           expect(checkForUrl("https://youtube.com")).toBeTruthy();
})});

describe("checkForUrl with invalid url", () => {
    test("It should return false", () => {
        expect(checkForUrl("hello")).toBeFalsy();
})});