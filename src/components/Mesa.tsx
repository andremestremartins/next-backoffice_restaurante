'use client'

import { useState } from "react"
import styles from '@/styles/mesa.module.scss'

import {MesaProps} from "@/types/interfaces"

export default function Mesa({ numero }: MesaProps) {
  const [ocupada, setOcupada] = useState(false)

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