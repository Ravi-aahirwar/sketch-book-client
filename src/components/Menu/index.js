import styles from "./index.module.css"
import { useDispatch } from "react-redux"
import { MENU_ITEMS } from "@/constants"
import { useSelector } from "react-redux";
import cx from 'classnames';
import { menuItemClick, actionItemClick } from "@/slice/menuSlice"

const Menu = () => {

    const dispatch = useDispatch()
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)

    const handleMenuClick = (itemName) => {
        dispatch(menuItemClick(itemName))
    }

    const handleActionItemClick = (itemName) => {
        dispatch(actionItemClick(itemName))
    }

    return (
        <div className={styles.menuContainer}>
            <div className={cx(styles.iconWrapper, { [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL })} onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}>
                <h5 className={styles.icon} >Pencil</h5>
            </div>
            <div className={cx(styles.iconWrapper, { [styles.active]: activeMenuItem === MENU_ITEMS.ERASER })} onClick={() => handleMenuClick(MENU_ITEMS.ERASER)} >
                <h5 className={styles.icon}>Eraser</h5>
            </div>
            <div className={styles.iconWrapper} onClick={() => handleActionItemClick(MENU_ITEMS.UNDO)} >
                <h5 className={styles.icon}>RotateLeft</h5>
            </div>
            <div className={styles.iconWrapper} onClick={() => handleActionItemClick(MENU_ITEMS.REDO)} >
                <h5 className={styles.icon}>RotateRight</h5>
            </div>
            <div className={styles.iconWrapper} onClick={() => handleActionItemClick(MENU_ITEMS.DOWNLOAD)} >
                <h5 className={styles.icon}>DownloadFile</h5>
            </div>
        </div>
    )
}
export default Menu;