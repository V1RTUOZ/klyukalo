import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

import Dashboard from '@/pages/Dashboard.vue'
import UserProfile from '@/pages/UserProfile.vue'
import TableList from '@/pages/TableList.vue'
import Typography from '@/pages/Typography.vue'
import Icons from '@/pages/Icons.vue'
import Maps from '@/pages/Maps.vue'
import Notifications from '@/pages/Notifications.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Главная',
        component: Dashboard
      },
      {
        path: 'user',
        name: 'Профиль',
        component: UserProfile
      },
      {
        path: 'table',
        name: 'Всякие таблички',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Типографика',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Иконки',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Карты (для трекинга пригодится)',
        meta: {
          hideFooter: true
        },
        component: Maps

      },
      {
        path: 'notifications',
        name: 'Нотификации',
        component: Notifications
      }
    ]
  }
]

export default routes
