function tick() {
  const Time = (props) => React.createElement(                                                  
    'h2',                         
    null,                                                            
    'It is ' + props.time + '.'
  );

  const element = React.createElement(
    'div',
    null,
    'Hello, world!',
    React.createElement(Time, {time: new Date().toLocaleTimeString()})
  );

  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
