import { StyleSheet } from 'react-native';
const bitcoinColor = '#F7931A';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  headerSection: {
    marginTop: 15,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  balanceSection: {
    padding: 10,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  responseSection: {
    width: '90%',
    marginTop: 10,
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: '#FDEBD0',
  },
  methodSection: {
    alignItems: 'center',
    width: '90%',
    marginTop: 10,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  sendSection: {
    alignItems: 'center',
    width: '90%',
    marginTop: 10,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginHorizontal: 30,
  },
  balanceText: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  btnText: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  responseText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    borderColor: bitcoinColor,
    borderWidth: 2,
    width: '80%',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  methodButton: {
    color: bitcoinColor,
  },
  btn: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: bitcoinColor,
    marginVertical: 5,
    width: '80%',
  },
});
