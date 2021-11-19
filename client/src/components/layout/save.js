<>
{validate ? (
  <div>
    <nav className={styles.navbar}>
      <Container>
        <Link to="/home">
          <img src={logo} alt="costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/home">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/register">Cad User</Link>
          </li>
          <li className={styles.item}>
            <Link>
              <FcBusinessman />
              {user}
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  </div>
) : (
  <div>
    <nav className={styles.navbar}>
      <Container>
        <Link to="/home">
          <img src={logo} alt="costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/home">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link>
              <FcBusinessman />
              {user}
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  </div>
)}
</>