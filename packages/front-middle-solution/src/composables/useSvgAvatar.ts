import { computed, unref, type Ref } from "vue";

export function useSvgAvatar(content: Ref<string>) {
  const svgTemplate = `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="40px"
    height="40px"
    viewBox="0 0"
    style="background-color: transparent"
  >
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      rx="8px"
      ry="8px"
      style="fill: dodgerblue"
    />
    <text
      x="50%"
      y="50%"
      dominant-baseline="middle"
      text-anchor="middle"
      style="font-size: 20px; fill: aliceblue"
    >
      ${unref(content)}
    </text>
  </svg>`;

  return computed(
    () =>
      "data:image/svg+xml;base64," +
      btoa(unescape(encodeURIComponent(svgTemplate)))
  );
}
