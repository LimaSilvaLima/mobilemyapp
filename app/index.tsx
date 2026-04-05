import { KeyboardAvoidingView, Platform, StyleSheet, Text, View , ScrollView} from "react-native";

export default function Index() {
  return (
    <KeyboardAvoidingView style={styles.Container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.contentCenter}>
      <View> 
        <Text style={styles.title}>Welcome to the Index Page</Text>
        <Text>This is the main entry point of the application.</Text>
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

// Define estilos fora do componente para melhor performance
const styles = StyleSheet.create({
  Container: { // Estilo para o layout geral da tela (KeyboardAvoidingView)
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentCenter: { // Estilo para o conteúdo *dentro* do ScrollView
    flexGrow: 1, // Permite que o conteúdo se expanda e habilite a centralização
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
