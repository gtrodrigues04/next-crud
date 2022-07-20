import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente
  cancelado?: () => void
  clienteMudou?: (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id
  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
  return (
    <div>
      {id ? (
          <Entrada somenteLeitura texto="Código" valor={id} className="mb-2"/>
        ) : false}
      <Entrada texto="Nome" valorMudou={setNome} valor={nome} className="mb-2" />
      <Entrada tipo="number" texto="Idade"valorMudou={setIdade} valor={idade}/>
      <div className="flex justify-end mt-3">
        <Botao  onClick={() => props.clienteMudou?.(new Cliente(nome, idade, id))} cor="blue" className="mr-2">
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao onClick={props.cancelado}>
          Cancelar
        </Botao>
      </div>
    </div>
  )
}