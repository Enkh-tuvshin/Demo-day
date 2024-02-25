import { Path, Svg } from "react-native-svg";

export const Microphone = () => {
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
      <Path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z" />
      <Path d="M5 10a7 7 0 0 0 14 0" />
      <Path d="M8 21l8 0" />
      <Path d="M12 17l0 4" />
    </Svg>
  );
};
