import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Button, Modal, Select } from 'antd';
import styles from './style.module.scss';

const { Option } = Select;

const PageSetting = (props, ref) => {
    const { index, item, removeItemFromChildren } = props;

    const [temp, setTemp] = useState(item);
    const [schema, setSchema] = useState(item);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setSchema(item);
        setTemp(item);
    }, [item]);

    const showModal = () => {
        setVisible(true);
    };

    const handleModalOk = () => {
        setSchema(temp);
        setVisible(false);
    };

    const handleCancel = () => {
        setTemp(schema);
        setVisible(false);
    };

    const handleSelectValue = value => {
        const schema = { name: value, attributes: {}, children: [] };
        setTemp(schema);
    };

    useImperativeHandle(ref, () => ({
        getSchema: () => schema
    }));

    return (
        <li className={styles.item}>
            <span className={styles.content} onClick={showModal}>
                {schema.name ? schema.name + '组件' : '当前区块内容为空'}
            </span>
            <span className={styles.delete}>
                <Button
                    danger
                    size="small"
                    type="dashed"
                    onClick={() => removeItemFromChildren(index)}
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
                    value={temp.name}
                    onChange={handleSelectValue}
                    style={{ width: '100%' }}
                >
                    <Option value="Banner">Banner 组件</Option>
                    <Option value="List">List 组件</Option>
                    <Option value="Footer">Footer 组件</Option>
                </Select>
            </Modal>
        </li>
    );
};

export default forwardRef(PageSetting);
