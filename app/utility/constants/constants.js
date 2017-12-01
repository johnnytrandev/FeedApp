
import {Platform, Dimensions, NativeModules} from 'react-native';

const { StatusBarManager } = NativeModules;
const {height, width} = Dimensions.get('window');

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';
export const screenWidth = width;
export const screenHeight = height;
export const isSmallScreen = isIOS ? (screenWidth <= 320) : (screenWidth <= 360);
export const isShortScreen = screenHeight <= 600;
export const statusBarHeight = isIOS ? 20 : StatusBarManager.HEIGHT;
export const NeverForget = 'Never forget to stay in touch with the people that matter to you.';
export const OtherString = 'Welcome to the app';

export const APP_MAIN_COLOR = '#F035E0';//APP COLOR
export const APP_HEADER_HEIGHT = 50;//APP 头部高度

