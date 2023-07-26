import type {ReactElement} from 'react';
import type {TextStyle, ViewStyle} from 'react-native';

export interface ISliderView {
  info?: string;
  ref?: any;
  SelfView?: ReactElement;
  startTitle?: string;
  endTitle?: string;
  startStyle?: TextStyle;
  endStyle?: TextStyle;
  style?: ViewStyle;
  selfStyle?: ViewStyle;
  isReset?: Boolean;
}

type ContextType = {[K: string]: unknown};

export interface IContext extends ContextType {
  activity: boolean;
}
