<template>
  <footer class="footer">
    <div class="container">
        <nav>
            <ul>
              <li>
                <router-link :to="{path:'/dashboard'}">Главная</router-link>
              </li>
                <li>
                    <a href="#">
                        О компании
                    </a>
                </li>
                <li>
                    <a href="#">
                        Блог
                    </a>
                </li>
                <li>
                    <a href="#">
                        Контакты
                    </a>
                </li>
            </ul>
        </nav>
        <div class="copyright text-center">
          &copy; {{ new Date().getFullYear() }} <a href="mailto:okalandarashvili@yandex.ru" target="_blank">Oleg Kalandarashvili</a>, made with <i class="fa fa-heart heart"></i> for NNFormat
        </div>
    </div>
  </footer>

</template>
<script>
export default {}

</script>
<style>

</style>
