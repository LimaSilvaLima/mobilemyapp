import { KeyboardAvoidingView, Platform, StyleSheet, Text, View , ScrollView, Image, Dimensions} from "react-native";
import { Input } from "../components/Input";

const { height: screenHeight } = Dimensions.get('window');

export default function Index() {
  return (
    <KeyboardAvoidingView style={styles.screenContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentCenter}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/telas/imagem2.png')}
          style={styles.illustration}
        />
        <Input />
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.subtitle}>Acesse sua conta com e-mail e senha.</Text>
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
});
