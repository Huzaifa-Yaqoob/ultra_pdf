/**
 * Asynchronously imports the WASM engine.
 * Using --target bundler ensures this works smoothly in both client and server environments.
 */
async function getEngine() {
  return await import('./wasm/pdf_builder_native.js');
}

export async function universalAdd(left: bigint, right: bigint): Promise<bigint> {
  const engine = await getEngine();

  // Rust u64 maps directly to JavaScript BigInt values natively!
  return engine.add(left, right);
}