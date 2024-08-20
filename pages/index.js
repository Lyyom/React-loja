import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
      <>
        <Head>
          <title>Dona Deía Modas - Loja de Roupas</title>
          <meta name="description" content="Bem-vindo à Dona Deía Modas - Moda feminina com estilo e elegância." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <header className={styles.header}>
          {/* Se desejar exibir o ícone, você pode colocar a tag Image diretamente no header ou em outro lugar apropriado */}
          <nav className={styles.navbar}>
            <ul className={styles.navList}>
              <li className={styles.navItem}><Link href="/">Home</Link></li>
              <li className={styles.navItem}><Link href="/login">Login</Link></li>
              <li className={styles.navItem}><Link href="/registro">Registro</Link></li>
            </ul>
          </nav>
          <div className={styles.icon}>
            <Image src="/img/1.png" alt="ícone" width={300} height={300} />
          <h1>Bem-vindo à Dona Deía Modas</h1>
          <p>Moda feminina com estilo e elegância</p>
          </div>
        </header>
  
        <main className={styles.main}>
          <section className={styles.featured}>
            <h2>Destaques da Coleção</h2>
            <div className={styles.products}>
              {/* Adicione aqui imagens e descrições de produtos em destaque */}
              <div className={styles.product}>
                <Image src="/portfolio/vestidoAmarelo.png" alt="Produto 1" width={190} height={160} />
                <h3>Vestido amarelo</h3>
                <p>R$:75,00</p>
                <Link href="/produto/1">Ver mais</Link>
              </div>
              {/* Repita para outros produtos */}
              <div className={styles.product}>
                <Image src="/portfolio/festa.png" alt="Produto 2" width={190} height={160} />
                <h3>Vestido preto</h3>
                <p>R$:75,00</p>
                <Link href="/produto/1">Ver mais</Link>
              </div>
              <div className={styles.product}>
                <Image src="/portfolio/pijama.png" alt="Produto 3" width={190} height={160} />
                <h3>Pijama branco</h3>
                <p>R$:75,00</p>
                <Link href="/produto/1">Ver mais</Link>
              </div>
              <div className={styles.product}>
                <Image src="/portfolio/primavera.png" alt="Produto 4" width={190} height={160} />
                <h3>Conjunto azul</h3>
                <p>R$:75,00</p>
                <Link href="/produto/1">Ver mais</Link>
              </div>
              <div className={styles.product}>
                <Image src="/portfolio/roupaOutono.png" alt="Produto 5" width={190} height={160} />
                <h3>Casaco Azul</h3>
                <p>R$:75,00</p>
                <Link href="/produto/1">Ver mais</Link>
              </div>
              <div className={styles.product}>
                <Image src="/portfolio/sueterInverno.png" alt="Produto 6" width={190} height={160} />
                <h3>Suéter Verde</h3>
                <p>R$:75,00</p>
                <Link href="/produto/1">Ver mais</Link>
              </div>
            </div>
          </section>
  
          <section className={styles.about}>
            <h2>Sobre Nós</h2>
            <p>A Dona Deía Modas oferece roupas femininas para todas as ocasiões, com qualidade e bom gosto.</p>
          </section>
        </main>
  
        <footer className={styles.footer}>
          <p>© 2024 Dona Deía Modas - Todos os direitos reservados</p>
        </footer>
      </>
    );
}
