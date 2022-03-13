import {
    useMemo,
    useState,
    useEffect,
    createRef,
    forwardRef,
    useImperativeHandle
} from 'react';
import { Button } from 'antd';
import styles from './style.module.scss';
import AreaItem from '../AreaItem';

let refs = [];

const AreaList = (props, ref) => {
    const [children, setChildren] = useState(props.children);

    useEffect(() => {
        setChildren(props.children);
    }, [props.children]);

    useMemo(() => {
        refs = children.map(() => createRef());
    }, [children]);

    const addItemToChildren = () => {
        const newChildren = [...children];
        newChildren.push({});
        setChildren(newChildren);
    };

    const removeItemFromChildren = index => {
        const newChildren = [...children];
        newChildren.splice(index, 1);
        setChildren(newChildren);
    };

    useImperativeHandle(ref, () => ({
        getSchema: () => {
            const schema = [];
            children.forEach((item, index) => {
                schema.push(refs[index].current.getSchema());
            });

            return schema;
        }
    }));

    return (
        <div>
            <ul className={styles.list}>
                {children.map((item, index) => (
                    <AreaItem
                        key={index}
                        item={item}
                        index={index}
                        ref={refs[index]}
                        removeItemFromChildren={removeItemFromChildren}
                    />
                ))}
            </ul>

            <Button type="primary" ghost onClick={addItemToChildren}>
                新增页面区块
            </Button>
        </div>
    );
};

export default forwardRef(AreaList);
