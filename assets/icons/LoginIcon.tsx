import { Svg, Path } from 'react-native-svg';

export const LoginIcon = (): React.ReactNode => {
  return (
    <Svg
      width="35"
      height="35"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#000"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
      <Path d="M3 12h13l-3 -3" />
      <Path d="M13 15l3 -3" />
    </Svg>
  );
};
