import React from 'react';
import { FlatList, Button, View, Text } from 'react-native';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import { useNavigation } from '@react-navigation/native';

const fetchTasks = async () => {

};

const Home = () => {
  const navigation = useNavigation();
  const queryClient = new QueryClient();

  const { data: tasks, refetch } = useQuery('tasks', fetchTasks);

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
      <View>
        <Text>{item.title}</Text>
        <Text>{item.dueDate}</Text>
      </View>
      <Button title="Delete" onPress={() => deleteTask(item.id)} />
    </View>
  );

  const deleteTask = async (taskId) => {
   
    refetch(); 
    showMessage({ message: 'Task deleted successfully!', type: 'success' });
  };

  const navigateToAddTask = () => {
    navigation.navigate('AddTask');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Add Task" onPress={navigateToAddTask} />
     
     </QueryClientProvider>
  );
};

export default Home;
