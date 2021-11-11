<template lang="pug">
nav.navbar.orange.lighten-1
  .nav-wrapper
    .navbar-left
      a(href="#", @click.prevent="$emit('click')")
        i.material-icons.black-text dehaze
      span.black-text {{ date | date_filter('datetime') }}

    ul.right.hide-on-small-and-down
      li
        a.dropdown-trigger.black-text(
          href="#",
          data-target="dropdown",
          ref="dropDown"
        )
          | USER NAME
          i.material-icons.right arrow_drop_down

        ul#dropdown.dropdown-content
          li
            router-link.black-text(to="/profile")
              i.material-icons account_circle
              | Profile
          li.divider(tabindex="-1")
          li
            a.black-text.blask-text(href="#", @click.prevent="logout")
              i.material-icons assignment_return
              | Sign out
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null,
  }),
  methods: {
    logout() {
      this.$router.push("/login?message=logout");
    },
  },
  mounted() {
    // when DOM-tree is ready
    this.interval = setInterval(() => {
      this.date = new Date();
    });
    this.dropdown = M.Dropdown.init(this.$refs.dropDown, {
      constrainWidth: true, // dropdown.length = text.length
    }); // reference & materialize options
  },
  beforeDestroy() {
    clearInterval(this.interval);
    if (this.dropdown && this.dropdown.destroy()) {
      this.dropdown.destroy();
    }
  },
};
</script>