<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div class="page-books">
    <section class="book-info-section">
      <div class="book-image"></div>
      <div class="book-info">
        <p class="subtitle">
          현장에서 일하는 개발자 맞춤 입문서
        </p>
        <p class="title">
          컴퓨터 구조 및 설계
        </p>
        <p class="author">
          데이비드 패터슨 / 한티미디어
        </p>
        <b-form-rating id="rating-inline" no-border inline value="4" readonly color="#f2d247" />
        <b-button class="rent" pill>
          도서 대여
        </b-button>
      </div>
    </section>
    <section class="book-story">
      <h4 class="mb-3 section-title">
        <b>책 정보</b>
      </h4>
      <p>
        현대의 컴퓨터 기술은 컴퓨팅 전 분야의 전문가로 하여금 하드웨어와 소프트웨어 둘 다 이해할 것을 요구한다. 여러 수준에서의 하드웨어와 소프트웨어 사이의 상호작용은 컴퓨팅의 기본 원리를 이해하는 근간을 제공한다. 하드웨어와 소프트웨어 사이의 관련성을 보여 주고 현대 컴퓨터의 기본이 되는 개념들에 대해 관심을 집중시키는 책이다.
      </p>
    </section>
    <section class="book-review">
      <h4 class="mb-3 section-title">
        <b>리뷰</b>
      </h4>
      <div class="review-item">
        <p>
          <b>이 책 진짜 좋았어요 :) 완전 재밌고 흥미진진</b>
        </p>
        <div class="review-info">
          <b-form-rating id="rating-inline" no-border inline value="4" readonly color="#f2d247" />
          <b class="ml-auto">박건후님의 리뷰</b>
        </div>
      </div>
    </section>
    <section class="book-condition">
      <h4 class="mb-3 section-title">
        <b>최근 책 상태</b>
      </h4>
      <div class="condition-img">
        <img src="https://t1.daumcdn.net/cfile/tistory/99086D485A44046529">
        <img src="https://t1.daumcdn.net/cfile/tistory/992E7B3A5A44045930">
      </div>
      <p>
        ⊙ 이 책을 마지막으로 읽은 사람은 박건후님이에요.<br>
        ⊙ 이 책의 기부자는 박채연님이에요.<br>
        ⊙ 이 책의 관련 전공은 과학과 소프트웨어적 사고 에요.<br>
      </p>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.page-books {
  padding: 1.5rem;
}

.form-control {
  width: 8rem;
  height: 1.5rem;
  padding: 0;
  margin-left: -0.3rem;
  font-size: 1.125rem;

  &.form-control:focus {
    outline: none;
    box-shadow: none;
  }
}

.book-info-section {
  display: flex;
  flex-direction: row;

  .book-image {
    width: 110px;
    height: 160px;
    margin-right: 1rem;
    background-image: url("https://image.aladin.co.kr/product/17812/31/cover500/8964213610_1.jpg");
    background-size: cover;
    background-position: center;
  }

  .book-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .subtitle {
    margin-bottom: 0.5rem;
    color: #b3a56b;
    font-size: 0.75rem;
    font-weight: bold;
  }

  .title {
    margin-bottom: 0.65rem;
    font-size: 1.25rem;
    font-weight: bold;
  }

  .author {
    margin-bottom: 0.25rem;
    font-size: 0.85rem;
    color: #707070;
  }

  .btn {
    margin-top: 1rem;
    background: #524a49;
    font-weight: bold;
  }
}

.book-story {
  margin-top: 2rem;
  margin-bottom: 2rem;

  p {
    font-size: 0.85rem;
  }
}

.book-review {
  margin-bottom: 2rem;

  .review-item {
    width: 100%;
    padding: 1rem;
    background: #ebebeb;

    .review-info {
      display: flex;
    }

    .form-control {
      width: 8rem;
      background: transparent;
    }
  }
}

.book-condition {
  margin-bottom: 4rem;

  .condition-img {
    margin-bottom: 1rem;

    img {
      width: 100px;
      height: 100px;
    }
  }

  p {
    font-size: 0.85rem;
    font-weight: bold;
  }
}
</style>
