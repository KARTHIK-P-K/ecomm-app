import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];
export const EditorTabs2 = [
  {
    name: "colorpicker",
    icon: swatch,
  },
];
// export const CategoryTab = [
//   {
//     name: "Tshirt",
//     icon: shirt,
//   },
//   {
//     name: "Pant",
//     icon: trousers,
//   },
//   {
//     name: "Shoes",
//     icon: boot,
//   },
//   {
//     name: "Hat",
//     icon: hat,
//   },
// ];
export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
