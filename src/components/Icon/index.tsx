import React from 'react';
import { Text, TextStyle } from 'react-native';

const iconMap = {
  home: '♡',
  info: '♧',
} as const;

type IconName = keyof typeof iconMap;

type Props = {
  name: IconName | string;
  color?: string;
  style?: TextStyle | TextStyle[];
};

const Icon: React.FC<Props> = ({ name, color, style, ...props }) => {
  const icon = (iconMap as any)[name] || 'icon not found';
  return (
    <Text style={[{ fontSize: 26, color }, style]} {...props}>
      {icon}
    </Text>
  );
};

export default Icon;
