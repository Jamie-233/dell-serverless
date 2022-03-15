import { Input, Switch } from 'antd';
import styles from './style.module.scss';

const { TextArea } = Input;

const Banner = props => {
    const { attributes = {}, changeAttribute } = props;
    const {
        title,
        description,
        showSmallPic,
        smallPicUrl,
        backgroundUrl,
        backgroundHeight
    } = attributes;

    return (
        <div>
            <div className={styles.row}>
                <span className={styles.label}>页面标题</span>
                <Input
                    value={title}
                    className={styles.content}
                    placeholder="请输入"
                    onChange={e => changeAttribute('title', e.target.value)}
                />
            </div>
            <div className={styles.row}>
                <span className={styles.label}>页面描述</span>
                <TextArea
                    value={description}
                    className={styles.content}
                    onChange={e =>
                        changeAttribute('description', e.target.value)
                    }
                    placeholder="请输入"
                    rows={2}
                />
            </div>
            <div className={styles.row}>
                <span className={styles.label}>展示小图</span>
                <Switch
                    checked={showSmallPic}
                    onChange={checked =>
                        changeAttribute('showSmallPic', checked)
                    }
                />
            </div>
            <div className={styles.row}>
                <span className={styles.label}>展示小图</span>
                <Input
                    value={smallPicUrl}
                    placeholder="请输入小图的 URL 地址"
                    onChange={e =>
                        changeAttribute('smallPicUrl', e.target.value)
                    }
                />
            </div>
            <div className={styles.row}>
                <span className={styles.label}>背景链接</span>
                <Input
                    value={backgroundUrl}
                    placeholder="请输入背景的 URL 地址"
                    onChange={e =>
                        changeAttribute('backgroundUrl', e.target.value)
                    }
                />
            </div>
            <div className={styles.row}>
                <span className={styles.label}>背景高度</span>
                <Input
                    value={backgroundHeight}
                    placeholder="请输入背景高度的像素值"
                    onChange={e =>
                        changeAttribute('backgroundHeight', e.target.value)
                    }
                />
            </div>
        </div>
    );
};

export default Banner;
