
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Button({title_button, action_button}) {
  return (

      <TouchableOpacity    
      style={styles.btn}
      onPress={action_button}
      >
      <Text 
      style={styles.text}
      >{title_button}</Text>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: '20%',
    height: 40,
    backgroundColor: '#6f76f2',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  }
});