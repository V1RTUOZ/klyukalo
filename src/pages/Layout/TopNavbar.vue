<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{$route.name}}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button class="md-just-icon md-simple md-toolbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-autocomplete">
            <md-autocomplete class="search" v-model="selectedEmployee" :md-options="employees">
              <label>Искать...</label>
            </md-autocomplete>
          </div>
          <md-list>
            <md-list-item to="/">
              <i class="material-icons">dashboard</i>
              <p class="hidden-lg hidden-md">Главная</p>
            </md-list-item>

            <md-list-item to="/notifications" class="dropdown">
              <drop-down>
                <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="material-icons">notifications</i>
                  <span class="notification">3</span>
                  <p class="hidden-lg hidden-md">Уведомления</p>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#">Тут какие-то дела творятся.</a></li>
                  <li><a href="#">У вас молоко убежало!</a></li>
                  <li><a href="#">Еще какая-то движуха...</a></li>
                </ul>
              </drop-down>
            </md-list-item>

            <md-list-item to="/user">
              <i class="material-icons">person</i>
              <p class="hidden-lg hidden-md">Профиль</p>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>

  </md-toolbar>
</template>

<script>

export default{
  data () {
    return {
      selectedEmployee: null,
      employees: [
        'Иванов Иван',
        'Петров Петр',
        'Иван Федорович Кризенштерн',
        'Кукуруза'
      ]
    }
  },
  methods: {
    toggleSidebar () {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    }
  }
}
</script>

<style lang="css">
</style>
