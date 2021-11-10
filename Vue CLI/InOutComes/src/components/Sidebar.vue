<template lang="pug">
ul.sidenav.app-sidenav(:class="{ open: value }")
  router-link(
    v-for="link in links",
    :key="link.to",
    tag="li",
    active-class="active",
    :to="link.to",
    :exact="link.exact"
  )
    a.waves-effect.waves-orange.pointer(href="#") {{ link.title }}
</template>

<script>
export default {
  props: ["value"],
  data: () => ({
    links: [
      { title: "Account", to: "/", exact: true },
      { title: "History", to: "/history" },
      { title: "Planning", to: "/planning" },
      { title: "New record", to: "/record" },
      { title: "Categories", to: "/categories" },
    ],
  }),
};
</script>
