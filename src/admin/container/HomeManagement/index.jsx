import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import styles from './style.module.scss';

const { Header, Sider, Content } = Layout;

const useCollapsed = () => {
    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return {
        collapsed,
        toggleCollapsed
    }
}

const Home = () => {
    const { collapsed, toggleCollapsed } = useCollapsed()

    return (
        <Layout>
        <Sider className={styles.sidebar} trigger={null} collapsible collapsed={collapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['admin-home']}>
            <Menu.Item key="admin-home">
                <span className='iconfont'>&#xe6b8;</span>
                <span>首页内容管理</span>
            </Menu.Item>
            <Menu.Item key="admin-back">
                <span className='iconfont'>&#xe609;</span>
                <span>返回用户页面</span>
            </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Header className={styles.header}>
                <span
                    className='iconfont'
                    onClick={toggleCollapsed}
                    dangerouslySetInnerHTML={{ __html: collapsed ? '&#xe62c;': '&#xe629;'  }}
                />
            </Header>
            <Content className={styles.content}>
                Content
            </Content>
        </Layout>
        </Layout>
    );
}

export default Home;