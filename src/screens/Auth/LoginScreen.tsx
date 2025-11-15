import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [phone, setPhone] = useState('');

  const handleNext = () => {
    if (phone.length === 10) {
      navigation.navigate('OTP', { phone });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Xpense</Text>
      <Text style={styles.subtitle}>Login with your mobile number</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter 10-digit mobile number"
        keyboardType="phone-pad"
        maxLength={10}
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity
        style={[styles.button, phone.length !== 10 && styles.disabled]}
        onPress={handleNext}
        disabled={phone.length !== 10}
      >
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { textAlign: 'center', marginBottom: 40, fontSize: 16 },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, marginBottom: 20,
  },
  button: {
    backgroundColor: 'black', padding: 16, borderRadius: 8, alignItems: 'center',
  },
  disabled: { opacity: 0.5 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
});
