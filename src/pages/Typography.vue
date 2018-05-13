<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Заголовок</h4>
            <p class="category">Семейство шрифтов Roboto</p>
          </md-card-header>
          <md-card-content>
            <div id="typography">
              <div class="title">
                  <h2>Типографика</h2>
              </div>
              <div class="row">
                  <div class="tim-typo">
                      <h1>
                          <span class="tim-note">Header 1</span>Жизнь прекрасна и удивительна! </h1>
                  </div>
                  <div class="tim-typo">
                      <h2>
                          <span class="tim-note">Header 2</span>Жизнь прекрасна и удивительна! </h2>
                  </div>
                  <div class="tim-typo">
                      <h3>
                          <span class="tim-note">Header 3</span>Жизнь прекрасна и удивительна! </h3>
                  </div>
                  <div class="tim-typo">
                      <h4>
                          <span class="tim-note">Header 4</span>Жизнь прекрасна и удивительна! </h4>
                  </div>
                  <div class="tim-typo">
                      <h5>
                          <span class="tim-note">Header 5</span>Жизнь прекрасна и удивительна! </h5>
                  </div>
                  <div class="tim-typo">
                      <h6>
                          <span class="tim-note">Header 6</span>Жизнь прекрасна и удивительна! </h6>
                  </div>
                  <div class="tim-typo">
                      <p>
                          <span class="tim-note">Paragraph</span>
                          Я буду лидером компании, которая в конечном итоге будет стоить миллиарды долларов, потому что я получил ответы...</p>
                  </div>
                  <div class="tim-typo">
                      <span class="tim-note">Quote</span>
                      <blockquote>
                          <p>
                              Я буду лидером компании, которая в конечном итоге будет стоить миллиарды долларов, потому что я получил ответы...
                          </p>
                          <small>
                              Канье Уэст, музыкант
                          </small>
                      </blockquote>
                  </div>
                  <div class="tim-typo">
                      <span class="tim-note">Muted Text</span>
                      <p class="text-muted">
                          Я буду лидером компании, которая в конечном итоге будет стоить миллиарды долларов, потому что я получил ответы...
                      </p>
                  </div>
                  <div class="tim-typo">
                      <span class="tim-note">Primary Text</span>
                      <p class="text-primary">
                          Я буду лидером компании, которая в конечном итоге будет стоить миллиарды долларов, потому что я получил ответы... </p>
                  </div>
                  <div class="tim-typo">
                      <span class="tim-note">Info Text</span>
                      <p class="text-info">
                          Я буду лидером компании, которая в конечном итоге будет стоить миллиарды долларов, потому что я получил ответы... </p>
                  </div>
                  <div class="tim-typo">
                      <span class="tim-note">Success Text</span>
                      <p class="text-success">
                          Я буду лидером компании, которая в конечном итоге будет стоить миллиарды долларов, потому что я получил ответы... </p>
                  </div>
                  <div class="tim-typo">
                      <span class="tim-note">Warning Text</span>
                      <p class="text-warning">
                          Я буду лидером компании, которая в конечном итоге будет стоить миллиарды долларов, потому что я получил ответы...
                      </p>
                  </div>
                  <div class="tim-typo">
                      <span class="tim-note">Danger Text</span>
                      <p class="text-danger">
                          Я буду лидером компании, которая в конечном итоге будет стоить миллиарды долларов, потому что я получил ответы... </p>
                  </div>
                  <div class="tim-typo">
                      <h2>
                          <span class="tim-note">Small Tag</span>
                          Заголовок
                          <br>
                          <small>Тег "small" в заголовке</small>
                      </h2>
                  </div>
              </div>
          </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  }
}
</script>
