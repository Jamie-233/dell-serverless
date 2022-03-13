import { useState, forwardRef, useImperativeHandle } from 'react';
import { Input } from 'antd';
import styles from './style.module.scss';

const { TextArea } = Input;

const PageSetting = (props, ref) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState(
        window.localStorage.description || ''
    );

    const handleTitleChange = e => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = e => {
        setDescription(e.target.value);
    };

    useImperativeHandle(ref, () => ({
        title,
        description
    }));

    return (
        <div>
            <div className={styles.row}>
                <span className={styles.label}>页面标题</span>
                <Input
                    value={title}
                    className={styles.content}
                    placeholder="请输入"
                    onChange={handleTitleChange}
                />
            </div>
            <div className={styles.row}>
                <span className={styles.label}>页面描述</span>
                <TextArea
                    value={description}
                    className={styles.content}
                    onChange={handleDescriptionChange}
                    placeholder="请输入"
                    rows={2}
                />
            </div>
        </div>
    );
};

export default forwardRef(PageSetting);
