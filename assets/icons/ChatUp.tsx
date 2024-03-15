import { Path, Svg } from 'react-native-svg';

export const ChatUp = (): React.ReactNode => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#000000"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M8 9h8" />
      <Path d="M8 13h6" />
      <Path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
    </Svg>
  );
};
