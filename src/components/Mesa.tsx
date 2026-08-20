'use client'

import { useState } from "react"
import styles from '@/styles/modules/mesa.module.scss'
import { IMesa } from "@/types/interfaces"

export default function Mesa({ numero, estado }: IMesa) {
  const [ocupada, setOcupada] = useState(estado)

  return (
    <div 
      className={`${styles.mesa} ${ocupada ? styles.ocupada : styles.livre}`}
      onClick={() => setOcupada(!ocupada)}
    >
      <span className={styles.numero}>{numero}</span>
      <span className={styles.estado}>
        {ocupada ? 'Ocupada' : 'Livre'}
      </span>
    </div>
  )
}