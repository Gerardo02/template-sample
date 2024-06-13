import { Button, Layout, Menu, MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { 
  MailOutlined, 
  AppstoreOutlined, 
  SettingOutlined, 
  MenuUnfoldOutlined, 
  MenuFoldOutlined, 
  BellOutlined,
  BarsOutlined,
  BookOutlined,
  CarryOutOutlined,
  CodeOutlined,
  DeliveredProcedureOutlined
} from '@ant-design/icons';
import './App.css'

const { Header, Footer, Sider, Content } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const layoutStyle2: React.CSSProperties = {
  overflow: 'auto',
};

const items: MenuItem[] = [
  {
    label: 'Navigation One',
    key: '1',
    icon: <MailOutlined />,
    style: {height: '60px'}
  },
  {
    label: 'Navigation Two',
    key: '2',
    icon: <AppstoreOutlined />,
    style: {height: '60px'}
  },
  {
    label: 'Navigation Three',
    key: '3',
    icon: <SettingOutlined />,
    style: {height: '60px'}
  },
  {
    label: 'Navigation Four',
    key: '4',
    icon: <BellOutlined />,
    style: {height: '60px'}
  },
  {
    label: 'Navigation Five',
    key: '5',
    icon: <BarsOutlined />,
    style: {height: '60px'}
  },
  {
    label: 'Navigation Five',
    key: '6',
    icon: <BookOutlined />,
    style: {height: '60px'}
  },
  {
    label: 'Navigation Five',
    key: '7',
    icon: <CarryOutOutlined />,
    style: {height: '60px'}
  },
  {
    label: 'Navigation Five',
    key: '8',
    icon: <CodeOutlined />,
    style: {height: '60px'}
  },
  {
    label: 'Navigation Five',
    key: '9',
    icon: <DeliveredProcedureOutlined />,
    style: {height: '60px'}
  },
];

function App() {

  const [current, setCurrent] = useState('1');
  const [collapsedIcon, setCollapsedIcon] = useState(<MenuFoldOutlined />);
  const [collapsed, setCollapsed] = useState(false);

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  useEffect(() => {
    setCollapsedIcon(<MenuFoldOutlined />);

    if(collapsed) {
      setCollapsedIcon(<MenuUnfoldOutlined />);
    }
  }, [collapsed])

  const collapseSider = () => {
    setCollapsed((e) => !e);
  }

  return (
    <div>
      <Layout className="main-layout">
        <Sider className="sider-layout" collapsed={collapsed} style={{backgroundColor: 'white'}}>
          <Button className="collapse-button" onClick={collapseSider}>{collapsedIcon}</Button>
          <Menu
            className="sider-menu"
            onClick={onClick}
            mode="inline"
            selectedKeys={[current]}
            inlineIndent={10}
            items={items}
          />
        </Sider>
        <Layout className="child-layout" style={layoutStyle2}>
          <Header className="header-layout" >Header</Header>
          <Content className="content-layout">
            lorem*50
            <Footer className="footer-layout" >lorem*2</Footer>
          </Content>
        </Layout>
        

      </Layout>
    </div>
  )
}

export default App;
