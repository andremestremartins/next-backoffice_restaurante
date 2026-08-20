'use client'

import styles from '@/styles/modules/prato.module.scss'
import { IPrato } from "@/types/interfaces"
import { PencilIcon, Trash } from 'lucide-react'

export default function Prato({ nome, preco, id }: IPrato) {

    function handleEdit() {
        console.log(id)
    }
    function handleDel() {
        console.log(id)
    }


    return (
        <div className={styles.prato}>
            <div className={styles.cont}>
                <h1>{nome}</h1>
                <span>{preco}€</span>
            </div>
            <div className={styles.actions}>
                <PencilIcon size={22} onClick={handleEdit} />
                <Trash size={22} onClick={handleDel} />
            </div>
        </div>
    )
}