import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { CFInfoForm, CFFab } from 'AppComponent';
import * as Animatable from 'react-native-animatable';

export default class CFTabInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRenderPlaceHolder: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isRenderPlaceHolder: false
      })
    }, 100)
  }
  render() {
    const { dataTab, fetched, data, dataFab } = this.props;
    const { isRenderPlaceHolder } = this.state;
    
    return (
      <View tabLabel="Info" key={'info'} style={{ flex: 1 }}>
        { isRenderPlaceHolder 
        ? null
        :  <FlatList
          data={dataTab}
          keyExtractor={({ title }, index) => `${title}-${index}`}
          renderItem={({ item }) => {
            const { title, icon, data } = item;
            return (
              <CFInfoForm
                key={`tab-${title}`}
                title={title}
                iconTitle={icon}
                fetched={fetched}
                data={data}
              />
            );
          }}
        />}
        <CFFab
          data={dataFab}
        />
      </View>
    );
  }
}
