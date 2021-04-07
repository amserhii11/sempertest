import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    backgroundColor: COLORS.WHITE,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
    color: COLORS.BLACK,
    marginTop: 18
  },
  burgerMenu: {
  },
  backButton: {
  },
  headerButtons: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
  }
})

export default styles;
