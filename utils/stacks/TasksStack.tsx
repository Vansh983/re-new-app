import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Tasks from "../../screens/Tasks";

export type TasksStackParams = {
  Home: undefined;
  Task: {
    // change to id
    id: string;
  };
};

const TasksStack = createNativeStackNavigator<TasksStackParams>();

const TasksScreenStack = () => {
  return (
    <TasksStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <TasksStack.Screen name="Home" component={Home} />
      <TasksStack.Screen
        name="Task"
        component={Tasks}
        //@ts-ignore
        options={({ route }) => ({ id: route.params.id })}

        // change to id
        // options={({ route }) => ({ title: route.params.name })}
      />
    </TasksStack.Navigator>
  );
};

export default TasksScreenStack;
