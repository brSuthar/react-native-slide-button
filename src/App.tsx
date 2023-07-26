import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import SlideViewButton from './slider-view-button';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): JSX.Element {
  const slideRef = useRef<any>();

  const onResetBtn = () => {
    slideRef.current.resetSlide();
  };

  return (
    <GestureHandlerRootView style={styles.view}>
      <View style={styles.contaienr}>
        <StatusBar barStyle={'light-content'} />
        <SlideViewButton ref={slideRef} />
        <TouchableOpacity onPress={onResetBtn} style={styles.touchView}>
          <Text style={styles.title}>RESET SLIDER</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  contaienr: {
    height: '100%',
    backgroundColor: '#010B40',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  view: {
    width: '100%',
    height: '100%',
  },
  touchView: {
    backgroundColor: '#FFC107',
    height: 52,
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFF',
  },
});

export default App;
