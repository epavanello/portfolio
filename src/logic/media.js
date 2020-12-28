import watchMedia from "svelte-media";

const ranges = [
  { name: "sm", size: 640 },
  { name: "md", size: 768 },
  { name: "lg", size: 1024 },
  { name: "xl", size: 1280 },
  { name: "2xl", size: 1536 },
];

const exactRange = (size1, size2) => `(min-width: ${size1}px)${size2 ? ` and (max-width: ${size2 - 1}px)` : ``}`;

const mediaqueries = ranges.reduce(
  (obj, size, i) => ({
    ...obj,
    [size.name]: `(min-width: ${size.size}px)` /* [size.name + "!"]: exactRange(size.size, ranges[i + 1]?.size) */,
  }),
  {}
);

console.log(mediaqueries);

const media = watchMedia(mediaqueries);

console.log(media);
export default media;
