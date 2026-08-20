'use client'

import styles from '@/styles/modules/prato.module.scss'
import { IPrato } from "@/types/interfaces"

export default function Prato({ nome, preco }: IPrato) {
  return (
    <div className={styles.prato}>
      <h1>{nome}</h1>
      <span>{preco}</span>
    </div>
  )
}