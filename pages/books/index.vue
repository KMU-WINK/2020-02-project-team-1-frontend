<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div class="page-book-index">
    <b-input-group>
      <b-form-input type="text" placeholder="도서를 검색해 주세요" />
      <b-input-group-append>
        <img src="~/assets/images/search.svg" class="icon">
      </b-input-group-append>
    </b-input-group>
    <section class="booklist">
      <h3>
        <b>전체 책 리스트</b>
      </h3>
      <hr>
      <div v-for="item in items" :key="item.id" class="book-item">
        <div class="book-image">
          <img :src="item.image">
        </div>
        <div class="book-info">
          <p class="title">
            <b>{{ item.name }}</b>
          </p>
          <div class="rating">
            <b-form-rating id="rating-inline" no-border inline value="4" readonly color="#f2d247" />
            ({{ item.ratingCount }})
          </div>
          <p class="subtitle">
            {{ item.cat }}
          </p>
          <div class="foot">
            <p class="author">
              {{ item.author }}
            </p>
            <b-button pill :to="`/books/${item.id}`">
              대여
            </b-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          id: 1,
          image: 'https://image.aladin.co.kr/product/17812/31/cover500/8964213610_1.jpg',
          name: '컴퓨터 구조 및 설계',
          ratingCount: 5,
          cat: '하드웨어/소프트웨어 인터페이스',
          author: '저자 : 데이비드 A 패터슨'
        },
        {
          id: 2,
          image: 'https://image.aladin.co.kr/product/1478/34/cover500/8996094064_1.jpg',
          name: '자료구조',
          ratingCount: 30,
          cat: '자료구조의 기초',
          author: '저자 : 김성한'
        },
        {
          id: 3,
          image: 'https://image.aladin.co.kr/product/10060/76/cover150/k042536874_1.jpg',
          name: '이산수학',
          ratingCount: 40,
          cat: '전공기초',
          author: '저자 : 박민재'
        },
        {
          id: 4,
          image: 'https://image.aladin.co.kr/product/25268/11/cover500/k792633202_1.jpg',
          name: '데이터베이스 기초와 실습',
          ratingCount: 20,
          cat: '데이터베이스 정리',
          author: '저자 : 황순민'
        },
        {
          id: 5,
          image: 'https://image.aladin.co.kr/product/25075/14/cover500/k952632854_1.jpg',
          name: '빅데이터 시대의 데이터 과학',
          ratingCount: 5,
          cat: '컴퓨터공학/전산학 개론',
          author: '저자 : 바르트 바선스'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-book-index {
  padding: 1.5rem;
}

.input-group {
  margin-bottom: 2rem;

  .form-control {
    border: none;
    border-radius: 0.5rem 0 0 0.5rem;
    background: #f3f3f3;
  }

  .input-group-append {
    padding: 0 1rem;
    border-radius: 0 0.5rem 0.5rem 0;
    background: #f3f3f3;

    .icon {
      width: 1.5rem;
    }
  }
}

.booklist {
  margin-bottom: 4rem;

  .book-item {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;

    .book-image {
      width: 100px;
      height: 120px;
      margin-right: 0.5rem;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .book-info {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .title {
        margin-bottom: 0.25rem;
      }

      .rating {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 0.25rem;
        font-size: 0.85rem;

        .form-control {
          width: 7rem;
          height: 1.125rem;
          padding: 0;
          margin-left: -0.25rem;
          margin-right: 0.5rem;
          font-size: 1rem;

          &.form-control:focus {
            outline: none;
            box-shadow: none;
          }
        }
      }

      .subtitle {
        margin-bottom: 0.25rem;
        font-size: 0.85rem;
      }

      .foot {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .author {
          margin-bottom: 0.5rem;
          font-size: 0.75rem;
        }

        .btn {
          background-color: #524a49;
          font-weight: bold;
          color: white;
        }
      }
    }
  }
}
</style>
