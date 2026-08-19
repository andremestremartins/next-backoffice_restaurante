import { 
  LayoutDashboard, 
  Utensils, 
  ClipboardList, 
  Search, 
  Bell, 
  User, 
  Plus 
} from 'lucide-react'
import styles from '@/styles/header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <LayoutDashboard size={22}  className={styles.icon}/>
        <Utensils size={22} className={styles.icon}/>
        <ClipboardList size={22} className={styles.icon}/>
      </div>

      <div className={styles.center}>
        <h1>Backoffice Restaurante</h1>
      </div>

      <div className={styles.right}>
        <Search size={20} className={styles.icon}/>
        <Bell size={20} className={styles.icon}/>
        <User size={20} className={styles.icon}/>
        <button className={styles.btn}>
          <Plus size={18} className={styles.icon}/>
          Novo
        </button>
      </div>
    </header>
  )
}