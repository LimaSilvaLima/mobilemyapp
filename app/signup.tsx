import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, ScrollView, Image, Dimensions } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";  
import { Link } from 'expo-router';

const { height: screenHeight } = Dimensions.get('window');

export default function signUp() {
  return (
    <KeyboardAvoidingView style={styles.screenContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.scrollView} 
        contentContainerStyle={styles.contentCenter}
        showsVerticalScrollIndicator={false}  
      >
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/telas/imagem2.png')}
          style={styles.illustration}
        />
        
        <Text style={styles.title}>Cadastre-se</Text>
        <Text style={styles.subtitle}>Crie sua conta para começar.</Text>
        <View style={styles.form}>
          <Input placeholder="Nome:"/>
          <Input placeholder="Digite seu e-mail"/>
          <Input placeholder="Digite sua senha" secureTextEntry={true} />
          <Input placeholder="Confirmar senha" secureTextEntry={true} />
          <Button label="Criar Conta" />
        </View>
        <Text style={styles.footerText}>
          Já possui uma conta?
          <Link href="/" style={styles.footerLink}>
            Voltar para o login
          </Link>
        </Text>
      </View>
    </ScrollView> 
    </KeyboardAvoidingView>
  );
}

// Define estilos fora do componente para melhor performance
const styles = StyleSheet.create({
  screenContainer: { // Estilo para o layout geral da tela (KeyboardAvoidingView)
    flex: 1,
    backgroundColor: "#FDFDFD",
    padding: 32,
  },
  scrollView: { // Estilo para o ScrollView em si
    flex: 1, // Permite que o ScrollView ocupe todo o espaço disponível
  },

  contentCenter: { // Estilo para o conteúdo *dentro* do ScrollView
    flexGrow: 1, // Permite que o conteúdo se expanda e habilite a centralização
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  illustration: {
    width: '100%',
    height: screenHeight * 0.4, // Define a altura como metade da tela
    resizeMode: "contain",
    marginTop: 2,
    marginBottom: 20,
  },
  form: {
    marginTop: 24,
    gap: 12,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 24,
    color: '#585860',
  },
  footerLink: {
    color: '#032ad7',
    fontWeight: '700',
  }
});
