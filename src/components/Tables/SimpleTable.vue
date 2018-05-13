<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Имя">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Страна">{{ item.country }}</md-table-cell>
        <md-table-cell md-label="Город">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="Зарплата">{{ item.salary }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'simple-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      users: [ // https://next.json-generator.com/V14nLbZRV
        {
          'name': 'Oliver Farrell',
          'salary': '$1,838.39',
          'country': 'Cocos (Keeling Islands)',
          'city': 'Graniteville'
        },
        {
          'name': 'Mitchell Mclaughlin',
          'salary': '$1,064.48',
          'country': 'French Southern Territories',
          'city': 'Roderfield'
        },
        {
          'name': 'Cote Evans',
          'salary': '$2,023.48',
          'country': 'South Africa',
          'city': 'Hailesboro'
        },
        {
          'name': 'Grimes Kelly',
          'salary': '$1,594.13',
          'country': 'Afghanistan',
          'city': 'Ada'
        },
        {
          'name': 'Lott Nicholson',
          'salary': '$1,850.55',
          'country': 'Morocco',
          'city': 'Yogaville'
        },
        {
          'name': 'April Fuller',
          'salary': '$1,436.29',
          'country': 'Laos',
          'city': 'Bynum'
        }
      ]
    }
  }
}
</script>
