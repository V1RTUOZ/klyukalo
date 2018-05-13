<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Уведомления</h4>
            <p class="category"><i class="fa fa-heart heart"></i></p>
          </md-card-header>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-100">
                <h5>Стили</h5>
                <div class="alert alert-info">
                  <span>Просто уведомление</span>
                </div>
                <div class="alert alert-info">
                  <button type="button" aria-hidden="true" class="close">×</button>
                  <span>Уведомление с крестиком.</span>
                </div>
                <div class="alert alert-info alert-with-icon" data-notify="container">
                  <button type="button" aria-hidden="true" class="close">×</button>
                  <i data-notify="icon" class="material-icons">add_alert</i>
                  <span data-notify="message">Уведомление с крестиком и иконкой.</span>
                </div>
                <div class="alert alert-info alert-with-icon" data-notify="container">
                  <button type="button" aria-hidden="true" class="close">×</button>
                  <i data-notify="icon" class="material-icons">add_alert</i>
                  <span data-notify="message">Многострочная нотификация с иконкой и крестиком. Вы можете видеть, что иконка и крестик всегды выровненны по вертикали. Ото красивя штука. Так что вам не нужно заботиться о стиле.</span>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-100">
                <h5>Notification states</h5>
                <div class="alert alert-info">
                  <button type="button" aria-hidden="true" class="close">×</button>
                  <span><b> Info - </b> Обычное уведомление с классом ".alert-info"</span>
                </div>
                <div class="alert alert-success">
                  <button type="button" aria-hidden="true" class="close">×</button>
                  <span><b> Success - </b> Обычное уведомление с классом ".alert-success"</span>
                </div>
                <div class="alert alert-warning">
                  <button type="button" aria-hidden="true" class="close">×</button>
                  <span><b> Warning - </b> Обычное уведомление с классом ".alert-warning"</span>
                </div>
                <div class="alert alert-danger">
                  <button type="button" aria-hidden="true" class="close">×</button>
                  <span><b> Danger - </b> Обычное уведомление с классом ".alert-danger"</span>
                </div>
                <div class="alert alert-primary">
                  <button type="button" aria-hidden="true" class="close">×</button>
                  <span><b> Primary - </b> Обычное уведомление с классом ".alert-primary"</span>
                </div>
              </div>

              <div class="md-layout-item md-size-100">
                <div class="places-buttons text-center">
                  <h5 class="text-center">Позиции уведомлений
                    <p class="category">Нажмите для демонстрации</p>
                  </h5>
                  <md-button class="md-primary" @click="notifyVue('top','left')">Top Left</md-button>
                  <md-button class="md-primary" @click="notifyVue('top','center')">Top Center</md-button>
                  <md-button class="md-primary" @click="notifyVue('top','right')">Top Right</md-button>
                  <md-button class="md-primary" @click="notifyVue('bottom','left')">Bottom Left</md-button>
                  <md-button class="md-primary" @click="notifyVue('bottom','center')">Bottom Center</md-button>
                  <md-button class="md-primary" @click="notifyVue('bottom','right')">Bottom Right</md-button>
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
export default {
  data () {
    return {
      type: ['', 'info', 'success', 'warning', 'danger'],
      notifications: {
        topCenter: false
      }
    }
  },
  methods: {
    notifyVue (verticalAlign, horizontalAlign) {
      var color = Math.floor((Math.random() * 4) + 1)
      this.$notify(
        {
          message: 'Добро пожаловать, <b>Человек</b>!',
          icon: 'add_alert',
          horizontalAlign: horizontalAlign,
          verticalAlign: verticalAlign,
          type: this.type[color]
        })
    }
  }
}

</script>
