import React from 'react';
import Link from 'next/link';


export default function Registro() {
  return (
    <>
      <section className="area-registro"></section>
      <div className="registro">
        <div className="voltar">
          
          <a className="btn-fixed" href="/">
            <span className="material-icons"></span>
            voltar
          </a>
        </div>
        <div>
          <img src="/img/1.png" alt="icone" />
        </div>

        <form method="post">
          <input type="text" name="nome" placeholder="Primeiro Nome" autoFocus />
          <input type="text" name="Sobrenome" placeholder="Sobrenome" />
          <input type="text" name="Email" placeholder="Email" />
          <input type="number" name="Telefone" placeholder="Telefone" />
          <input type="password" name="senha" placeholder="Sua Senha" />
          <input type="password" name="senhaConfirmacao" placeholder="Sua Senha Novamente" />
          <input type="submit" value="Registrar" />
        </form>
      </div>
    </>
  );
}
