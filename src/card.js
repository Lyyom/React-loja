import styles from '/src/card.module.css'

export default function Card() {

    return (
      <>
      <div className={styles['card']}>
        <section className="(area-login"></section>
        <div className="login">
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
            <input type="text" name="nome" placeholder="Nome de Usuario" autoFocus />
            <input type="password" name="senha" placeholder="Sua Senha" />
            <input type="submit" value="Entrar" />
          </form>
          <p> Ainda não tem uma conta? <a href="/registro">Criar conta</a></p>
        </div>
      </div>
      </>
    )
  }
  