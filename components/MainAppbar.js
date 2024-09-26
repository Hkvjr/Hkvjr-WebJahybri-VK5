import React from 'react';
import { Appbar } from 'react-native-paper';

export default function MainAppbar(props) {
  const title = props.route.name;

  return (
    <Appbar.Header style={{ backgroundColor: props.backgroundColor }}>
      {props.back ? (
        <Appbar.BackAction onPress={() => props.navigation.goBack()} />
      ) : null}
      <Appbar.Content title={title} />
      {!props.back && (
        <>
          <Appbar.Action icon={props.icon} onPress={props.getUserPosition} />
          <Appbar.Action icon="cog" onPress={() => props.navigation.navigate('Settings')} />
        </>
      )}
    </Appbar.Header>
  );
}
