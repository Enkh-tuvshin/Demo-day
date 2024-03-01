import { Path, Svg } from "react-native-svg";

export const ChatUp = () => {
  return (
    <Svg
      width="30"
      height="30"
      style={{ width: '100%', justifyContent: 'flex-end' }}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#000"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M12 4l0 10" />
      <Path d="M12 4l4 4" />
      <Path d="M12 4l-4 4" />
      <Path d="M4 20l16 0" />
    </Svg>
  );
};
