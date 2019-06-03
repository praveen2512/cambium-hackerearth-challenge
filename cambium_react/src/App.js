import React from 'react';
import {Row,Col,Card} from 'antd'
import LoginForm from './components/auth/Login'
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Row grid={{gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,}}>
          <Col span={12} offset={6}>
            <Card>
              <LoginForm/>
            </Card>
          </Col>
        </Row>
    </div>
    );
  }
}

export default App;
