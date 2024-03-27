import { Svg, Path } from 'react-native-svg';

export const Logout = (): React.ReactNode => {
  return (
    <Svg
      width="25"
      height="25"
      style={{ alignItems: 'center' }} 
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke="red"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
      <Path d="M9 12h12l-3 -3" />
      <Path d="M18 15l3 -3" />
    </Svg>
  );
};
