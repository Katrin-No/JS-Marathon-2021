<template lang="pug">
form.card.auth-card(@submit.prevent="onSubmit")
  .card-content
    span.card-title(style="text-align: center") In Out Comes
    .input-field
      input#email(
        type="text",
        v-model.trim="email",
        :class="{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }"
      ) 
      label(for="email") Email
      small.helper-text.invalid(v-if="$v.email.$dirty && !$v.email.required") 
        | Email can't be blank
      small.helper-text.invalid(v-else-if="$v.email.$dirty && !$v.email.email") 
        | Email is incorrect

    .input-field
      input#password(
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
        v-else-if="$v.password.$dirty && !$v.password.minLength"
      ) 
        | Password has only {{ password.length }} chars. Minimum is {{ $v.password.$params.minLength.min }}

    .input-field
      input#name(
        type="text",
        v-model.trim="name",
        :class="{ invalid: $v.name.$dirty && !$v.name.required }"
      )
      label(for="name") Name
      small.helper-text.invalid(v-if="$v.name.$dirty && !$v.name.required") 
        | Name can't be blank

    p
      label
        input(type="checkbox", v-model="agree")
        span Agree with rules

  .card-action
    div
      button.btn.waves-effect.waves-light.auth-submit(type="submit")
        | Sign up
        i.material-icons.right send
    p.center
      | Already have an account? &#32
      router-link(to="/login") Sing in!
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "register",
  data: () => ({
    email: "",
    password: "",
    name: "",
    agree: false,
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    name: { required },
    agree: { checked: (value) => value },
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };

      console.log(formData);
      this.$router.push("/"); // after login redirect to home page
    },
  },
};
</script>