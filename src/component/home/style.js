import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  view0: {
    flex: 1,
    marginVertical: 7,
    marginHorizontal: 25,
    borderRadius: 15,
    borderWidth: 0.8,
    borderColor: '#cccccc',

    shadowColor: '#0000001d',
    shadowOpacity: 0.8,
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  view1: {height: 200, backgroundColor: 'white', borderRadius: 15},
  view2: {justifyContent: 'center', marginLeft: 20},

  text0: {fontSize: 16, lineHeight: 22, color: '#000000'},
  text1: {fontSize: 16, lineHeight: 22, color: 'cyan'},
  view3: {marginLeft: 20},
  text3: {fontSize: 25, lineHeight: 30},
});
