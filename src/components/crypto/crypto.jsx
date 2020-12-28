export const CryptoPage = () => (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">Cryptocurrency</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="/crypto">Crypto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="/register">Register</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <header class="bg-primary text-white">
  <div class="container text-center">
    <h1>Welcome to a Cryptocurrency Page</h1>
    <p class="lead">A page where you can explore the different Cryptocurrencys out there in the market</p>
  </div>
    </header>

    <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2>About this page</h2>
          <p class="lead">This is a great place where you can explore
              crypto assets and learn about the various technologies they use.
          </p>
          <ul>
            <li><a href="https://www.livecoinwatch.com">LiveCoinWatch</a></li>
            <li><a href="https://www.bitcoin.com">Bitcoin</a></li>
            <li><a href="https://www.investopedia.com/terms/c/cryptocurrency.asp">What Are Cryptocurrencys</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="bg-light">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h2>Services we offer</h2>
        <p class="lead">We offer information and guidance to those who have just come across
            these new assets. It is important to be very careful in markets that are
            not fully regulated.
        </p>
      </div>
    </div>
  </div>
</section>

<section id="contact">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h2>Contact us</h2>
        <p class="lead">You can email us at admin@gmail.com or give us
            a call on 02085923043.
        </p>
      </div>
    </div>
  </div>
</section>
      
    </div>
  );
  