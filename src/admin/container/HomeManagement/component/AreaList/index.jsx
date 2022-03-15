import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { SortableContainer } from 'react-sortable-hoc';
import { getAddPageChildrenAction, getChangePageChildPositionAction } from '../../store/action'
import AreaItem from '../AreaItem';
import styles from './style.module.scss';

const SortableList = SortableContainer(({ list }) => {
    return (
        <ul className={styles.list}>
            {list.map((_, index) => (
                <AreaItem key={index} index={index} value={index} />
            ))}
        </ul>
      );
});

const AreaList = () => {
    const dispatch = useDispatch();
    const children = useSelector((state) => state.homeManageMent.schema?.children || []);

    const addPageChildren = () => {
        dispatch(getAddPageChildrenAction());
    };

    const onSortEnd = ({oldIndex, newIndex}) => {
        dispatch(getChangePageChildPositionAction(oldIndex, newIndex));
    }

    return (
        <div>
            <SortableList list={children} onSortEnd={onSortEnd} distance={5} lockAxis="y" />

            <Button type="primary" ghost onClick={addPageChildren}>
                新增页面区块
            </Button>
        </div>
    );
};

export default AreaList;
