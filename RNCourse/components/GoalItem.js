import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem({ id, text, onDeleteItem }) {
  function deleteHandler() {
    onDeleteItem(id);
  }
  return (
    <View style={styles.goalItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        android_ripple={{ color: '#210644' }}
        onPress={deleteHandler}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
});

export default GoalItem;
