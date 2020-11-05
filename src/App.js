import './App.css';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import Marked from 'marked'
import React from 'react';
import text from './dummyText.js';


class App extends React.Component{
    constructor() {
      super();
      this.state = {markdown: Marked(text)}
    }

    render(){
      return (
        <div>
          <div className="left">
          <div id="topnav">Enter markdown text below</div>
            <CodeMirror
              value={text}
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
          <div className="right" >
          <div id="topnav">Markdown Preview</div>
          <div dangerouslySetInnerHTML={{__html: this.state.markdown}}></div>
          </div>
        </div>
    );
    }
    
}

export default App;