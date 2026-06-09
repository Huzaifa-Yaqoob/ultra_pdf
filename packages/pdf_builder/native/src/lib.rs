use wasm_bindgen::prelude::*;

// ⚡ This macro tells wasm-bindgen to export this function to TypeScript
#[wasm_bindgen]
pub fn add(left: u64, right: u64) -> u64 {
    left + right
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}