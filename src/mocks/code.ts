export const code = [
  `
/**
 * Convert pixels to rem units.
 * @param pixels - The pixel value to convert.
 * @param baseFontSize - The base font size in pixels. Default is 16.
 * @returns The value in rem units.
 */
function pxToRem(pixels: number, baseFontSize: number = 16): string {
    const remValue = pixels / baseFontSize;
    return \`\${remValue}rem\`;
}

// Example usage:
const pixelValue = 32;
const remValue = pxToRem(pixelValue);
console.log(\`\${pixelValue}px is equal to \${remValue}\`);
`,

  `
/**
 * Convert rem units to pixels.
 * @param remValue - The rem value to convert.
 * @param baseFontSize - The base font size in pixels. Default is 16.
 * @returns The value in pixels.
 */
function remToPx(remValue: number, baseFontSize: number = 16): string {
 const pixelValue = remValue * baseFontSize;
    return \`\${pixelValue}px\`;
}`
];
