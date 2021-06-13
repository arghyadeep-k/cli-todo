import { parse } from "https://deno.land/std/flags/mod.ts";

console.log(Deno.args);

console.log(parse(Deno.args));

const input = parse(Deno.args);

console.log(input._[0]);
switch (input._[0]) {
  case "add":
    // Check if file exists
    break;
  case "del":
    break;
  case "list":
    break;
  case "done":
    break;
  case "help":
    break;
  default:
    break;
}
