<template>
  <div class="default-layout">
    <header class="nav">
      <nuxt-link to="/">
        <img src="~/assets/images/wink.png" class="logo">
      </nuxt-link>
    </header>
    <b-container fluid>
      <Nuxt class="content" />
    </b-container>
    <footer class="footer">
      <div class="icons">
        <nuxt-link to="/">
          <img src="~/assets/images/home.svg" class="icon">
        </nuxt-link>
        <nuxt-link to="/">
          <img src="~/assets/images/search.svg" class="icon">
        </nuxt-link>
        <nuxt-link to="/books">
          <img src="~/assets/images/book.svg" class="icon">
        </nuxt-link>
        <nuxt-link to="/users/myrent">
          <img src="~/assets/images/my.svg" class="icon">
        </nuxt-link>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.default-layout {
  width: 100%;
  height: 100%;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

<style lang="scss" scoped>
.nav {
  position: sticky;
  z-index: 999;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 51px;
  background: white;
  box-shadow: 0 2px 4px rgba(115, 115, 115, 0.25);

  a {
    height: 100%;
  }

  .logo {
    height: 100%;
  }
}

.container-fluid {
  max-width: 460px;
  padding: 0;
}

.footer {
  position: fixed;
  z-index: 999;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 51px;
  background: white;
  box-shadow: 0 -2px 4px rgba(115, 115, 115, 0.25);

  .icons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 100%;

    a {
      display: flex;
      align-items: center;
    }

    .icon {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
