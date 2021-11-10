<template lang="pug">
div
  .page-title
    h3 Records history
  .history-chart
    canvas
  section
    table
      thead
        tr
          th #
          th Amount
          th Date
          th Category
          th Type
          th Open
      tbody
        tr
          td 1
          td 1212
          td 12.12.32
          td name
          td
            span.white-text.badge.red Delay
          td
            button.btn-small.btn
              i.material-icons open_in_new
</template>
