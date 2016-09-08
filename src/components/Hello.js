import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Footer from './Footer'

const Hello = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div>
          <p>This is the content.</p>
        </div>
        <Footer />  
      </div>
    );
  }
});

export default Hello