const app = "I don't do much.";

const Button = React.createClass({
  render(){
    return React.createElement('button', {}, 'Click Me');
  }

});

const nestedButtons = React.createElement('div', {}, [
  React.createElement(Button),
  React.createElement(Button),
  ]);