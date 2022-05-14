export async function clean() {
  const styleSheet = await Deno.readTextFile(Deno.env.get("VAR") as string);
  console.log(styleSheet);
}
