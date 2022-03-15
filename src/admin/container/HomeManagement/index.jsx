import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Layout, Menu } from 'antd';
import AreaList from './component/AreaList';
// import PageSetting from './component/PageSetting';
import { parseJsonByString } from '../../../common/utils';
import { getChangeSchemaAction } from './store/action';
import styles from './style.module.scss';

const { Header, Sider, Content } = Layout;

const useCollapsed = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return {
        collapsed,
        toggleCollapsed
    };
};

const useStore = () => {
    const dispatch = useDispatch();
    const schema = useSelector((state) => state.homeManageMent.schema);

    const changeSchema = (schema) => {
        dispatch(getChangeSchemaAction(schema));
    }

    return {
        schema,
        changeSchema
    }
};

const HomeManagement = () => {
    const { schema , changeSchema }  = useStore();
    const { collapsed, toggleCollapsed } = useCollapsed();

    const handleSaveBtnClick = () => {
        window.localStorage.schema = JSON.stringify(schema);
    };

    const handleHomePageRedirect = () => { window.location = '/' };

    const handleResetBtnClick = () => {
        const schema = parseJsonByString(window.localStorage.schema, {});
        changeSchema(schema);
    };

    return (
        <Layout>
            <Sider
                className={styles.sidebar}
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['admin-home']}
                >
                    <Menu.Item key="admin-home">
                        <span className="iconfont">&#xe6b8;</span>
                        <span>首页内容管理</span>
                    </Menu.Item>
                    <Menu.Item
                        key="admin-back"
                        onClick={handleHomePageRedirect}
                    >
                        <span className="iconfont">&#xe609;</span>
                        <span>返回用户页面</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className={styles.header}>
                    <span
                        className="iconfont"
                        onClick={toggleCollapsed}
                        dangerouslySetInnerHTML={{
                            __html: collapsed ? '&#xe62c;' : '&#xe629;'
                        }}
                    />
                </Header>
                <Content className={styles.content}>
                    <AreaList children={schema?.children || []} />
                    <div className={styles.buttons}>
                        <Button type="primary" onClick={handleSaveBtnClick}>
                            保存区块配置
                        </Button>
                        <Button
                            type="primary"
                            className={styles.reset}
                            onClick={handleResetBtnClick}
                        >
                            重置区块配置
                        </Button>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default HomeManagement;
