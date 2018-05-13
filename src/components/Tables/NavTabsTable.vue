<template>
  <div>
    <md-table v-model="users" @md-selected="onSelect">
      <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
        <md-table-cell>{{ item.name }}</md-table-cell>
        <md-table-cell>
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Редактировать</md-tooltip>
          </md-button>
          <md-button class="md-just-icon md-simple md-danger">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">Закрыть</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'nav-tabs-table',
  data () {
    return {
      selected: [],
      users: [
        {
          name: 'Подписать договор.'
        },
        {
          name: 'Макароны с сыром или кукуруза?'
        },
        {
          name: 'Либо он метко целится, либо одно из двух.'
        }
      ]
    }
  },
  methods: {
    onSelect: function (items) {
      this.selected = items
    }
  }
}
</script>
