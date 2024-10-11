async function tree(dir: string): Promise<string[]> {
  const out = [];
  for await (const entry of Deno.readDir(dir)) {
    out.push(entry.name);
  }
  return out;
}

const files = await tree(Deno.args[0]);

// web standard apis supported: just like web browser css
console.log('%c' + files.join('\n'), 'background-color: blue');
