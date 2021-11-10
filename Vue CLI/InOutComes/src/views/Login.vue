<template lang="pug">
div
  form.card.auth-card
    .card-content
      span.card-title InOutComes
      .input-field
        input#email.validate(type="text")
        label(for="email") Email
        small.helper-text.invalid Email
      .input-field
        input#password.validate(type="password")
        label(for="password") Password
        small.helper-text.invalid Password
    .card-action
      div
        button.btn.waves-effect.waves-light.auth-submit(type="submit")
          | Sign in
          i.material-icons.right send
      p.center
        | Don't have any account?
        a(href="/") Sign up
</template>