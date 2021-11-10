<template lang="pug">
div
  .page-title
    h3 New record
  form.form
    .input-field
      select
        option name cat
      label Choose category
    p
      label
        input.with-gap(name="type", type="radio", value="income")
        span Income
    p
      label
        input.with-gap(name="type", type="radio", value="outcome")
        span Outcome
    .input-field
      input#amount(type="number")
      label(for="amount") Amount
      span.helper-text.invalid amount пароль
    .input-field
      input#description(type="text")
      label(for="description") Description
      span.helper-text.invalid description password
    button.btn.waves-effect.waves-light(type="submit")
      | Create
      i.material-icons.right send
</template>
