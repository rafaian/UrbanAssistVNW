import { useEffect, useState } from "react"
import axios from "axios"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {

const [abrigos, setAbrigos] = useState([])
const [bairro, setBairro] = useState("")

const [nome, setNome] = useState("")
const [bairroNovo, setBairroNovo] = useState("")
const [vagas, setVagas] = useState("")
const [endereco, setEndereco] = useState("")
const [capacidade, setCapacidade] = useState("")
const [telefone, setTelefone] = useState("")

async function carregarAbrigos() {

const resposta = await axios.get(
"http://localhost:3000/abrigos"
)

setAbrigos(resposta.data)

}

async function atualizarVagas(id, novasVagas){

  await axios.put(
  `http://localhost:3000/abrigos/${id}`,
  {
  vagas: Number(novasVagas)
  }
)

carregarAbrigos()

}


async function buscarPorBairro(){

  const resposta = await axios.get(
  `http://localhost:3000/buscar?bairro=${bairro}`
  )

setAbrigos(resposta.data)

}


async function deletarAbrigo(id){

  await axios.delete(
  `http://localhost:3000/abrigos/${id}`
  )

carregarAbrigos()

}


async function cadastrarAbrigo(){

  await axios.post(
  "http://localhost:3000/abrigos",
  {
    nome,
    endereco,
    bairro: bairroNovo,
    capacidade: Number(capacidade),
    vagas: Number(vagas),
    telefone
  }
  )

carregarAbrigos()

setNome("")
setEndereco("")
setBairroNovo("")
setCapacidade("")
setVagas("")
setTelefone("")

}


useEffect(() => {
carregarAbrigos()
}, [])



return (
<div className="container">
  <h1>UrbanAssist</h1>

  <div className="bloco">
    <h2>Cadastrar Abrigo</h2>
  </div>
  <div className="form-linha">
    <input
      placeholder="Nome"
      value={nome}
      onChange={(e)=>setNome(e.target.value)}
      />

    <input
      placeholder="Bairro"
      value={bairroNovo}
      onChange={(e)=>setBairroNovo(e.target.value)}
      />

    <input
      placeholder="Vagas"
      value={vagas}
      onChange={(e)=>setVagas(e.target.value)}
      />
    <input
      placeholder="Endereço"
      value={endereco}
      onChange={(e)=>setEndereco(e.target.value)}
      />

    <input
      placeholder="Capacidade"
      value={capacidade}
      onChange={(e)=>setCapacidade(e.target.value)}
      />

    <input
      placeholder="Telefone"
      value={telefone}
      onChange={(e)=>setTelefone(e.target.value)}
      />    
    <button onClick={cadastrarAbrigo}>
      Salvar
    </button>
  </div>

<div className="bloco">
  <h2>Buscar por bairro</h2>
</div>

<input
  type="text"
  placeholder="Digite um bairro"
  value={bairro}
  onChange={(e)=>setBairro(e.target.value)}
  />

  <button onClick={buscarPorBairro}>
    Buscar
  </button>

  <button onClick={carregarAbrigos}>
    Mostrar todos
  </button>

<div className="bloco">
  <h2>Lista de Abrigos</h2>
</div>

{abrigos.map((abrigo) => (

  <div className="card" key={abrigo.id}>

    <h3>{abrigo.nome}</h3>

    <p className="bairro"> Bairro: {abrigo.bairro}</p>

    <p> Endereço: {abrigo.endereco}</p>

    <p>Telefone: {abrigo.telefone}</p>

    <p className="vagas">Vagas: {abrigo.vagas}</p>

    <input
      type="number"
      placeholder="Nova vagas"
      onChange={(e) => abrigo.novaVaga = e.target.value}
    />

    <button onClick={() => atualizarVagas(abrigo.id, abrigo.novaVaga)}>
      Atualizar vagas
    </button>

    <button className="remover" onClick={() => deletarAbrigo(abrigo.id)}>
      Remover
    </button>

  </div>

))}




<Footer/>
</div>
)

}

export default App