import watchMedia from "svelte-media";

const breakpoints = [
  { name: "sm", size: 640 },
  { name: "md", size: 768 },
  { name: "lg", size: 1024 },
  { name: "xl", size: 1280 },
  { name: "2xl", size: 1536 },
];

const getExactRange = (size1, size2) => `(min-width: ${size1}px)${size2 ? ` and (max-width: ${size2 - 1}px)` : ``}`;
const getMedia = (size) => `(min-width: ${size}px)`;

const mediaqueries = breakpoints.reduce(
  (obj, breakpoint, i) => ({
    ...obj,
    [breakpoint.name]: getMedia(breakpoint.size),
    ["exact_" + breakpoint.name]: getExactRange(breakpoint.size, breakpoints[i + 1] && breakpoints[i + 1].size),
  }),
  { mobile: getExactRange(0, breakpoints[0].size) }
);

import type { Readable } from "svelte/store";

const media = watchMedia(mediaqueries) as Readable<{
  sm: boolean;
  exact_sm: boolean;
  md: boolean;
  exact_md: boolean;
  lg: boolean;
  exact_lg: boolean;
  xl: boolean;
  exact_xl: boolean;
  "2xl": boolean;
  exact_2xl: boolean;
  mobile: boolean;
}>;

export default media;
