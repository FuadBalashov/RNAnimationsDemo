import React from 'react';
import {
  View,
  Animated,
  PanResponder
} from 'react-native';

class Deck extends React.Component {
  constructor(props) {
    super(props);

    const panResponder = PanResponder.create({

    });

    this.state = { panResponder };
  }

  renderCards() {
    return this.props.data.map(element => {
        return this.props.renderCard(element);
    });
  }

  render() {
    const { renderCard, data } = this.props;
    return (
      <View>
        { this.renderCards() }
      </View>
    );
  }
}

const styles = {
};

export default Deck;