<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Имя">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Зарплата">{{ item.salary }}</md-table-cell>
        <md-table-cell md-label="Страна">{{ item.country }}</md-table-cell>
        <md-table-cell md-label="Город">{{ item.city }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'ordered-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      users: [ // https://next.json-generator.com/Ey4uBb-CV
        {
          'id': 0,
          'name': 'Moss Reynolds',
          'salary': '$2,138.22',
          'country': 'Nepal',
          'city': 'Siglerville'
        },
        {
          'id': 1,
          'name': 'Cooley Guthrie',
          'salary': '$1,413.84',
          'country': 'Monaco',
          'city': 'Blairstown'
        },
        {
          'id': 2,
          'name': 'Sosa Gould',
          'salary': '$3,347.12',
          'country': 'Saint Lucia',
          'city': 'Helen'
        },
        {
          'id': 3,
          'name': 'Myra Matthews',
          'salary': '$2,081.87',
          'country': 'Korea (North)',
          'city': 'Trona'
        },
        {
          'id': 4,
          'name': 'Finch Puckett',
          'salary': '$2,897.54',
          'country': 'Anguilla',
          'city': 'Como'
        },
        {
          'id': 5,
          'name': 'Ochoa Patton',
          'salary': '$3,875.14',
          'country': 'Bahamas',
          'city': 'Leyner'
        },
        {
          'id': 6,
          'name': 'Sullivan Garcia',
          'salary': '$1,083.99',
          'country': 'Haiti',
          'city': 'Mooresburg'
        },
        {
          'id': 7,
          'name': 'Etta Sloan',
          'salary': '$1,488.53',
          'country': 'Germany',
          'city': 'Edgewater'
        }
      ]
    }
  }
}
</script>
