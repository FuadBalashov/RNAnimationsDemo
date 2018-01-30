import React from 'react';
import {
  View,
  Animated,
  PanResponder
} from 'react-native';

class Deck extends React.Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({x: gesture.dx, y: gesture.dy});
      },
      onPanResponderRelease: () => {}
    });

    this.state = { panResponder, position };
  }

  renderCards() {
    return this.props.data.map((element, index) => {
      if (index === 0) {
        return (
          <Animated.View
            style={this.state.position.getLayout()}
            { ...this.state.panResponder.panHandlers }
          >
            {this.props.renderCard(element)}
          </Animated.View>
        );
      }
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