<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div class="page-books">
    <p class="return-date">
      13일 남았네요!
    </p>
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
        <b class="mt-2">대여기간</b>
        <span>2020.11.15 ~ 2020.11.28</span>
      </div>
    </section>
    <section class="book-story">
      <h4 class="mb-3 section-title">
        <b>책은 어땠나요?</b>
      </h4>
      <b-form-rating id="rating-inline" no-border inline color="#f2d247" />
    </section>
    <section class="book-review">
      <h4 class="mb-3 section-title">
        <b>리뷰를 적어주세요</b>
      </h4>
      <b-form-textarea rows="5" />
    </section>
    <section class="book-condition">
      <h4 class="mb-3 section-title">
        <b>책 상태를 올려주세요.</b>
      </h4>
      <div class="condition-img">
        <img src="https://t1.daumcdn.net/cfile/tistory/99086D485A44046529">
        <img src="https://t1.daumcdn.net/cfile/tistory/992E7B3A5A44045930">
        <div class="upload">
          <img src="~/assets/images/plus.svg">
        </div>
      </div>
      <p>
        ⊙ 이 책을 마지막으로 읽은 사람은 박건후님이에요.<br>
        ⊙ 이 책의 기부자는 박채연님이에요.<br>
        ⊙ 이 책의 관련 전공은 과학과 소프트웨어적 사고 에요.<br>
      </p>
    </section>
    <div class="footer-button">
      <div class="left">
        <span>대출 연장</span>
      </div>
      <div class="right">
        <span>도서 반납</span>
      </div>
    </div>
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

.return-date {
  font-size: 1.5rem;
  font-weight: bold;
  color: #9e5d5d;
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
    margin-bottom: 0.35rem;
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

  .form-control {
    padding: 0;
    margin-left: -0.3rem;
    font-size: 2rem;
  }
}

.book-review {
  margin-bottom: 2rem;

  .form-control {
    width: 100%;
    height: auto;
  }
}

.book-condition {
  margin-bottom: 2rem;

  .condition-img {
    display: flex;
    flex-direction: rowe;
    margin-bottom: 1rem;

    img {
      width: 100px;
      height: 100px;
      margin-right: 1rem;
    }

    .upload {
      display: flex;
      width: 100px;
      height: 100px;
      background-color: #c4c4c4;

      img {
        width: 2.5rem;
        height: 2.5rem;
        margin: auto;
      }
    }
  }

  p {
    font-size: 0.85rem;
    font-weight: bold;
  }
}

.footer-button {
  display: flex;
  flex-direction: row;
  width: 112.5%;
  height: 4rem;
  margin: 0 0 1.8rem -1.5rem;

  .left {
    display: flex;
    flex: 1 0 0;
    background-color: #524a49;

    span {
      margin: auto;
      font-size: 1.25rem;
      font-weight: bold;
      color: white;
    }
  }

  .right {
    display: flex;
    flex: 1 0 0;
    background-color: #e5dbc3;

    span {
      margin: auto;
      font-size: 1.25rem;
      font-weight: bold;
      color: #524a49;
    }
  }
}
</style>
