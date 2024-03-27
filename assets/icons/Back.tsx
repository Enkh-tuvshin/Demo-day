import { Svg, Path } from 'react-native-svg';

export const Back = (): React.ReactNode => {
  return (
    <Svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#000"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M5 12l14 0" />
      <Path d="M5 12l6 6" />
      <Path d="M5 12l6 -6" />
    </Svg>
  );
};
