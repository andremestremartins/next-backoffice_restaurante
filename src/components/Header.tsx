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
import styles from '@/styles/modules/header.module.scss'
import { useRouter } from 'next/navigation'

export function Header() {

  const router = useRouter()
  return (
    <header className={styles.header}>
      
      {/* LEFT */}
      <div className={styles.left}>
        <LayoutDashboard 
          size={22}  
          className={styles.icon}   
          onClick={() => router.push("/")}
        />

        <Utensils 
          size={22} 
          className={styles.icon}
          onClick={() => router.push("/menu")}
        />

        <ClipboardList 
          size={22} 
          className={styles.icon}
          onClick={() => router.push("/pedidos")}
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
