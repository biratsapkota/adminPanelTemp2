import React, { Component } from 'react';
import { Layout,Header,Drawer,Content,Textfield,Navigation } from 'react-mdl';
import 'react-mdl/extra/material.css'; 
import 'react-mdl/extra/material.js';
import Main from './components/main';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    const style={
      backgroundColor:'#96f7ef'
    }
    return (
      <div style={{height: '100%',width:'100%'}}>
        <Layout fixedHeader fixedDrawer>
            <Header title="Admin Panel">
                <Textfield
                    value=""
                    onChange={() => {}}
                    label="Search"
                    expandable
                    expandableIcon="search"
                />
            </Header>
            <Drawer title={<img src="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1547354763/CHMimage/saas.svg" alt="logo" style={{height:'100px',width:'100px'}}/>}>
                <Navigation>
                    <Link to="/">Dashboard</Link>
                    <Link to="/Charts">Charts</Link>
                    <Link to="/Tables">Tables</Link>
                    <Link to="/Forms">Forms</Link>
                    <Link to="/Todo">Todo</Link>
                    <Link to="/Mail">Mail</Link>
                    <Link to="/Contacts">Contacts</Link>
                    <Link to="/Documentation">Documentation</Link>
                </Navigation>
            </Drawer>
            <Content style={style}>
              <Main/>
            </Content>
        </Layout>
    </div>
    );
  }
}

export default App;
