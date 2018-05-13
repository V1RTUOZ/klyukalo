<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <user-card>
          <template slot="expand">
            <chart-card
              :chart-data="dailySalesChart.data"
              :chart-options="dailySalesChart.options"
              :chart-type="'Line'"
              data-background-color="blue">
              <template slot="content">
                <h4 class="title">Какие-то данные</h4>
                  <p class="category">
                    <span class="text-success">Стал на <i class="fas fa-long-arrow-alt-up"></i> 10% </span> умнее.
                  </p>
              </template>

              <template slot="footer">
                <div class="stats">
                  <md-icon>access_time</md-icon>
                  тут какие-то дополнительные данные
                </div>
              </template>
            </chart-card>

            <chart-card
              :chart-data="emailsSubscriptionChart.data"
              :chart-options="emailsSubscriptionChart.options"
              :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
              :chart-type="'Bar'"
              data-background-color="red">
              <template slot="content">
                <h4 class="title">Средний коэффициент интеллекта</h4>
                  <p class="category">
                    По больнице
                  </p>
              </template>

              <template slot="footer">
                <div class="stats">
                  <md-icon>access_time</md-icon>
                  Обновлено только что
                </div>
              </template>
            </chart-card>
          </template>
        </user-card>

      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <edit-profile-form data-background-color="green">

        </edit-profile-form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  EditProfileForm,
  UserCard
} from '@/pages'

import {
  ChartCard
} from '@/components'

export default {
  components: {
    EditProfileForm,
    UserCard,
    ChartCard
  },
  data () {
    return {
      dailySalesChart: {
        data: {
          labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
          series: [
            [12, 17, 7, 17, 23, 18, 38]
          ]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50,
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

          ]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              }
            }
          }]
        ]
      }
    }
  }
}
</script>
<style>
.md-card-expand-content {
  text-align: left;
}
</style>
