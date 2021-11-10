<template lang="pug">
form.card.auth-card
  .card-content
    span.card-title InOutComes
    .input-field
      input#email(type="text")
      label(for="email") Email
      small.helper-text.invalid Email
    .input-field
      input#password.validate(type="password")
      label(for="password") Password
      small.helper-text.invalid Password
    .input-field
      input#name.validate(type="text")
      label(for="name") Name
      small.helper-text.invalid Name
    p
      label
        input(type="checkbox")
        span Agree with rules
  .card-action
    div
      button.btn.waves-effect.waves-light.auth-submit(type="submit")
        | Sign up
        i.material-icons.right send
    p.center
      | Already have an account?
      a(href="/") Sing in!
</template>
