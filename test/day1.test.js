import { assertEquals } from "assert_equals";
import { aocDay1 } from "../day1.js";

Deno.test("1abc2", () => assertEquals(aocDay1("1abc2"), 12));

Deno.test("pqr3stu8vwx", () => assertEquals(aocDay1("pqr3stu8vwx"), 38));

Deno.test("a1b2c3d4e5f", () => assertEquals(aocDay1("a1b2c3d4e5f"), 15));

Deno.test("treb7uchet", () => assertEquals(aocDay1("treb7uchet"), 77));

Deno.test("sum up solutions", () =>
  assertEquals(
    aocDay1("1abc2") + aocDay1("pqr3stu8vwx") + aocDay1("a1b2c3d4e5f") + aocDay1("treb7uchet"),
    142,
  ));
