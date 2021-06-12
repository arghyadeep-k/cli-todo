import { existsSync } from "./deps.ts";
class Counter {
  increment() {
    if (!existsSync("./.count.txt")) {
      Deno.writeTextFileSync("./count.txt", "1");
    } else {
      const filedata = Deno.readTextFileSync("./count.txt");
      let count = parseInt(filedata);
      count = count + 1;
      Deno.writeTextFileSync("./count.txt", count);
    }
  }
}
