<template lang="pug">
div
  form.card.auth-card(@submit.prevent="onSubmit")
    .card-content
      span.card-title InOutComes
      .input-field
        input#email.validate(
          type="text",
          v-model.trim="email",
          :class="{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }"
        ) 
          //- trim deletes spaces
          //- $v validator
          //- $ sistem value
        label(for="email") Email
        small.helper-text.invalid(v-if="$v.email.$dirty && !$v.email.required") 
          | Email can't be blank
        small.helper-text.invalid(
          v-else-if="$v.email.$dirty && !$v.email.email"
        ) 
          | Email is incorrect

      .input-field
        input#password.validate(
          type="password",
          v-model.trim="password",
          :class="{ invalid: ($v.password.$dirty && !$v.email.required) || ($v.password.$dirty && !$v.email.minLength) }"
        )
        label(for="password") Password
        small.helper-text.invalid(
          v-if="$v.password.$dirty && !$v.password.required"
        ) 
          | Password can't be blank
        small.helper-text.invalid(
          v-else-if="$v.password.$dirty && !$v.email.minLength"
        ) 
          | Password has {{ password.length }} chars. Minimum is {{ $v.password.$params.minLength.min }}

    .card-action
      div
        button.btn.waves-effect.waves-light.auth-submit(type="submit")
          | Sign in
          i.material-icons.right send
      p.center
        | Don't have any account? &#32
        router-link(to="/register") Sign up
//- prevent, weil submit normalerweise die Seite reloadet, was wir nicht wollen
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "login",
  data: () => ({
    email: "",
    password: "",
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        // if the hole form is invalid
        this.$v.$touch(); // activate validation
        return;
      }
      this.$router.push("/"); // after login redirect to home page
    },
  },
};
</script>
