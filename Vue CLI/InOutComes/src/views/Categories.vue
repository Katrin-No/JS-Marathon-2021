<template lang="pug">
div
  .page-title
    h3 Categories
  section
    .row
      .col.s12.m6
        div
          .page-subtitle
            h4 Create
          form
            .input-field
              input#name(type="text")
              label(for="name") Name
              span.helper-text.invalid Enter a name
            .input-field
              input#limit(type="number")
              label(for="limit") Limit
              span.helper-text.invalid Min value
            button.btn.waves-effect.waves-light(type="submit")
              | Create
              i.material-icons.right send
      .col.s12.m6
        div
          .page-subtitle
            h4 Edit
          form
            .input-field
              select
                option Category
              label Choose category
            .input-field
              input#name(type="text")
              label(for="name") Name
              span.helper-text.invalid TITLE
            .input-field
              input#limit(type="number")
              label(for="limit") Limit
              span.helper-text.invalid LIMIT
            button.btn.waves-effect.waves-light(type="submit")
              | Update
              i.material-icons.right send
</template>