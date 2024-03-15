import { Path, Svg } from 'react-native-svg';

export const FilterEmoji = (): React.ReactNode => {
  return (
    <Svg
      width="30"
      height="30"
      style={{ marginHorizontal: 10, marginVertical: 5 }}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#ffffff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <Path d="M9 10l.01 0" />
      <Path d="M15 10l.01 0" />
      <Path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
    </Svg>
  );
};
