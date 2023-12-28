import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { login } from "./LoginSlice";
import { TextInput, TouchableOpacity ,View,Text,StyleSheet} from 'react-native';

const LoginDisplay=()=>{
const dispatch=useDispatch();

const handlelogin=()=> {
const user = authenticateUser(); 
  dispatch(login(user));

}
const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const user = useSelector((state) => state.login.user);

return(
    <View style={styles.container}>
      <Text style={{fontsize:24,color:'red'}}>LOGIN</Text>
      <TextInput
      style={styles.input}
      placeholder='username'
    />
    <TouchableOpacity style={styles.button} onPress={handlelogin}>
      <Text style={StyleSheet.butto}>LOGIN</Text>

    </TouchableOpacity>
    

        
    </View>
)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
})
  
export default LoginDisplay;