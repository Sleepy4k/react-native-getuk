import { View, SafeAreaView } from 'react-native';

export default function AuthLayout({ style, children }) {
  return(
    <SafeAreaView>
      <View style={style}>
        {children}
      </View>
    </SafeAreaView>
  )
}
