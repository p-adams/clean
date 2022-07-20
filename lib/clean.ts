import * as css from "https://deno.land/x/css@0.3.0/mod.ts";

export async function clean() {
  const styleSheet = await Deno.readTextFile("../data/index.css");
  const parsedCss = css.parse(styleSheet);
  console.log(parsedCss);
}
