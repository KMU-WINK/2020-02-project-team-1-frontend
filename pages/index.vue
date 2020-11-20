<template>
  <div class="page-index">
    <b-input-group>
      <b-form-input type="text" placeholder="도서를 검색해 주세요" />
      <b-input-group-append>
        <img src="~/assets/images/search.svg" class="icon">
      </b-input-group-append>
    </b-input-group>
    <section class="recommend-books">
      <h4>
        추천 도서
      </h4>
      <div class="books">
        <b-row>
          <b-col cols="4">
            <div class="book-item">
              <nuxt-link to="/books/1">
                <img src="https://image.aladin.co.kr/product/17812/31/cover500/8964213610_1.jpg">
              </nuxt-link>
            </div>
          </b-col>
          <b-col cols="4">
            <div class="book-item">
              <img src="https://image.aladin.co.kr/product/1478/34/cover500/8996094064_1.jpg">
            </div>
          </b-col>
          <b-col cols="4">
            <div class="book-item">
              <img src="https://image.aladin.co.kr/product/10060/76/cover500/k042536874_1.jpg">
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="4">
            <div class="book-item">
              <img src="https://image.aladin.co.kr/product/25268/11/cover500/k792633202_1.jpg">
            </div>
          </b-col>
          <b-col cols="4">
            <div class="book-item">
              <img src="https://image.aladin.co.kr/product/25075/14/cover500/k952632854_1.jpg">
            </div>
          </b-col>
        </b-row>
      </div>
    </section>

    <section class="recommend-books">
      <h4>
        대여 가능 도서
      </h4>
      <div class="books">
        <b-row>
          <b-col cols="4">
            <div class="book-item">
              <img src="https://image.aladin.co.kr/product/17812/31/cover500/8964213610_1.jpg">
            </div>
          </b-col>
          <b-col cols="4">
            <div class="book-item">
              <img src="https://image.aladin.co.kr/product/1478/34/cover500/8996094064_1.jpg">
            </div>
          </b-col>
          <b-col cols="4">
            <div class="book-item">
              <img src="https://image.aladin.co.kr/product/10060/76/cover500/k042536874_1.jpg">
            </div>
          </b-col>
        </b-row>
      </div>
    </section>
    <div class="qr">
      <img src="~/assets/images/qr.svg">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.page-index {
  padding: 1.5rem;
}

.input-group {
  .form-control {
    border: none;
    border-bottom: 1px solid #c3c3c3;
  }

  .input-group-append {
    margin-left: 1rem;

    .icon {
      width: 1.5rem;
    }
  }
}

.recommend-books {
  margin: 1.5rem 0;

  h4 {
    font-weight: bold;
  }

  .books {
    margin-top: 1rem;

    .row {
      margin: 0 -5px;

      :first-child {
        margin-bottom: 0.5rem;
      }
    }

    .col-4 {
      padding: 0 0.5rem;
    }

    .book-item {
      width: 100%;
      height: 160px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.qr {
  position: fixed;
  right: 1rem;
  bottom: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: #e7d4d7;
  border-radius: 2rem;

  // stylelint-disable-next-line
  img {
    width: 50%;
  }
}
</style>
