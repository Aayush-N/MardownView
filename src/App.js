import './App.css';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import Marked from 'marked'
import React from 'react';


class App extends React.Component{
    constructor() {
      super();
      this.state = {markdown: ''}
    }

    render(){
      return (
        <div>
          <div className="left">
            <CodeMirror
              value='<h1>I ♥ react-codemirror2</h1>'
              options={{
                mode: 'markdown',
                theme: 'material',
                lineNumbers: true,
              }}
              onChange={(editor, data, value) => {
                const md = Marked(value);
                console.log(md)
                this.setState({markdown: md})
              }}
            />
          </div>
          <div className="right" dangerouslySetInnerHTML={{__html: this.state.markdown}} >
          </div>
        </div>
    );
    }
    
}

export default App;