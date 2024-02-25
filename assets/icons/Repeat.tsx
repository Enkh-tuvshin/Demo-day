import { Svg, Path } from 'react-native-svg';

export const Repeat = () => {
  return (
    <Svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="white"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
      <Path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
    </Svg>
  );
};
