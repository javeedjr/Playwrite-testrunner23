import {  assert, test } from "./myFixture"

test("my tets 1", async ({ hey }, info) => {
    info.skip();
    console.log(hey.toUpperCase());
    let text = hey.toUpperCase()
    // assert(text).toBe("I AM letcode");
    console.log("Is it passed? " + info.status);
    // info.


})