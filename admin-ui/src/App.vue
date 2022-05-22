<template>
  <div>
    <BootstrapSidebar
        :initial-show="initialShow"
        :links="links"
        :header="header"
        @sidebarChanged="onSidebarChanged"
    >
      <template v-slot:navbar>
        <b-navbar
            id="mainNavbar"
            toggleable="lg"
            type="light"
            variant="light"
            fixed="top"
        >
          <b-navbar-nav>
            <b-nav-item>Coursehash Admin Panel</b-nav-item>
          </b-navbar-nav>
        </b-navbar>
      </template>

      <template v-slot:content>
        <b-container style="margin-top: 56px;">
          <transition name="slide" mode="out-in">
            <router-view/>
          </transition>
        </b-container>
      </template>
    </BootstrapSidebar>
  </div>
</template>

<script>
import BootstrapSidebar from "vue-bootstrap-sidebar";
export default {
  components: {
    BootstrapSidebar,
  },
  data() {
    return {
      initialShow: true,
      header: "<h3>Menü</h3>",
      links: [
        { name: "Anasayfa", href: { name: "home" }, faIcon: ["fas", "home"] },
        { name: "Kurslar", href: { name: "courses" }, faIcon: "users" },
        { name: "Blog Yazıları", href: { name: "contact" }, faIcon: "phone" },
        { name: "Ayarlar", href: { name: "contact" }, faIcon: "phone" },
      ],
    };
  },
  methods: {
    onSidebarChanged() {},
  },
};
</script>

<style>
* {
  font-family: "Prompt", sans-serif;
}

.slide-enter {
  opacity: 0;
}

.slide-leave {
}

.slide-enter-active {
  animation: slide-in 1.25s ease-out forwards;
  transition: opacity 0.75s;
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
@import "node_modules/vue-bootstrap-sidebar/src/scss/default-theme";
</style>
