import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import {
  FontAwesome,
  AntDesign,
  Feather,
} from "@expo/vector-icons";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
  
      {/* <Image
        source={require("../assets/images/tabIcons/my-icon.png")}
        style={styles.logo}
        resizeMode="contain"
      /> */}


      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.subtitle}>
        Let's experience the joy of telecare AI.
      </Text>


      <Text style={styles.label}>Email Address</Text>

      <View style={styles.inputContainer}>
        <Feather
          name="mail"
          size={20}
          color="#999"
          style={styles.inputIcon}
        />

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>

    
      <Text style={styles.label}>Password</Text>

      <View style={styles.inputContainer}>
        <Feather
          name="lock"
          size={20}
          color="#999"
          style={styles.inputIcon}
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password..."
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
        />

        <Feather
          name="eye-off"
          size={20}
          color="#999"
        />
      </View>

     
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Sign In
        </Text>

        <Feather
          name="arrow-right"
          size={18}
          color="white"
          style={{ marginLeft: 8 }}
        />
      </TouchableOpacity>

     
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialBtn}>
          <FontAwesome
            name="facebook"
            size={22}
            color="#444"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <AntDesign
            name="google"
            size={22}
            color="#444"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <Feather
            name="instagram"
            size={22}
            color="#444"
          />
        </TouchableOpacity>
      </View>

   
      <Text style={styles.footer}>
        Don't have an account?{" "}
        <Text style={styles.signup}>
          Sign Up.
        </Text>
      </Text>

      <Text style={styles.forgot}>
        Forgot your password?
      </Text>
    </View>
  );
}

const GREEN = "#8AD40B";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  logo: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 38,
    fontWeight: "800",
    color: "#333",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#888",
    marginTop: 8,
    marginBottom: 35,
    fontSize: 14,
  },

  label: {
    color: "#444",
    fontWeight: "600",
    marginBottom: 8,
    marginLeft: 4,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: "#E4E4E4",
    height: 58,
  },

  inputIcon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: "#333",
  },

  button: {
    backgroundColor: GREEN,
    height: 58,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 30,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    marginBottom: 30,
  },

  socialBtn: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
  },

  footer: {
    textAlign: "center",
    color: "#666",
    marginBottom: 8,
  },

  signup: {
    color: GREEN,
    fontWeight: "700",
  },

  forgot: {
    textAlign: "center",
    color: GREEN,
    fontWeight: "600",
  },
});