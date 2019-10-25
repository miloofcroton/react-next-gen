type Spacing = (x: number) => number;

export interface Sizes {
  XXS?: number;
  XS?: number;
  S?: number;
  M?: number;
  L?: number;
  XL?: number;
  XXL?: number;
}

const spacingDefault: Spacing = (x) => 9 * x;

export const sizesGenerator = (spacingFn: Spacing): Sizes => ({
  XXS: spacingFn(1/3),
  XS: spacingFn(2/3),
  S: spacingFn(1),
  M: spacingFn(4/3),
  L: spacingFn(5/3),
  XL: spacingFn(8/3),
  XXL: spacingFn(10/3),
});

export const sizeDefaults = sizesGenerator(spacingDefault);
