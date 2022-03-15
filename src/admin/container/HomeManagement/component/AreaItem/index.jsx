import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SortableElement } from 'react-sortable-hoc';
import { Button, Modal, Select } from 'antd';
import { cloneDeep } from 'lodash';
import Banner from './component/Banner';
import List from './component/List';
import Footer from './component/Footer';
import {
    getChangePageChildAction,
    getDeletePageChildAction
} from '../../store/action';
import styles from './style.module.scss';

const { Option } = Select;
const map = { Banner, List, Footer };

const useStore = index => {
    const dispatch = useDispatch();
    const pageChild = useSelector(
        state => state.homeManageMent.schema.children?.[index] || {}
    );

    const changePageChild = tempPageChild => {
        dispatch(getChangePageChildAction(index, tempPageChild));
    };

    const removePageChild = () => {
        dispatch(getDeletePageChildAction(index));
    };

    return {
        pageChild,
        removePageChild,
        changePageChild
    };
};

const AreaItem = props => {
    const { value: index } = props;

    const { pageChild, removePageChild, changePageChild } = useStore(index);

    const [visible, setVisible] = useState(false);
    const [tempPageChild, setTempPageChild] = useState(pageChild);

    const showModal = () => {
        setVisible(true);
    };

    const handleModalOk = () => {
        setVisible(false);
        changePageChild(tempPageChild);
    };

    const handleCancel = () => {
        setTempPageChild(pageChild);
        setVisible(false);
    };

    const handleSelectValue = value => {
        setTempPageChild({ name: value, attributes: {}, children: [] });
    };

    const changeTempPageChildAttribute = (key, value) => {
        const newTempPageChild = cloneDeep(tempPageChild);
        newTempPageChild.attributes[key] = value;
        setTempPageChild(newTempPageChild);
    };

    const getComponent = () => {
        const { name } = tempPageChild;
        const Component = map[name];

        return Component ? (
            <Component
                {...tempPageChild}
                changeAttribute={changeTempPageChildAttribute}
            />
        ) : null;
    };

    return (
        <li className={styles.item}>
            <span className={styles.content} onClick={showModal}>
                {pageChild.name ? pageChild.name + '组件' : '当前区块内容为空'}
            </span>
            <span className={styles.delete}>
                <Button
                    danger
                    size="small"
                    type="dashed"
                    onClick={removePageChild}
                >
                    删除
                </Button>
            </span>

            <Modal
                title="选择组件 "
                visible={visible}
                onOk={handleModalOk}
                onCancel={handleCancel}
            >
                <Select
                    value={tempPageChild.name}
                    onChange={handleSelectValue}
                    style={{ width: '100%' }}
                >
                    <Option value="Banner">Banner 组件</Option>
                    <Option value="List">List 组件</Option>
                    <Option value="Footer">Footer 组件</Option>
                </Select>
                {getComponent()}
            </Modal>
        </li>
    );
};

export default SortableElement(AreaItem);
