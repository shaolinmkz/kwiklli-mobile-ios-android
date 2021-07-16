import React from "react";
import { SvgXml } from "react-native-svg";

export const LinkSvg = (props: React.ComponentProps<any>) => {
  const svgString1 = `<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.146 21.3421C12.422 22.8697 11.1229 24.0486 9.53251 24.6215C7.9421 25.1943 6.18962 25.1144 4.65789 24.3993V24.3993C3.13034 23.6754 1.95138 22.3763 1.37855 20.7859C0.805715 19.1955 0.885571 17.443 1.60067 15.9113L3.54056 11.7886C4.26425 10.2612 5.56307 9.08225 7.15325 8.50941C8.74344 7.93656 10.4957 8.01638 12.0272 8.73142V8.73142C12.9219 9.15349 13.7061 9.77791 14.3178 10.5553C14.9296 11.3327 15.352 12.2417 15.5519 13.2106" stroke="#D01C5D" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.0106 4.65789C12.7345 3.13034 14.0336 1.95138 15.624 1.37855C17.2144 0.805715 18.9669 0.885571 20.4986 1.60067C22.0258 2.32464 23.2045 3.62348 23.7773 5.21356C24.3501 6.80364 24.2705 8.55577 23.5558 10.0873L21.616 14.21C20.892 15.7375 19.5929 16.9165 18.0025 17.4893C16.4121 18.0621 14.6596 17.9823 13.1279 17.2672V17.2672C12.3603 16.9055 11.6727 16.394 11.1057 15.7626C10.5388 15.1313 10.1038 14.3929 9.82642 13.5909" stroke="#D01C5D" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  const svgString2 = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11.1216 17.9518C10.5183 19.2247 9.43577 20.2072 8.11042 20.6845C6.78508 21.1619 5.32468 21.0954 4.04825 20.4994V20.4994C2.77528 19.8961 1.79282 18.8136 1.31546 17.4882C0.838096 16.1629 0.904642 14.7025 1.50056 13.426L3.11714 9.99053C3.72021 8.71765 4.80256 7.7352 6.12771 7.25783C7.45287 6.78046 8.91309 6.84698 10.1894 7.44285V7.44285C10.9349 7.79457 11.5884 8.31492 12.0982 8.96275C12.608 9.61057 12.96 10.3681 13.1266 11.1755" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.1756 4.04825C10.7789 2.77528 11.8615 1.79282 13.1868 1.31546C14.5121 0.838095 15.9725 0.904643 17.249 1.50056C18.5216 2.10387 19.5039 3.18623 19.9812 4.5113C20.4586 5.83636 20.3922 7.29647 19.7967 8.57279L18.1801 12.0083C17.5768 13.2813 16.4942 14.2637 15.1689 14.7411C13.8435 15.2184 12.3831 15.1519 11.1067 14.556V14.556C10.467 14.2546 9.89405 13.8283 9.42156 13.3022C8.94908 12.7761 8.5866 12.1607 8.35547 11.4924" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  return <SvgXml xml={props.white ? svgString2 : svgString1} {...props} />;
};

export const TransactionSvg = (props: React.ComponentProps<any>) => {
  const svgString = `<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0)">
  <path d="M5.62001 12.07C3.17001 14.02 1.38001 16.69 0.520007 19.71C0.440008 19.97 0.590008 20.25 0.860008 20.33C0.870008 20.33 0.880007 20.34 0.890007 20.34C2.95001 20.83 10.89 22.18 14.89 15.29C15.3 14.59 15.64 13.84 15.89 13.07" stroke="#D01C5D" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.73 19.75C18.3 21.8 23.39 20.21 23.39 20.21C23.39 20.21 21.09 10.13 11.88 10.11C11.07 10.11 10.25 10.19 9.46 10.36" stroke="#D01C5D" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.32 8.89C15.86 5.79 14.44 2.91 12.25 0.659999C12.06 0.459999 11.74 0.449999 11.54 0.639999C11.53 0.649999 11.53 0.649999 11.52 0.659999C10.07 2.2 4.92 8.4 8.9 15.31C9.3 16.02 9.78 16.68 10.33 17.28" stroke="#D01C5D" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <clipPath id="clip0">
  <rect width="23.89" height="21.29" fill="white"/>
  </clipPath>
  </defs>
  </svg>`;

  return <SvgXml xml={svgString} {...props} />;
};

export const TransferSvg = (props: React.ComponentProps<any>) => {
  const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.5 0.5L9 15" stroke="#D01C5D" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.5 23.5L9 15L0.5 10.5L23.5 0.5L13.5 23.5Z" stroke="#D01C5D" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  return <SvgXml xml={svgString} {...props} />;
};

export const UnlinkSvg = (props: React.ComponentProps<any>) => {
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 21 23" fill="none">
  <path d="M10.5 0C8.02 0 6 2.02 6 4.5V7.63C6 8.18 6.45 8.63 7 8.63C7.55 8.63 8 8.18 8 7.63V4.5C8 3.12 9.12 2 10.5 2C11.88 2 13 3.12 13 4.5V10C13 11.38 11.88 12.5 10.5 12.5C9.95 12.5 9.5 12.95 9.5 13.5C9.5 14.05 9.95 14.5 10.5 14.5C12.99 14.5 15 12.49 15 10V4.5C15 2.02 12.98 0 10.5 0Z" fill="#D01C5D"/>
  <path d="M14 15.13C13.45 15.13 13 15.58 13 16.13V18.5C13 19.88 11.88 21 10.5 21C9.12 21 8 19.88 8 18.5V13.5C8 12.12 9.12 11 10.5 11C11.05 11 11.5 10.55 11.5 10C11.5 9.45 11.05 9 10.5 9C8.02 9 6 11.02 6 13.5V18.5C6 20.99 8.01 23 10.5 23C12.99 23 15 20.99 15 18.5V16.13C15 15.58 14.55 15.13 14 15.13Z" fill="#D01C5D"/>
  <path d="M3.74001 6.37998L2.44001 5.62998C1.96001 5.35998 1.35001 5.51998 1.07001 5.99998C0.790006 6.47998 0.960006 7.08998 1.44001 7.36998L2.74001 8.11998C3.22001 8.38998 3.83001 8.22998 4.10001 7.74998C4.38001 7.26998 4.22001 6.65998 3.74001 6.37998Z" fill="#D01C5D"/>
  <path d="M2.5 12C3.05 12 3.5 11.55 3.5 11C3.5 10.45 3.05 10 2.5 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12H2.5Z" fill="#D01C5D"/>
  <path d="M2.74001 13.88L1.44001 14.63C0.960006 14.91 0.790006 15.52 1.07001 16C1.35001 16.48 1.96001 16.64 2.44001 16.37L3.74001 15.62C4.22001 15.34 4.38001 14.73 4.11001 14.25C3.83001 13.77 3.22001 13.61 2.74001 13.88Z" fill="#D01C5D"/>
  <path d="M17.76 8.24998C17.94 8.24998 18.11 8.19998 18.26 8.11998L19.56 7.36998C20.04 7.08998 20.2 6.47998 19.93 5.99998C19.65 5.51998 19.04 5.35998 18.56 5.62998L17.26 6.37998C16.78 6.65998 16.62 7.26998 16.89 7.74998C17.08 8.05998 17.41 8.24998 17.76 8.24998Z" fill="#D01C5D"/>
  <path d="M20 10H18.5C17.95 10 17.5 10.45 17.5 11C17.5 11.55 17.95 12 18.5 12H20C20.55 12 21 11.55 21 11C21 10.45 20.55 10 20 10Z" fill="#D01C5D"/>
  <path d="M19.56 14.63L18.26 13.88C17.78 13.6 17.17 13.77 16.89 14.25C16.61 14.73 16.78 15.34 17.26 15.62L18.56 16.37C19.04 16.65 19.65 16.48 19.93 16C20.2 15.52 20.04 14.91 19.56 14.63Z" fill="#D01C5D"/>
  </svg>`;

  return <SvgXml xml={svgString} {...props} />;
};

export const WaveSvg = (props: React.ComponentProps<any>) => {
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
  <path d="M42 82C64.0914 82 82 64.0914 82 42C82 19.9086 64.0914 2 42 2C19.9086 2 2 19.9086 2 42C2 64.0914 19.9086 82 42 82Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M48.8091 58.2882C49.6991 56.7466 50.9502 55.4597 52.4578 54.5286L60.1847 49.7056C61.6149 48.8684 62.1093 47.0522 61.2822 45.6047C60.487 44.2218 58.7527 43.7055 57.3379 44.436L48.3363 49.1467L59.9627 35.4894C61.0326 34.2364 60.9046 32.3379 59.6516 31.2681C58.4332 30.2182 56.6268 30.3069 55.5176 31.468L45.14 42.6823L54.6504 26.2097C55.4804 24.772 54.9899 22.9415 53.5523 22.1114C52.1146 21.2814 50.2667 21.7619 49.4367 23.1996L39.9362 39.6548L44.8293 24.4195C45.3449 22.8464 44.4692 21.163 42.8962 20.6474C41.3231 20.1319 39.6224 20.9975 39.1241 22.5806L30.7396 43.5832L28.1707 36.0722C27.7014 34.4849 26.0259 33.5868 24.4386 34.056C22.8512 34.5253 21.9531 36.2008 22.4224 37.7882C22.4197 37.8328 22.427 37.8601 22.4344 37.8875L24.545 55.2726C25.1273 57.6643 26.6712 59.7104 28.8017 60.9405L34.8642 64.4406C41.0133 67.9908 45.4389 64.1255 48.8091 58.2882Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  return <SvgXml xml={svgString} {...props} />;
};

export const CaretSvg = (props: React.ComponentProps<any>) => {
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
  <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
  </svg>`;

  return <SvgXml xml={svgString} {...props} />;
};

export const CheckSvg = (props: React.ComponentProps<any>) => {
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
  <path d="M21 38.3518L29.7111 50.7145C30.0415 51.2081 30.4851 51.6156 31.0048 51.9031C31.5245 52.1907 32.1054 52.35 32.6991 52.3677C33.2928 52.3855 33.8821 52.2611 34.4181 52.0051C34.9541 51.7491 35.4211 51.3688 35.7804 50.8958L60.3337 32" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M42 82C64.0914 82 82 64.0914 82 42C82 19.9086 64.0914 2 42 2C19.9086 2 2 19.9086 2 42C2 64.0914 19.9086 82 42 82Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  return <SvgXml xml={svgString} {...props} />;
};

export const TimesSvg = (props: React.ComponentProps<any>) => {
  const svgString = `<<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
  <path d="M13.7341 0.919914C13.4901 0.675938 13.1592 0.538873 12.8142 0.538873C12.4692 0.538873 12.1383 0.675938 11.8943 0.919914L0.867316 11.9469C0.646207 12.1948 0.528308 12.5179 0.537788 12.85C0.547266 13.182 0.683406 13.4979 0.918297 13.7327C1.15319 13.9676 1.46904 14.1038 1.80109 14.1133C2.13314 14.1227 2.45624 14.0048 2.70415 13.7837L13.7311 2.75675C13.9746 2.51329 14.1116 2.18325 14.1122 1.83895C14.1127 1.49465 13.9768 1.16416 13.7341 0.919914Z" fill="#160F3D"/>
  <path d="M13.7352 11.9466L2.70825 0.919588C2.46034 0.69848 2.13724 0.58058 1.80519 0.590059C1.47314 0.599539 1.1573 0.735679 0.922404 0.970571C0.687513 1.20546 0.551373 1.52131 0.541893 1.85336C0.532414 2.18541 0.650313 2.50851 0.871422 2.75642L11.8984 13.7834C12.1463 14.0045 12.4694 14.1224 12.8015 14.1129C13.1335 14.1035 13.4494 13.9673 13.6843 13.7324C13.9191 13.4975 14.0553 13.1817 14.0648 12.8496C14.0742 12.5176 13.9563 12.1945 13.7352 11.9466V11.9466Z" fill="#160F3D"/>
  </svg>`;

  return <SvgXml xml={svgString} {...props} />;
};
