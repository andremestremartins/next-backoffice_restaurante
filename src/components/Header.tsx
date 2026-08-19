'use client'

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
      
      {/* LEFT */}
      <div className={styles.left}>
        <LayoutDashboard 
          size={22}  
          className={styles.icon}   
          onClick={() => window.location.href = "/"}
        />

        <Utensils 
          size={22} 
          className={styles.icon}
          onClick={() => window.location.href = "/menu"}
        />

        <ClipboardList 
          size={22} 
          className={styles.icon}
          onClick={() => window.location.href = "/pedidos"}
        />
      </div>

      {/* CENTER */}
      <div className={styles.center}>
        <h1>Backoffice Restaurante</h1>
      </div>

      {/* RIGHT */}
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
