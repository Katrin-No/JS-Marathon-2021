<template lang="pug">
div
  .page-title
    h3 Profile
  form.form
    .input-field
      input#description(type="text")
      label(for="description") Name
      span.helper-text.invalid name
    button.btn.waves-effect.waves-light(type="submit")
      | Submit
      i.material-icons.right send
</template>
