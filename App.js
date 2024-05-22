import { useFonts,
         Montserrat_400Regular,
         Montserrat_600SemiBold} from '@expo-google-fonts/montserrat';

import {View} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Produto from './src/telas/Produtos'
import Sobre from './src/telas/Sobre'
import mock from './src/mocks/produto'
import mock_sobre from './src/mocks/sobre'

function MenuKit(){
  return <Produto {...mock}/>
}

function MenuSobre(){
  return <Sobre {...mock_sobre}/>
}

const Tab = createBottomTabNavigator();

function TabsMenu(){
  return <Tab.Navigator 
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if(route.name === "KIT"){
                  iconName = focused
                  ? 'cube'
                  : 'cube-outline';
                } else if (route.name === "SOBRE NÓS"){
                  iconName = focused
                  ? 'people'
                  : 'people-outline';
                } else if (route.name === "PRODUTOS") {
                  iconName = focused
                  ? 'list'
                  : 'list-outline';
                } else if (route.name === "FAVORITOS"){
                  iconName = focused
                  ? 'heart'
                  : 'heart-outline';
                }

                return <Ionicons name={iconName} size={size} color={color}/>
              },
              tabBarActiveTintColor: '#56070c',
              tabBarInactiveTintColor: 'black',
              tabBarHideOnKeyboard: true,
              headerShown: false,
            })}>
              <Tab.Screen name="SOBRE NÓS" component={MenuSobre}/>
              <Tab.Screen name="KIT" component={MenuKit} />
              <Tab.Screen name="PRODUTOS" component={MenuKit}/>
              <Tab.Screen name="FAVORITOS" component={MenuKit}/>
            </Tab.Navigator>
}

export default function App() {

  //Carrega a fonte para dentro do projeto
  const [ fonteCarregada ] = useFonts ({"MontserratRegular" : Montserrat_400Regular, 
                                        "MontserratSemiBold" : Montserrat_600SemiBold});
                                        

  //Se a fonte não tiver sido carregada, não exibe o projeto
  if(!fonteCarregada) {
    return <View />
  }
  
  return <NavigationContainer >
            <TabsMenu />
        </NavigationContainer>
}