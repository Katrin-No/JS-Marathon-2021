<template lang="pug">
div
  .page-title
    h3 Account
    button.btn.waves-effect.waves-light.btn-small
      i.material-icons refresh
  .row
    .col.s12.m6.l4
      .card.light-blue.bill-card
        .card-content.white-text
          span.card-title Account in currency
          p.currency-line
            span 12.0 Р
    .col.s12.m6.l8
      .card.orange.darken-3.bill-card
        .card-content.white-text
          .card-header
            span.card-title Rate of exchange
          table
            thead
              tr
                th Currency
                th Rate
                th Date
            tbody
              tr
                td руб
                td 12121
                td 12.12.12
</template>

<script>
export default {
  name: "home",
};
</script>
