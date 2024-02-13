
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button, View, Text } from 'react-native';
import { useMutation ,useQuery} from 'react-query';
import { useNavigation } from '@react-navigation/native';

const AddTask = () => {
  const { control, handleSubmit, setValue } = useForm();
  const navigation = useNavigation();

  const mutation = useMutation((newTask) => {
   
    navigation.goBack();
  });
const taskTypes = ['Type 1', 'Type 2', 'Type 3']
  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <View>
      <Controller
        control={control}
        render={({ field }) => <TextInput {...field} placeholder="Task Title" />}
        name="title"
      />
      <Controller
        control={control}
        render={({ field }) => (
          <Picker
            selectedValue={field.value}
            onValueChange={(value) => setValue('type', value)}
          >
            {taskTypes.map((type, index) => (
              <Picker.Item key={index} label={type} value={type} />
            ))}
          </Picker>
        )}
        name="type"
      />

      
      <Controller
        control={control}
        render={({ field }) => <TextInput {...field} placeholder="Due Date" />}
        name="dueDate"
      />
      <Button title="Add Task" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default AddTask;
