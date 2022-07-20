import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepository";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
  
  const repo: ClienteRepositorio = new ColecaoCliente();

  const {formularioVisivel, tabelaVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio)
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(() => {
    repo.obterTodos().then(setClientes)
  }, [])
  
  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    exibirFormulario()
  }

  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    exibirTabela
    obterTodos()
  }
  function novoCliente() {
    setCliente(Cliente.vazio()),
    exibirFormulario()
  }

  return {
    salvarCliente,
    novoCliente,
    clienteExcluido,
    clienteSelecionado,
    obterTodos,
    cliente,
    clientes,
    tabelaVisivel,
    formularioVisivel,
    exibirTabela,
    exibirFormulario
  }
}