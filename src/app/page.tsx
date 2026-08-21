'use client'

import Mesa from "@/components/Mesa";
import { IMesa } from "@/types/interfaces"
import { useState } from "react";

const mesasIniciais: IMesa[] = [
  { numero: 1, estado: true },
  { numero: 2, estado: false },
  { numero: 3, estado: true },
  { numero: 4, estado: false },
  { numero: 5, estado: true },
  { numero: 6, estado: false },
  { numero: 7, estado: true },
  { numero: 8, estado: false },
  { numero: 9, estado: true },
  { numero: 10, estado: false },
  
  
]

export default function Home() {
  const [mesas, setMesas] = useState<IMesa[]>(mesasIniciais)

  return (
    <div className= "mesasgrid">
      {mesas.map((mesa) => (
        <Mesa 
          key={mesa.numero} 
          numero={mesa.numero} 
          estado={mesa.estado} 
        />
      ))}
    </div>
  );
}