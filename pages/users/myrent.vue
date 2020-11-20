<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div class="page-book-index">
    <section class="booklist">
      <h3>
        <b>나의 대여 리스트</b>
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
          <p class="author">
            {{ item.author }}
          </p>
          <p class="date">
            2020.11.15 ~ 2020.11.28  (13일 남음)
          </p>
          <b-button pill :to="`/books/${item.id}/return`">
            반납 / 연장
          </b-button>
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
          date: '2020.11.15 ~ 2020.11.28  (13일 남음)',
          cat: '하드웨어/소프트웨어 인터페이스',
          author: '저자 : 데이비드 A 패터슨'
        },
        {
          id: 2,
          image: 'https://image.aladin.co.kr/product/1478/34/cover500/8996094064_1.jpg',
          name: '자료구조',
          ratingCount: 30,
          date: '2020.11.15 ~ 2020.11.28  (13일 남음)',
          cat: '자료구조의 기초',
          author: '저자 : 김성한'
        },
        {
          id: 5,
          image: 'https://image.aladin.co.kr/product/25075/14/cover500/k952632854_1.jpg',
          name: '빅데이터 시대의 데이터 과학',
          ratingCount: 5,
          date: '2020.11.15 ~ 2020.11.28  (13일 남음)',
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

.booklist {
  margin-bottom: 4rem;

  .book-item {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;

    .book-image {
      width: 100px;
      height: 140px;
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

      .subtitle {
        margin-bottom: 0.25rem;
        font-size: 0.75rem;
      }

      .author {
        margin-bottom: 0.25rem;
        font-size: 0.75rem;
      }

      .date {
        margin-bottom: 0.75rem;
        font-weight: bold;
        font-size: 0.85rem;
      }

      .btn {
        padding: 0.25rem 1rem;
        margin-left: auto;
        background-color: #524a49;
        font-size: 0.85rem;
        font-weight: bold;
        color: white;
      }
    }
  }
}
</style>
